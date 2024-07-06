import { OrderProcessingStateWhereInput } from "./OrderProcessingStateWhereInput";
import { OrderProcessingStateOrderByInput } from "./OrderProcessingStateOrderByInput";

export type OrderProcessingStateFindManyArgs = {
  where?: OrderProcessingStateWhereInput;
  orderBy?: Array<OrderProcessingStateOrderByInput>;
  skip?: number;
  take?: number;
};
