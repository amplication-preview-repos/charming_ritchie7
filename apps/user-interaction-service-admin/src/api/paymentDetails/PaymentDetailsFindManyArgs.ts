import { PaymentDetailsWhereInput } from "./PaymentDetailsWhereInput";
import { PaymentDetailsOrderByInput } from "./PaymentDetailsOrderByInput";

export type PaymentDetailsFindManyArgs = {
  where?: PaymentDetailsWhereInput;
  orderBy?: Array<PaymentDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
