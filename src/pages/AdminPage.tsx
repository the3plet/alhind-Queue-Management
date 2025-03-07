import React from 'react';
import { Link } from 'react-router-dom';
import { useQueueStore } from '../store';
import { Monitor } from 'lucide-react';

export function AdminPage() {
  const { tokens, currentToken, callNextToken, completeCurrentToken } = useQueueStore();
  const completedTokens = tokens.filter((t) => t.status === 'completed');

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="mt-2 text-gray-600">Manage queue and process tokens</p>
      </div>

      <div className="flex justify-center">
        <Link
          to="/display"
          className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          <Monitor className="h-5 w-5" />
          Open Queue Display
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-900">Current Token</h2>
            {currentToken ? (
              <div className="mt-4">
                <div className="rounded-md bg-blue-50 p-4">
                  <p className="font-medium text-blue-900">Token: {currentToken.id}</p>
                  <p className="text-blue-800">Name: {currentToken.name}</p>
                  <p className="text-blue-800">Service: {currentToken.service}</p>
                  <button
                    onClick={completeCurrentToken}
                    className="mt-4 w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                  >
                    Mark as Completed
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-4">
                <p className="text-gray-600">No active token</p>
                <button
                  onClick={callNextToken}
                  className="mt-4 w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                >
                  Call Next Token
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-900">Completed Tokens</h2>
          <div className="mt-4 space-y-2">
            {completedTokens.length === 0 ? (
              <p className="text-gray-600">No completed tokens</p>
            ) : (
              completedTokens.map((token) => (
                <div
                  key={token.id}
                  className="rounded-md border border-gray-200 p-3"
                >
                  <p className="font-medium text-gray-900">Token: {token.id}</p>
                  <p className="text-sm text-gray-600">{token.name}</p>
                  <p className="text-sm text-gray-600">{token.service}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(token.timestamp).toLocaleString()}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}