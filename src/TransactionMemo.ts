import { EventType } from './EventType';

export type TransactionMemo = {
  eventType?: EventType;
  discordId?: string;
  secret?: string;
};
