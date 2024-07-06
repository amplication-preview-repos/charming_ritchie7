import { Module } from "@nestjs/common";
import { UserPaymentProcessingStateModuleBase } from "./base/userPaymentProcessingState.module.base";
import { UserPaymentProcessingStateService } from "./userPaymentProcessingState.service";
import { UserPaymentProcessingStateController } from "./userPaymentProcessingState.controller";
import { UserPaymentProcessingStateResolver } from "./userPaymentProcessingState.resolver";

@Module({
  imports: [UserPaymentProcessingStateModuleBase],
  controllers: [UserPaymentProcessingStateController],
  providers: [
    UserPaymentProcessingStateService,
    UserPaymentProcessingStateResolver,
  ],
  exports: [UserPaymentProcessingStateService],
})
export class UserPaymentProcessingStateModule {}
