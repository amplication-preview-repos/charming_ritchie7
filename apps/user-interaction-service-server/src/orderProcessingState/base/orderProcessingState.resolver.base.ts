/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { OrderProcessingState } from "./OrderProcessingState";
import { OrderProcessingStateCountArgs } from "./OrderProcessingStateCountArgs";
import { OrderProcessingStateFindManyArgs } from "./OrderProcessingStateFindManyArgs";
import { OrderProcessingStateFindUniqueArgs } from "./OrderProcessingStateFindUniqueArgs";
import { CreateOrderProcessingStateArgs } from "./CreateOrderProcessingStateArgs";
import { UpdateOrderProcessingStateArgs } from "./UpdateOrderProcessingStateArgs";
import { DeleteOrderProcessingStateArgs } from "./DeleteOrderProcessingStateArgs";
import { OrderProcessingStateService } from "../orderProcessingState.service";
@graphql.Resolver(() => OrderProcessingState)
export class OrderProcessingStateResolverBase {
  constructor(protected readonly service: OrderProcessingStateService) {}

  async _orderProcessingStatesMeta(
    @graphql.Args() args: OrderProcessingStateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrderProcessingState])
  async orderProcessingStates(
    @graphql.Args() args: OrderProcessingStateFindManyArgs
  ): Promise<OrderProcessingState[]> {
    return this.service.orderProcessingStates(args);
  }

  @graphql.Query(() => OrderProcessingState, { nullable: true })
  async orderProcessingState(
    @graphql.Args() args: OrderProcessingStateFindUniqueArgs
  ): Promise<OrderProcessingState | null> {
    const result = await this.service.orderProcessingState(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrderProcessingState)
  async createOrderProcessingState(
    @graphql.Args() args: CreateOrderProcessingStateArgs
  ): Promise<OrderProcessingState> {
    return await this.service.createOrderProcessingState({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => OrderProcessingState)
  async updateOrderProcessingState(
    @graphql.Args() args: UpdateOrderProcessingStateArgs
  ): Promise<OrderProcessingState | null> {
    try {
      return await this.service.updateOrderProcessingState({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => OrderProcessingState)
  async deleteOrderProcessingState(
    @graphql.Args() args: DeleteOrderProcessingStateArgs
  ): Promise<OrderProcessingState | null> {
    try {
      return await this.service.deleteOrderProcessingState(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
