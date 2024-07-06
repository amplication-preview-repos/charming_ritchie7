import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentDetailsWhereInput = {
  bankAccountInformation?: StringNullableFilter;
  creditCardDetails?: StringNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
};
