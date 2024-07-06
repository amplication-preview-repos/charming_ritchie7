import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentDetailsListRelationFilter } from "../paymentDetails/PaymentDetailsListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderStatus?: StringNullableFilter;
  paymentDetailsItems?: PaymentDetailsListRelationFilter;
  user?: UserWhereUniqueInput;
};
