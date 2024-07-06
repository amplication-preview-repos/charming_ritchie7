import * as graphql from "@nestjs/graphql";
import { PaymentDetailsResolverBase } from "./base/paymentDetails.resolver.base";
import { PaymentDetails } from "./base/PaymentDetails";
import { PaymentDetailsService } from "./paymentDetails.service";

@graphql.Resolver(() => PaymentDetails)
export class PaymentDetailsResolver extends PaymentDetailsResolverBase {
  constructor(protected readonly service: PaymentDetailsService) {
    super(service);
  }
}
