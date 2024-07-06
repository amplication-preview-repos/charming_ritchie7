import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderStatus";

export const OrderTitle = (record: TOrder): string => {
  return record.orderStatus?.toString() || String(record.id);
};
