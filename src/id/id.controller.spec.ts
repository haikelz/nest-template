import { Test, TestingModule } from "@nestjs/testing";

import { IdController } from "./id.controller";
import { IdService } from "./id.service";

describe("IdController", () => {
  let controller: IdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdController],
      providers: [IdService],
    }).compile();

    controller = module.get<IdController>(IdController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
