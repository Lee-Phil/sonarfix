import { Box, Container, VStack } from "@chakra-ui/layout";
import { Button, Flex, FormControl, FormLabel, Image, Input, Radio, RadioGroup } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import schLogo from "../assets/scheduleMe.png";
import RegistrationErrorMessage from "../components/RegistrationErrorMessage";
import { RegistrationInputOptions, RegistrationRadioOptions } from "../components/RegistrationInputOptions";

export default function Registration() {
  const NURSE_ROLE = "NURSE";
  //Getting Input Options
  const options = RegistrationInputOptions;
  const radioOptions = RegistrationRadioOptions;
  //Creating the form data type
  type FormData = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    medicalLicense: string;
    phone: string;
    birthday: string;
    province: string;
    city: string;
    zip: string;
    line1: string;
    line2: string;
    role: string;
  };

  const intialValues: FormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    medicalLicense: "",
    phone: "",
    birthday: "",
    province: "",
    city: "",
    zip: "",
    line1: "",
    line2: "",
    role: "",
  };

  //Creating the yup schema for validation
  const schema = yup
    .object()
    .shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().required("Password is required").min(8, "Password must be 8 characters at minimum"),
      firstName: yup.string().required("First Name is required"),
      lastName: yup.string().required("Last Name is required"),
      medicalLicense: yup.string().required("Practicing Nurse Lisence is required"),
      phone: yup
        .string()
        .nullable()
        .transform((curr: any, orig: any) => (orig === "" ? null : curr))
        .required("Phone Number is required"),
      birthday: yup
        .date()
        .nullable()
        .transform((curr: any, orig: any) => (orig === "" ? null : curr))
        .required("Birthday is required"),
      province: yup.string().required("Province is required"),
      city: yup.string().required("City is required"),
      zip: yup.string().required("Zip is required"),
      line1: yup.string().required("Line 1 is required"),
      role: yup.string().required("Role is required"),
    })
    .required();

  //Hooks
  const [data] = useState(intialValues);

  //Object Destructring the useForm object to get some methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  //Onsubmit and On Error functions
  const onSubmit = async data => {
    const registrationData = JSON.stringify(data);
    console.log(data);

    if (data.role === NURSE_ROLE) {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/nurse/create", {
        method: "POST",
        body: registrationData,
        headers: { "Content-Type": "application/json" },
      }).then(data => console.log(data));
    } else {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/supervisor/create", {
        method: "POST",
        body: registrationData,
        headers: { "Content-Type": "application/json" },
      }).then(data => console.log(data));
    }
    // .then(response => response.json())
  };

  const onError = (error: any) => {
    console.log("ERROR DID NOT SUBMIT");
    console.log(error);
  };

  //Setting up the radio button
  const [value, setValue] = useState("");

  return (
    <Container width={["100%", "xxl"]} border={"1px"}>
      <VStack spacing="0">
        <Box marginTop={["15%", "5%"]}>
          <Image src={schLogo.src} width={[250, 350]} />
        </Box>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Box>
            <FormControl>
              {/*Creating the Input Fields for the form using the map function for arrays */}
              <>
                <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                  {options.map(input => {
                    return (
                      <Flex flexDirection="column" flexWrap="wrap">
                        <FormLabel className="required-reg">{input.placeholder}</FormLabel>
                        <Input
                          type={input.type}
                          placeholder={input.placeholder}
                          width={["2xs", "200px"]}
                          height={["40px", "50px"]}
                          marginBottom="1rem"
                          {...register(input.name)}
                        />
                      </Flex>
                    );
                  })}
                  <Flex flexDirection="column" flexWrap="wrap">
                    <FormLabel>Line 2</FormLabel>
                    <Input
                      type="line2"
                      placeholder="Line 2"
                      width={["2xs", "200px"]}
                      height={["40px", "50px"]}
                      marginBottom="1rem"
                    />
                  </Flex>
                </Flex>
                <FormLabel className="required-reg">Please pick the role of this account:</FormLabel>
                {radioOptions.map(input => {
                  return (
                    <RadioGroup onChange={setValue} value={value}>
                      <Flex justifyContent="start" marginTop="5px" marginBottom="20px">
                        <Radio type={input.type} value={input.value} {...register("role")}>
                          {input.value}
                        </Radio>
                      </Flex>
                    </RadioGroup>
                  );
                })}
              </>

              <RegistrationErrorMessage error={errors.email} errorMessage={errors.email?.message} />
              <RegistrationErrorMessage error={errors.password} errorMessage={errors.password?.message} />
              <RegistrationErrorMessage error={errors.firstName} errorMessage={errors.firstName?.message} />
              <RegistrationErrorMessage error={errors.lastName} errorMessage={errors.lastName?.message} />
              <RegistrationErrorMessage error={errors.medicalLicense} errorMessage={errors.medicalLicense?.message} />
              <RegistrationErrorMessage error={errors.phone} errorMessage={errors.phone?.message} />
              <RegistrationErrorMessage error={errors.birthday} errorMessage={errors.birthday?.message} />
              <RegistrationErrorMessage error={errors.province} errorMessage={errors.province?.message} />
              <RegistrationErrorMessage error={errors.city} errorMessage={errors.city?.message} />
              <RegistrationErrorMessage error={errors.zip} errorMessage={errors.zip?.message} />
              <RegistrationErrorMessage error={errors.line1} errorMessage={errors.line1?.message} />
              <RegistrationErrorMessage error={errors.role} errorMessage={errors?.role?.message} />
            </FormControl>
          </Box>
          <Flex justifyContent="center" marginBottom="25px">
            <Button
              type="submit"
              marginLeft={"10px"}
              marginRight={"10px"}
              borderRadius={["20px", "30px"]}
              padding={["20px", "30px"]}
              backgroundColor="#ff6600">
              Signup
            </Button>
            <Link href="/">
              <a>
                <Button
                  type="submit"
                  marginLeft={"10px"}
                  marginRight={"10px"}
                  borderRadius={["20px", "30px"]}
                  padding={["20px", "30px"]}
                  backgroundColor="#ff6600">
                  Cancel
                </Button>
              </a>
            </Link>
          </Flex>
        </form>
      </VStack>
    </Container>
  );
}
