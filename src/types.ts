export type ServiceType = 'visa' | 'passport' | 'attestation';

export interface Token {
  id: string;
  name: string;
  service: ServiceType;
  timestamp: Date;
  status: 'waiting' | 'serving' | 'completed';
}

export interface QueueStore {
  tokens: Token[];
  currentToken: Token | null;
  addToken: (name: string, service: ServiceType) => void;
  callNextToken: () => void;
  completeCurrentToken: () => void;
}