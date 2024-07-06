/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { PaymentDetailsUpdateManyWithoutOrdersInput } from "./PaymentDetailsUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class OrderUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  orderStatus?: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentDetailsUpdateManyWithoutOrdersInput,
  })
  @ValidateNested()
  @Type(() => PaymentDetailsUpdateManyWithoutOrdersInput)
  @IsOptional()
  @Field(() => PaymentDetailsUpdateManyWithoutOrdersInput, {
    nullable: true,
  })
  paymentDetailsItems?: PaymentDetailsUpdateManyWithoutOrdersInput;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { OrderUpdateInput as OrderUpdateInput };
