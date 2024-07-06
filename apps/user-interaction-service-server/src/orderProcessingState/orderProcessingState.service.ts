import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderProcessingStateServiceBase } from "./base/orderProcessingState.service.base";

@Injectable()
export class OrderProcessingStateService extends OrderProcessingStateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
