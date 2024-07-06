import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserPaymentProcessingStateServiceBase } from "./base/userPaymentProcessingState.service.base";

@Injectable()
export class UserPaymentProcessingStateService extends UserPaymentProcessingStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
