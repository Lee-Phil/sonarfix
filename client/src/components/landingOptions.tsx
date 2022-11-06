import logoEdit from "src/assets/logoEDIT.png";
import logoCal from "src/assets/logoCALENDAR.png";
import logoGear from "src/assets/logoGEAR.png";
import logoUpload from "src/assets/logoUPLOAD.png";
import logoRequest from "src/assets/logoREQUEST.png";
import logoFile from "src/assets/logoFILE.png";

type Landing = {
  src: any;
  alt: string;
  placeholderTitle: string;
  placeholderDesc: string;
  link: string;
};

export const NurseArray: Array<Landing> = [
  {
    src: logoEdit.src,
    alt: "Edit Logo.",
    placeholderTitle: "CHANGE PREFERENCES",
    placeholderDesc: "Change your account preferences such as time, frequency, and day or night shifts.",
    // this is a placeholder
    link: "/login",
  },
  {
    src: logoCal.src,
    alt: "Calendar Logo.",
    placeholderTitle: "VIEW WORK WEEK",
    placeholderDesc:
      "View your week and plan for maximum productivity. Weekly work plans help you see the bigger picture.",
    link: "/calendar",
  },
  {
    src: logoGear.src,
    alt: "Gear Logo.",
    placeholderTitle: "ACCOUNT SETTING",
    placeholderDesc: "Change your account settings. Let us know of any changes!",
    // this is a placeholder
    link: "/login",
  },
];

export const SupervisorArray: Array<Landing> = [
  {
    src: logoUpload.src,
    alt: "Cloud Logo.",
    placeholderTitle: "UPLOAD A FILE",
    placeholderDesc: "Upload a request form or dataset for this bi-weekly period.",
    link: "/uploadRequest",
  },
  {
    src: logoRequest.src,
    alt: "Request Logo.",
    placeholderTitle: "SUBMIT A REQUEST",
    placeholderDesc: "Submit an individual form for this bi-weekly period.",
    link: "/RequestForm",
  },
  {
    src: logoFile.src,
    alt: "File Logout.",
    placeholderTitle: "MY UPLOADS",
    placeholderDesc: "View the status of your requested shifts.",
    // this is a placeholder
    link: "../supervisor/myRequests",
  },
];
