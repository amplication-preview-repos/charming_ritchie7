import { PaymentDetails as TPaymentDetails } from "../api/paymentDetails/PaymentDetails";

export const PAYMENTDETAILS_TITLE_FIELD = "bankAccountInformation";

export const PaymentDetailsTitle = (record: TPaymentDetails): string => {
  return record.bankAccountInformation?.toString() || String(record.id);
};
