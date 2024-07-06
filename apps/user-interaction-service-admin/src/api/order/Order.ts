import { PaymentDetails } from "../paymentDetails/PaymentDetails";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderStatus: string | null;
  paymentDetailsItems?: Array<PaymentDetails>;
  updatedAt: Date;
  user?: User | null;
};
