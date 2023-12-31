import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

/**
 * @see https://docs.nestjs.com/techniques/caching
 */
@Module({
  imports: [CacheModule.register({ isGlobal: true })],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
