import { UserPaymentProcessingState as TUserPaymentProcessingState } from "../api/userPaymentProcessingState/UserPaymentProcessingState";

export const USERPAYMENTPROCESSINGSTATE_TITLE_FIELD = "state";

export const UserPaymentProcessingStateTitle = (
  record: TUserPaymentProcessingState
): string => {
  return record.state?.toString() || String(record.id);
};
