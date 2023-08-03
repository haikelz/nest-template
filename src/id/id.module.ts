import { Module } from "@nestjs/common";

import { IdController } from "./id.controller";
import { IdService } from "./id.service";

@Module({
  controllers: [IdController],
  providers: [IdService],
})
export class IdModule {}
