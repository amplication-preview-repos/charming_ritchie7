import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserPaymentProcessingStateWhereInput = {
  id?: StringFilter;
  state?: StringNullableFilter;
};
