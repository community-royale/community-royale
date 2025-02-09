// components/top-navigation.tsx
"use client";

import { usePrivy } from '@privy-io/react-auth';

export default function TopNavigation() {
  const { login, ready, authenticated } = usePrivy();

  return (
    <div className="relative z-10 flex justify-between items-center p-4 bg-black/[0.8]">
      <h1 className="text-white text-xl">Community Royal</h1>
      {ready && (
        <button 
          onClick={login}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          {authenticated ? 'Connected' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
}