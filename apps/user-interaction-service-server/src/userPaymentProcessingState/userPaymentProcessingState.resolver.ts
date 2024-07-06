import * as graphql from "@nestjs/graphql";
import { UserPaymentProcessingStateResolverBase } from "./base/userPaymentProcessingState.resolver.base";
import { UserPaymentProcessingState } from "./base/UserPaymentProcessingState";
import { UserPaymentProcessingStateService } from "./userPaymentProcessingState.service";

@graphql.Resolver(() => UserPaymentProcessingState)
export class UserPaymentProcessingStateResolver extends UserPaymentProcessingStateResolverBase {
  constructor(protected readonly service: UserPaymentProcessingStateService) {
    super(service);
  }
}
