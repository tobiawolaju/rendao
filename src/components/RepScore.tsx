'use client';

import { useEffect, useState } from 'react';
import { RepScore, calculateRepScore } from '@/lib/repScore';

export const RepScoreDisplay = ({ walletAddress }: { walletAddress: string }) => {
  const [repScore, setRepScore] = useState<RepScore | null>(null);

  useEffect(() => {
    const fetchRepScore = async () => {
      const res = await fetch('/api/repScore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress }),
      });
      const data = await res.json();
      setRepScore(data);
    };
    fetchRepScore();
  }, [walletAddress]);

  if (!repScore) return <div className="p-4 text-center border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black">Loading Reputation...</div>;

  const getReputationColor = (score: number) => {
    if (score > 75) return 'bg-nouns-blue';
    if (score > 50) return 'bg-nouns-yellow';
    return 'bg-nouns-red';
  }

  return (
    <div className="p-4 border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black">
      <h3 className="font-bold text-lg">Sponsor Reputation</h3>
      <div className={`mt-2 text-nouns-white text-center font-bold py-2 px-4 border-2 border-nouns-black shadow-nouns-sm ${getReputationColor(repScore.total)}`}>
        {repScore.total} / 100
      </div>
      <ul className="mt-4 space-y-2 text-sm font-mono">
        <li>Wallet Age: {repScore.walletAgeDays} days</li>
        <li>Transaction Count: {repScore.txCount}</li>
        <li>ENS: {repScore.ens || 'None'}</li>
        <li>POAPs: {repScore.poaps}</li>
        <li>DAOs: {repScore.daos.join(', ')}</li>
      </ul>
    </div>
  );
};