import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";

const AUTH_PASS = "121212";

@Injectable()
export class ValidateNurseMiddleware implements NestMiddleware {
  use(req: Request, next: NextFunction) {
    console.log("Inside the Validate Nurse MiddleWare");
    const { authorization } = req.headers;
    if (!authorization) return new HttpException("No Authentication Token Provided", HttpStatus.BAD_REQUEST);

    if (authorization === AUTH_PASS) {
      next();
    } else {
      return new HttpException("Invalid Authentication Token Provided.", HttpStatus.BAD_REQUEST);
    }
    next();
  }
}
