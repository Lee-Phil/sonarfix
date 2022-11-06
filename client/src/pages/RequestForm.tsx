import Link from "next/link";
import AppFooter from "../components/appLayout/appFooter";
import AppHeader from "../components/appLayout/appHeader";
import AppDivider from "../components/appLayout/appDivider";
import { Box, Container, VStack } from "@chakra-ui/layout";
import { Button, Flex, FormControl, FormLabel, Input, Select, Spacer, Textarea } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import RegistrationErrorMessage from "../components/RegistrationErrorMessage";
import * as yup from "yup";
import { RequestFormOptions, RequestFormValidation, ProfessionArray } from "../components/RequestFormOptions";
import { AddressForm } from "../components/AddressForm";

export default function RequestForm() {
  const options = RequestFormOptions;
  const professionOptions = ProfessionArray;

  //Creating the form data type
  type FormData = {
    supervisorID: number;
    startTime: string;
    endTime: string;
    line1: string;
    line2: string;
    zip: string;
    city: string;
    province: string;
    shiftdate: string;
    phone: string;
    comments: string;
    specialization: string;
  };

  const intialValues: FormData = {
    // Using 1 as a placeholder needs actual SupervisorID from session
    supervisorID: 1,
    startTime: "",
    endTime: "",
    line1: "",
    line2: "",
    zip: "",
    city: "",
    province: "",
    shiftdate: "",
    phone: "",
    comments: "",
    specialization: "NONE",
  };

  const requestFormValidation = RequestFormValidation;
  const schema = yup
    //Creating the yup schema for validation
    .object()
    .shape(requestFormValidation)
    .required();

  //Hooks
  const [data] = useState(intialValues);

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
    const parsedDate = JSON.stringify(data.shiftdate);
    const unquotedDate = parsedDate.replace(/\"/g, "");
    const newDate = unquotedDate.split("T", 2);

    const parsedStartTime = JSON.stringify(data.startTime);
    const unquotedStartTime = parsedStartTime.replace(/\"/g, "");

    const parsedEndTime = JSON.stringify(data.endTime);
    const unquotedEndTime = parsedEndTime.replace(/\"/g, "");

    // TODO WHEN BACKEND EVENTS ARE CREATED
    // Add logic if to include T0 if the time falls between 00:00 -> 0:900, constructor needs the form HH:MM
    // const timeSplit = unquotedStartTime.split(':')
    // const finalStartTime = new Date(newDate[0] + "T0" + unquotedStartTime);

    const finalStartTime = newDate[0] + " " + unquotedStartTime;
    const finalEndTime = newDate[0] + " " + unquotedEndTime;

    const finalData = {
      supervisorID: data.supervisorID,
      startTime: finalStartTime,
      endTime: finalEndTime,
      line1: data.line1,
      line2: data.line2,
      zip: data.zip,
      city: data.city,
      province: data.province,
      phone: data.phone,
      comments: data.comments,
      specialization: data.specialization,
    };

    const requestData = JSON.stringify(finalData);
    console.log(finalData);

    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/request/create", {
      method: "POST",
      body: requestData,
      headers: { "Content-Type": "application/json" },
    }).then(data => console.log(data));
  };

  const onError = (error: any) => {
    console.log("ERROR DID NOT SUBMIT");
    console.log(error);
  };

  return (
    <>
      <AppHeader />
      <AppDivider />
      <VStack zIndex="1" bgColor={"#DEF0EE"} h="calc(100vh - 0)" w="80%" marginLeft={"auto"} marginRight={"auto"}>
        <Spacer />
        <Container
          className="request-card"
          maxWidth={"800px"}
          width={["100%", "xxl"]}
          border={"1px"}
          margin={["15%", "10%", "5%"]}>
          <VStack spacing="0">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <Box>
                <FormControl>
                  {/*Creating the Input Fields for the form using the map function for arrays */}
                  <>
                    <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
                      {options.map(input => {
                        return (
                          <Flex flexDirection="column" flexWrap="wrap" key={input.name}>
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
                      {AddressForm.map(input => {
                        return (
                          <Flex flexDirection="column" flexWrap="wrap" key={input.name}>
                            <FormLabel className={`${input.placeholder === "Line 2" ? "" : "required-reg"}`}>
                              {input.placeholder}
                            </FormLabel>
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
                      <Flex flexDirection="column" flexWrap="wrap" justifyContent="space-evenly">
                        <FormLabel className="required-reg">Specialization</FormLabel>
                        <Select
                          placeholder="Select One"
                          {...register("specialization")}
                          width={["2xs", "200px"]}
                          height={["40px", "50px"]}
                          marginBottom="1rem">
                          {professionOptions.map(input => {
                            return (
                              <option key={input.id} value={input.name}>
                                {input.placeholder}
                              </option>
                            );
                          })}
                        </Select>
                      </Flex>
                      <Flex flexDirection="column" flexWrap="wrap" justifyContent="space-evenly">
                        <FormLabel>Comments</FormLabel>
                        <Textarea
                          placeholder="Additional Comments"
                          maxWidth={["100%"]}
                          width={["2xs", "430px"]}
                          height={["80px", "100px"]}
                          marginBottom="1rem"
                          {...register("comments")}
                        />
                      </Flex>
                    </Flex>
                  </>
                  <RegistrationErrorMessage error={errors.startTime} errorMessage={errors.startTime?.message} />
                  <RegistrationErrorMessage error={errors.endTime} errorMessage={errors.endTime?.message} />
                  <RegistrationErrorMessage error={errors.phone} errorMessage={errors.phone?.message} />
                  <RegistrationErrorMessage error={errors.shiftdate} errorMessage={errors.shiftdate?.message} />
                  <RegistrationErrorMessage error={errors.province} errorMessage={errors.province?.message} />
                  <RegistrationErrorMessage error={errors.city} errorMessage={errors.city?.message} />
                  <RegistrationErrorMessage error={errors.zip} errorMessage={errors.zip?.message} />
                  <RegistrationErrorMessage error={errors.line1} errorMessage={errors.line1?.message} />
                  <RegistrationErrorMessage
                    error={errors.specialization}
                    errorMessage={errors.specialization?.message}
                  />
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
                  Submit
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
        <Spacer />
      </VStack>
      <AppFooter />
    </>
  );
}
