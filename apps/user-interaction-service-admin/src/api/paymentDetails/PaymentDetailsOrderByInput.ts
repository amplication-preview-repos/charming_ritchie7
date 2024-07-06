import { SortOrder } from "../../util/SortOrder";

export type PaymentDetailsOrderByInput = {
  bankAccountInformation?: SortOrder;
  createdAt?: SortOrder;
  creditCardDetails?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  updatedAt?: SortOrder;
};
