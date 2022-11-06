import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateSupervisorDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  medicalLicense: string;

  @IsNotEmpty()
  birthday: string;

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

  role: string;
}
