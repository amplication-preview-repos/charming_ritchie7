import { OrderProcessingState as TOrderProcessingState } from "../api/orderProcessingState/OrderProcessingState";

export const ORDERPROCESSINGSTATE_TITLE_FIELD = "state";

export const OrderProcessingStateTitle = (
  record: TOrderProcessingState
): string => {
  return record.state?.toString() || String(record.id);
};
