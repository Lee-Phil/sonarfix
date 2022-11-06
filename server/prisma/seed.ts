// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  prisma.$connect();
  const user = await prisma.user.create({
    data: {
      email: "richardNurse@gmail.com",
      firstName: "Richard",
      lastName: "Smalls",
      medicalLicense: "203 1234",
      birthday: "1969-06-09",
      phone: "4388675309",
      role: "NURSE",
      line1: "4530 Maple Drive",
      line2: "Unit 4A",
      zip: "H3A1T2",
      city: "Montreal",
      province: "Quebec",
      type: "NURSE",
      password: "DSmalls",
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: "carmeninNurse@gmail.com",
      firstName: "Carmenin",
      lastName: "Cider",
      medicalLicense: "219 4567",
      birthday: "1997-08-14",
      phone: "5149664782",
      role: "NURSE",
      line1: "420 High Lane",
      line2: "Apt 38",
      zip: "H1A4T6",
      city: "Westmount",
      province: "Quebec",
      type: "NURSE",
      password: "CInsideMe",
    },
  });
  const user3 = await prisma.user.create({
    data: {
      email: "jennySupervisor@gmail.com",
      firstName: "Jenny",
      lastName: "Talls",
      medicalLicense: "197 9087",
      birthday: "1970-02-11",
      phone: "5147654784",
      role: "SUPERVISOR",
      line1: "903 Dickinson Street",
      line2: "",
      zip: "H6R7D5",
      city: "Kirkland",
      province: "Quebec",
      type: "SUPERVISOR",
      password: "Sugma6",
    },
  });

  await prisma.request.create({
    data: {
      supervisorID: 1,
      startTime: "2022-10-11 12:00",
      endTime: "2022-10-11 14:00",
      specialization: "NONE",
      line1: "123 Seasame Street",
      zip: "H5C 3J4",
      city: "Montreal",
      province: "Quebec",
      phone: "911",
    },
  });

  await prisma.request.create({
    data: {
      supervisorID: 1,
      nurseID: 1,
      startTime: "2022-20-12 12:00",
      endTime: "2022-20-12 14:00",
      specialization: "PRIMARY_CARE",
      line1: "123 Seasame Street",
      line2: "Ward 5A",
      zip: "H5C 3J4",
      city: "Montreal",
      province: "Quebec",
      phone: "911",
      comments:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      status: "FILLED",
    },
  });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
