import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserPaymentProcessingStateService } from "./userPaymentProcessingState.service";
import { UserPaymentProcessingStateControllerBase } from "./base/userPaymentProcessingState.controller.base";

@swagger.ApiTags("userPaymentProcessingStates")
@common.Controller("userPaymentProcessingStates")
export class UserPaymentProcessingStateController extends UserPaymentProcessingStateControllerBase {
  constructor(protected readonly service: UserPaymentProcessingStateService) {
    super(service);
  }
}
