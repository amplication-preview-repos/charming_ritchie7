import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentDetailsUpdateInput = {
  bankAccountInformation?: string | null;
  creditCardDetails?: string | null;
  order?: OrderWhereUniqueInput | null;
};
