import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentDetailsCreateInput = {
  bankAccountInformation?: string | null;
  creditCardDetails?: string | null;
  order?: OrderWhereUniqueInput | null;
};
