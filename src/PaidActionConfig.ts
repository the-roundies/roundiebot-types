import { EventType } from './EventType';
import { ProjectToken } from './ProjectToken';

/**
 * Configuration for what users must pay to complete an action.
 */
export type TokenPaymentRequirements = {
  token: ProjectToken;
  amount: number;
};

/**
 * Configuration set for actions. Roundie holders can participate
 * in activities for which they must pay a certain amount of a
 * given token.
 */
export type PaidActionConfig = {
  eventType: EventType;
  tokenPaymentRequirements: TokenPaymentRequirements[];
};
