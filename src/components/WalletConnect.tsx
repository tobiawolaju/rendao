
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
    <div className="p-4 border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black">
      {wallet ? (
        <div>
          <p className="font-bold text-lg">Connected Wallet:</p>
          <p className="text-sm font-mono">{wallet.ens || wallet.address}</p>
          <p className="text-sm font-bold text-nouns-red">Reputation: {wallet.reputation}</p>
        </div>
      ) : (
        <button 
          onClick={handleConnect} 
          disabled={loading}
          className="w-full py-3 px-4 bg-nouns-blue text-nouns-white font-bold text-lg border-2 border-nouns-black shadow-nouns-sm hover:bg-nouns-white hover:text-nouns-black dark:hover:bg-nouns-black dark:hover:text-nouns-white transition-colors duration-200"
        >
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </div>
  );
};
