import { SortOrder } from "../../util/SortOrder";

export type UserDetailsOrderByInput = {
  address?: SortOrder;
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
