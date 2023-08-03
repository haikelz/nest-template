import { Injectable } from "@nestjs/common";

@Injectable()
export class IdService {
  getId(id: string): { id: string } {
    return {
      id,
    };
  }
}
