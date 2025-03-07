import React from 'react';
import { useQueueStore } from '../store';

export function DisplayPage() {
  const { tokens, currentToken } = useQueueStore();
  const waitingTokens = tokens.filter((t) => t.status === 'waiting').slice(0, 8);
  
  const counterMap: Record<string, string> = {
    visa: 'A',
    passport: 'B',
    attestation: 'C',
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="grid grid-cols-2 gap-8">
        {/* Now Serving Section */}
        <div className="col-span-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 p-8">
          <h1 className="mb-6 text-center text-4xl font-bold">NOW SERVING</h1>
          {currentToken ? (
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-white/10 p-6">
                <h2 className="text-2xl font-semibold">Token</h2>
                <p className="mt-2 text-5xl font-bold">{currentToken.id}</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6">
                <h2 className="text-2xl font-semibold">Counter</h2>
                <p className="mt-2 text-5xl font-bold">{counterMap[currentToken.service]}</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6">
                <h2 className="text-2xl font-semibold">Service</h2>
                <p className="mt-2 text-3xl font-bold capitalize">{currentToken.service}</p>
              </div>
            </div>
          ) : (
            <p className="text-center text-3xl">No Active Token</p>
          )}
        </div>

        {/* Waiting Queue Section */}
        <div className="col-span-2 rounded-lg bg-gray-800 p-8">
          <h2 className="mb-6 text-center text-3xl font-bold">Waiting Queue</h2>
          <div className="grid grid-cols-4 gap-4">
            {waitingTokens.map((token) => (
              <div
                key={token.id}
                className="rounded-lg bg-gray-700 p-6 text-center"
              >
                <div className="mb-2 text-lg font-semibold text-gray-300">Token</div>
                <div className="text-3xl font-bold">{token.id}</div>
                <div className="mt-2 rounded-full bg-blue-500 px-3 py-1 text-sm">
                  Counter {counterMap[token.service]}
                </div>
              </div>
            ))}
            {waitingTokens.length === 0 && (
              <div className="col-span-4 text-center text-2xl text-gray-400">
                No tokens in waiting queue
              </div>
            )}
          </div>
        </div>

        {/* Counter Information */}
        <div className="col-span-2 grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-blue-600 p-6 text-center">
            <h3 className="text-xl font-semibold">Counter A</h3>
            <p className="mt-2">Visa Services</p>
          </div>
          <div className="rounded-lg bg-purple-600 p-6 text-center">
            <h3 className="text-xl font-semibold">Counter B</h3>
            <p className="mt-2">Passport Services</p>
          </div>
          <div className="rounded-lg bg-indigo-600 p-6 text-center">
            <h3 className="text-xl font-semibold">Counter C</h3>
            <p className="mt-2">Attestation Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}