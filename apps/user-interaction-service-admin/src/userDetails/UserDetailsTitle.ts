import { UserDetails as TUserDetails } from "../api/userDetails/UserDetails";

export const USERDETAILS_TITLE_FIELD = "name";

export const UserDetailsTitle = (record: TUserDetails): string => {
  return record.name?.toString() || String(record.id);
};
