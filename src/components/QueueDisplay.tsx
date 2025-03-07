import React from 'react';
import { useQueueStore } from '../store';

export function QueueDisplay() {
  const { tokens, currentToken } = useQueueStore();
  const waitingTokens = tokens.filter((t) => t.status === 'waiting');

  return (
    <div className="space-y-6">
      {currentToken && (
        <div className="rounded-lg bg-green-100 p-6">
          <h2 className="text-xl font-bold text-green-800">Now Serving</h2>
          <div className="mt-2">
            <p className="text-green-700">Token: {currentToken.id}</p>
            <p className="text-green-700">Name: {currentToken.name}</p>
            <p className="text-green-700">Service: {currentToken.service}</p>
          </div>
        </div>
      )}

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="text-xl font-bold text-gray-900">Waiting Queue</h2>
        {waitingTokens.length === 0 ? (
          <p className="mt-2 text-gray-600">No tokens in queue</p>
        ) : (
          <div className="mt-4 space-y-2">
            {waitingTokens.map((token) => (
              <div
                key={token.id}
                className="flex items-center justify-between rounded-md border border-gray-200 p-3"
              >
                <div>
                  <p className="font-medium text-gray-900">Token: {token.id}</p>
                  <p className="text-sm text-gray-600">{token.name}</p>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  {token.service}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}