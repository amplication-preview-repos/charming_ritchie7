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
import { UserDetailsWhereUniqueInput } from "./UserDetailsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserDetailsUpdateInput } from "./UserDetailsUpdateInput";

@ArgsType()
class UpdateUserDetailsArgs {
  @ApiProperty({
    required: true,
    type: () => UserDetailsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserDetailsWhereUniqueInput)
  @Field(() => UserDetailsWhereUniqueInput, { nullable: false })
  where!: UserDetailsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserDetailsUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserDetailsUpdateInput)
  @Field(() => UserDetailsUpdateInput, { nullable: false })
  data!: UserDetailsUpdateInput;
}

export { UpdateUserDetailsArgs as UpdateUserDetailsArgs };
