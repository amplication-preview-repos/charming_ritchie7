/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderProcessingStateWhereUniqueInput } from "./OrderProcessingStateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderProcessingStateUpdateInput } from "./OrderProcessingStateUpdateInput";

@ArgsType()
class UpdateOrderProcessingStateArgs {
  @ApiProperty({
    required: true,
    type: () => OrderProcessingStateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderProcessingStateWhereUniqueInput)
  @Field(() => OrderProcessingStateWhereUniqueInput, { nullable: false })
  where!: OrderProcessingStateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => OrderProcessingStateUpdateInput,
  })
  @ValidateNested()
  @Type(() => OrderProcessingStateUpdateInput)
  @Field(() => OrderProcessingStateUpdateInput, { nullable: false })
  data!: OrderProcessingStateUpdateInput;
}

export { UpdateOrderProcessingStateArgs as UpdateOrderProcessingStateArgs };
