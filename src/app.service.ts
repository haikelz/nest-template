import { Injectable } from "@nestjs/common";
import { GetHelloProps } from "interfaces";

@Injectable()
export class AppService {
  getHello(): GetHelloProps {
    return {
      message: "Hello!",
    };
  }
}
