import { EventType } from './enums';

export type TransactionMemo = {
  eventType?: EventType;
  discordId?: string;
  secret?: string;
};
