// Shyft.to object types
// TODO: Once their JS SDK contains these types these can be removed

export type ShyftCallbackEventType =
  | 'NFT_MINT'
  | 'TOKEN_TRANSFER'
  | 'SOL_TRANSFER'
  | 'NFT_TRANSFER';

export interface ShyftApiActionInfo {
  nft_address: string;
  amount: number;
  owner: string;
  owner_associated_account: string;
}

export interface ShyftAction {
  info: ShyftApiActionInfo[];
  source_protocol: string;
  type: ShyftCallbackEventType;
}

export interface ShyftCallbackEvent {
  timestamp: string;
  fee: string;
  fee_payer: string;
  signers: string[];
  signatures: string[];
  protocol: {
    address: string;
    name: 'CANDY_GUARD';
  };
  type: ShyftCallbackEventType;
  actions: ShyftAction[];
}
