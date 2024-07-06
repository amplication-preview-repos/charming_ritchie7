import { Order } from "../order/Order";

export type PaymentDetails = {
  bankAccountInformation: string | null;
  createdAt: Date;
  creditCardDetails: string | null;
  id: string;
  order?: Order | null;
  updatedAt: Date;
};
