import { Module } from "@nestjs/common";
import { PaymentDetailsModuleBase } from "./base/paymentDetails.module.base";
import { PaymentDetailsService } from "./paymentDetails.service";
import { PaymentDetailsController } from "./paymentDetails.controller";
import { PaymentDetailsResolver } from "./paymentDetails.resolver";

@Module({
  imports: [PaymentDetailsModuleBase],
  controllers: [PaymentDetailsController],
  providers: [PaymentDetailsService, PaymentDetailsResolver],
  exports: [PaymentDetailsService],
})
export class PaymentDetailsModule {}
