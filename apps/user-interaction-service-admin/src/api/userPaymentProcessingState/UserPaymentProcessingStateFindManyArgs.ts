import { UserPaymentProcessingStateWhereInput } from "./UserPaymentProcessingStateWhereInput";
import { UserPaymentProcessingStateOrderByInput } from "./UserPaymentProcessingStateOrderByInput";

export type UserPaymentProcessingStateFindManyArgs = {
  where?: UserPaymentProcessingStateWhereInput;
  orderBy?: Array<UserPaymentProcessingStateOrderByInput>;
  skip?: number;
  take?: number;
};
