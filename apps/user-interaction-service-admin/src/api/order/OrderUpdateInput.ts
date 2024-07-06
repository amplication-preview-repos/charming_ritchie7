import { PaymentDetailsUpdateManyWithoutOrdersInput } from "./PaymentDetailsUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderStatus?: string | null;
  paymentDetailsItems?: PaymentDetailsUpdateManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
