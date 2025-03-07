import { create } from 'zustand';
import { Token, QueueStore, ServiceType } from './types';

export const useQueueStore = create<QueueStore>((set) => ({
  tokens: [],
  currentToken: null,

  addToken: (name: string, service: ServiceType) => {
    const newToken: Token = {
      id: Math.random().toString(36).substring(7),
      name,
      service,
      timestamp: new Date(),
      status: 'waiting',
    };

    set((state) => ({
      tokens: [...state.tokens, newToken],
    }));
  },

  callNextToken: () => {
    set((state) => {
      const waitingTokens = state.tokens.filter((t) => t.status === 'waiting');
      if (waitingTokens.length === 0) return state;

      const nextToken = waitingTokens[0];
      const updatedTokens = state.tokens.map((t) =>
        t.id === nextToken.id ? { ...t, status: 'serving' } : t
      );

      return {
        tokens: updatedTokens,
        currentToken: { ...nextToken, status: 'serving' },
      };
    });
  },

  completeCurrentToken: () => {
    set((state) => {
      if (!state.currentToken) return state;

      const updatedTokens = state.tokens.map((t) =>
        t.id === state.currentToken?.id ? { ...t, status: 'completed' } : t
      );

      return {
        tokens: updatedTokens,
        currentToken: null,
      };
    });
  },
}));