import { UserDetailsWhereInput } from "./UserDetailsWhereInput";
import { UserDetailsOrderByInput } from "./UserDetailsOrderByInput";

export type UserDetailsFindManyArgs = {
  where?: UserDetailsWhereInput;
  orderBy?: Array<UserDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
