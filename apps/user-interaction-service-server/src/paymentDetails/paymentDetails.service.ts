import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentDetailsServiceBase } from "./base/paymentDetails.service.base";

@Injectable()
export class PaymentDetailsService extends PaymentDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
