type CustomInput = {
  name: any;
  placeholder: string;
  type: string;
};

export const RegistrationInputOptions: Array<CustomInput> = [
  {
    name: "email",
    placeholder: "Email",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
  {
    name: "firstName",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "lastName",
    placeholder: "Last Name",
    type: "text",
  },
  {
    name: "medicalLicense",
    placeholder: "Medical License Number",
    type: "text",
  },
  {
    name: "phone",
    placeholder: "Phone Number",
    type: "tel",
  },
  {
    name: "birthday",
    placeholder: "Birthday",
    type: "date",
  },
  {
    name: "province",
    placeholder: "Province",
    type: "text",
  },
  {
    name: "city",
    placeholder: "City",
    type: "text",
  },
  {
    name: "zip",
    placeholder: "Zip",
    type: "text",
  },
  {
    name: "line1",
    placeholder: "Line 1",
    type: "text",
  },
];

type CustomRadioOptions = {
  id: string;
  name: any;
  value: string;
  type: string;
};

export const RegistrationRadioOptions: Array<CustomRadioOptions> = [
  {
    id: "1",
    name: "nurse",
    value: "NURSE",
    type: "radio",
  },
  {
    id: "2",
    name: "supervisor",
    value: "SUPERVISOR",
    type: "radio",
  },
];
