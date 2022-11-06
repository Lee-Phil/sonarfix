import * as yup from "yup";
import moment from "moment";

type CustomInput = {
  name: any;
  placeholder: string;
  type: string;
};

export const RequestFormOptions: Array<CustomInput> = [
  {
    name: "startTime",
    placeholder: "Start Time",
    type: "text",
  },
  {
    name: "endTime",
    placeholder: "End Time",
    type: "text",
  },
  {
    name: "shiftdate",
    placeholder: "Shift Date",
    type: "date",
  },
  {
    name: "phone",
    placeholder: "Contact Number",
    type: "tel",
  },
];

type CustomProfessionOptions = {
  id: string;
  name: any;
  placeholder: string;
  type: string;
};

export const ProfessionArray: Array<CustomProfessionOptions> = [
  {
    id: "0",
    name: "NONE",
    placeholder: "Floater",
    type: "text",
  },
  {
    id: "1",
    name: "PRIMARY_CARE",
    placeholder: "Primary Care",
    type: "radio",
  },
  {
    id: "2",
    name: "ADULT_CARE",
    placeholder: "Adult Care",
    type: "text",
  },
  {
    id: "3",
    name: "MENTAL_HEALTH",
    placeholder: "Mental Health",
    type: "text",
  },
  {
    id: "4",
    name: "PEDIATRICS",
    placeholder: "Pediatrics",
    type: "text",
  },
  {
    id: "5",
    name: "NEONATOLOGY",
    placeholder: "Neonatology",
    type: "text",
  },
];

export const RequestFormValidation = {
  startTime: yup
    .string()
    .required("Start time cannot be empty")
    .matches(/([01]?\d|2[0-3]):[0-5]\d/, "Please Enter the Start Time with respect to 24HR HR:MM Format"),
  endTime: yup
    .string()
    .required("End time cannot be empty")
    .matches(/([01]?\d|2[0-3]):[0-5]\d/, "Please Enter the End Time with respect to 24HR HR:MM Format")
    .test("is-greater", "End Time should be greater than Start Time", function (value) {
      const { startTime } = this.parent;
      return moment(value, "HH:mm").isSameOrAfter(moment(startTime, "HH:mm"));
    }),
  line1: yup.string().required("Line 1 is required"),
  zip: yup.string().required("Zip is required"),
  city: yup.string().required("City is required"),
  province: yup.string().required("Province is required"),
  shiftdate: yup
    .date()
    .nullable()
    .transform((curr: any, orig: any) => (orig === "" ? null : curr))
    .required("Shift Date is required"),
  phone: yup
    .string()
    .nullable()
    .transform((curr: any, orig: any) => (orig === "" ? null : curr))
    .required("Contact Number is required"),
  specialization: yup.string().required("Specialization is required"),
};
