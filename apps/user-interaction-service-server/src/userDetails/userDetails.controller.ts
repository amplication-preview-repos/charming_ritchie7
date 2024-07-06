import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserDetailsService } from "./userDetails.service";
import { UserDetailsControllerBase } from "./base/userDetails.controller.base";

@swagger.ApiTags("userDetails")
@common.Controller("userDetails")
export class UserDetailsController extends UserDetailsControllerBase {
  constructor(protected readonly service: UserDetailsService) {
    super(service);
  }
}
