/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UserDetails as PrismaUserDetails } from "@prisma/client";

export class UserDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserDetailsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.userDetails.count(args);
  }

  async userDetailsItems(
    args: Prisma.UserDetailsFindManyArgs
  ): Promise<PrismaUserDetails[]> {
    return this.prisma.userDetails.findMany(args);
  }
  async userDetails(
    args: Prisma.UserDetailsFindUniqueArgs
  ): Promise<PrismaUserDetails | null> {
    return this.prisma.userDetails.findUnique(args);
  }
  async createUserDetails(
    args: Prisma.UserDetailsCreateArgs
  ): Promise<PrismaUserDetails> {
    return this.prisma.userDetails.create(args);
  }
  async updateUserDetails(
    args: Prisma.UserDetailsUpdateArgs
  ): Promise<PrismaUserDetails> {
    return this.prisma.userDetails.update(args);
  }
  async deleteUserDetails(
    args: Prisma.UserDetailsDeleteArgs
  ): Promise<PrismaUserDetails> {
    return this.prisma.userDetails.delete(args);
  }
}
