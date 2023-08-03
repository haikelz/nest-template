import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { AppService } from "./app.service";
import { GetHelloProps } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  getHello(): GetHelloProps {
    return this.appService.getHello();
  }
}
