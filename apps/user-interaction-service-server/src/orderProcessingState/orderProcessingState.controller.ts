import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrderProcessingStateService } from "./orderProcessingState.service";
import { OrderProcessingStateControllerBase } from "./base/orderProcessingState.controller.base";

@swagger.ApiTags("orderProcessingStates")
@common.Controller("orderProcessingStates")
export class OrderProcessingStateController extends OrderProcessingStateControllerBase {
  constructor(protected readonly service: OrderProcessingStateService) {
    super(service);
  }
}
