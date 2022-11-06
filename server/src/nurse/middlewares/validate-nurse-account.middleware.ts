import { HttpException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";

@Injectable()
export class ValidateNurseAccountMiddleware implements NestMiddleware {
  use(req: Request, next: NextFunction) {
    const { valid } = req.headers;
    if (valid) {
      next();
    } else {
      throw new HttpException("Account is invalid", HttpStatus.UNAUTHORIZED);
    }
  }
}
