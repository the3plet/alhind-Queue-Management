import React, { useState } from 'react';
import { ServiceType } from '../types';
import { useQueueStore } from '../store';

export function TokenForm() {
  const [name, setName] = useState('');
  const [service, setService] = useState<ServiceType>('visa');
  const addToken = useQueueStore((state) => state.addToken);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addToken(name, service);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service Required
        </label>
        <select
          id="service"
          value={service}
          onChange={(e) => setService(e.target.value as ServiceType)}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="visa">Visa Services</option>
          <option value="passport">Passport Services</option>
          <option value="attestation">Attestation Services</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Generate Token
      </button>
    </form>
  );
}