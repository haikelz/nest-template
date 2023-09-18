import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";
import { GetHelloProps } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): GetHelloProps {
    return this.appService.getHello();
  }
}
