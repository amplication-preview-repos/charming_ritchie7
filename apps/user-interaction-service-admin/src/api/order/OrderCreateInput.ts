import { PaymentDetailsCreateNestedManyWithoutOrdersInput } from "./PaymentDetailsCreateNestedManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderStatus?: string | null;
  paymentDetailsItems?: PaymentDetailsCreateNestedManyWithoutOrdersInput;
  user?: UserWhereUniqueInput | null;
};
