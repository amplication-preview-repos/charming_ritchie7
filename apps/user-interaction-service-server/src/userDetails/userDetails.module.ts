import { Module } from "@nestjs/common";
import { UserDetailsModuleBase } from "./base/userDetails.module.base";
import { UserDetailsService } from "./userDetails.service";
import { UserDetailsController } from "./userDetails.controller";
import { UserDetailsResolver } from "./userDetails.resolver";

@Module({
  imports: [UserDetailsModuleBase],
  controllers: [UserDetailsController],
  providers: [UserDetailsService, UserDetailsResolver],
  exports: [UserDetailsService],
})
export class UserDetailsModule {}
