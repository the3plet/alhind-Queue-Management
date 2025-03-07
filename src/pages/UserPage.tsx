import React from 'react';
import { TokenForm } from '../components/TokenForm';
import { QueueDisplay } from '../components/QueueDisplay';

export function UserPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Queue Management System</h1>
        <p className="mt-2 text-gray-600">Generate your token and track the queue status</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Get Your Token</h2>
          <TokenForm />
        </div>
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Queue Status</h2>
          <QueueDisplay />
        </div>
      </div>
    </div>
  );
}