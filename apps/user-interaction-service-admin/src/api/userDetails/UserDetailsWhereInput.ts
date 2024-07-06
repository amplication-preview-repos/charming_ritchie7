import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserDetailsWhereInput = {
  address?: StringNullableFilter;
  contactInformation?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
