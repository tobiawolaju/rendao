
'use client';

import { useEffect, useState } from 'react';
import { codigo, Wallet } from '@/lib/codigo';

export const WalletConnect = () => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConnect = async () => {
    setLoading(true);
    const connectedWallet = await codigo.connectWallet();
    setWallet(connectedWallet);
    setLoading(false);
  };

  return (
    <div className="relative inline-block">
      {wallet ? (
        <div className="flex items-center space-x-2 border-2 border-nouns-black bg-nouns-white text-nouns-black px-2 py-1 shadow-nouns-sm">
          <p className="font-bold text-xs">{wallet.ens || wallet.address.slice(0, 6) + '...' + wallet.address.slice(-4)}</p>
          <span className="text-xs font-bold text-nouns-red">Rep: {wallet.reputation}</span>
        </div>
      ) : (
        <button 
          onClick={handleConnect} 
          disabled={loading}
          className="py-2 px-4 bg-nouns-blue text-nouns-white font-bold text-sm border-2 border-nouns-black shadow-nouns-sm hover:bg-nouns-white hover:text-nouns-black dark:hover:bg-nouns-black dark:hover:text-nouns-white transition-colors duration-200"
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};
