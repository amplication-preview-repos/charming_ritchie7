import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrderProcessingStateWhereInput = {
  id?: StringFilter;
  state?: StringNullableFilter;
};
