import { Module } from "@nestjs/common";
import { OrderProcessingStateModuleBase } from "./base/orderProcessingState.module.base";
import { OrderProcessingStateService } from "./orderProcessingState.service";
import { OrderProcessingStateController } from "./orderProcessingState.controller";
import { OrderProcessingStateResolver } from "./orderProcessingState.resolver";

@Module({
  imports: [OrderProcessingStateModuleBase],
  controllers: [OrderProcessingStateController],
  providers: [OrderProcessingStateService, OrderProcessingStateResolver],
  exports: [OrderProcessingStateService],
})
export class OrderProcessingStateModule {}
