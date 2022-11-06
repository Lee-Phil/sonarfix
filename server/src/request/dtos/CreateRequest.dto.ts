import { IsNotEmpty } from "class-validator";
import { Specialization, Status } from "@prisma/client";

export class CreateRequestDto {
  // Using Class Validator to check backend fields
  @IsNotEmpty()
  supervisorID: number;

  nurseID: number;

  @IsNotEmpty()
  startTime: string;

  @IsNotEmpty()
  endTime: string;

  //Checks what kind of nurse the request needs
  //ex: NONE, PRIMARY_CARE, ADULT_CARE, MENTAL_HEALTH, PEDIATRICS, NEONATOLOGY
  specialization: Specialization;

  @IsNotEmpty()
  line1: string;

  line2: string;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  province: string;

  @IsNotEmpty()
  phone: string;

  comments: string;

  //The status of the request, filled, unfilled, completed, etc
  status: Status;
}
