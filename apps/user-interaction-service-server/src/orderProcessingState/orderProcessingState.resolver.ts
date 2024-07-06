import * as graphql from "@nestjs/graphql";
import { OrderProcessingStateResolverBase } from "./base/orderProcessingState.resolver.base";
import { OrderProcessingState } from "./base/OrderProcessingState";
import { OrderProcessingStateService } from "./orderProcessingState.service";

@graphql.Resolver(() => OrderProcessingState)
export class OrderProcessingStateResolver extends OrderProcessingStateResolverBase {
  constructor(protected readonly service: OrderProcessingStateService) {
    super(service);
  }
}
