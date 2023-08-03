import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { IdService } from "./id.service";

@Controller()
export class IdController {
  constructor(private readonly idService: IdService) {}

  @TypedRoute.Get("/:id")
  getId(@TypedParam("id") id: string) {
    return this.idService.getId(id);
  }
}
