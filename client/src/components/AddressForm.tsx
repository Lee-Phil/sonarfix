type CustomInput = {
  name: any;
  placeholder: string;
  type: string;
};

export const AddressForm: Array<CustomInput> = [
  {
    name: "line1",
    placeholder: "Line 1",
    type: "text",
  },
  {
    name: "line2",
    placeholder: "Line 2",
    type: "text",
  },
  {
    name: "zip",
    placeholder: "Zip",
    type: "text",
  },
  {
    name: "city",
    placeholder: "City",
    type: "text",
  },
  {
    name: "province",
    placeholder: "Province",
    type: "text",
  },
];
