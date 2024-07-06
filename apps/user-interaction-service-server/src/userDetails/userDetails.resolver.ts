import * as graphql from "@nestjs/graphql";
import { UserDetailsResolverBase } from "./base/userDetails.resolver.base";
import { UserDetails } from "./base/UserDetails";
import { UserDetailsService } from "./userDetails.service";

@graphql.Resolver(() => UserDetails)
export class UserDetailsResolver extends UserDetailsResolverBase {
  constructor(protected readonly service: UserDetailsService) {
    super(service);
  }
}
