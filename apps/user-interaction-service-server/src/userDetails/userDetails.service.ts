import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDetailsServiceBase } from "./base/userDetails.service.base";

@Injectable()
export class UserDetailsService extends UserDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
