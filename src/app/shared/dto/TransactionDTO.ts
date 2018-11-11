export class TranscationDTO {
  id: number;
  entityTransactionType: string;
  amountBefore: number;
  amountAfter: number;
  processingDate: Date;
  canceled: boolean;
  refEntityId: number;
  accountId: number;
  name: string;
  userId: string;
  cancellingDate: Date;
}
