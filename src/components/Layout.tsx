import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Users, Shield } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <Link to="/" className="flex flex-col justify-center items-start px-2 text-xl font-bold text-gray-900">
                <img src='https://www.alhind.com/assets/img/logo-alhind.webp' className='w-28' alt='img'/>
                <p>
                Queue Management </p>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="/admin"
                className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              >
                <Shield className="mr-2 h-5 w-5" />
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}