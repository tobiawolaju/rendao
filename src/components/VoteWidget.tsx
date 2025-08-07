'use client';

import { useState } from 'react';
import { codigo } from '@/lib/codigo';

export const VoteWidget = ({ proposalId }: { proposalId: string }) => {
  const [loading, setLoading] = useState(false);

  const handleVote = async (vote: 'For' | 'Against') => {
    setLoading(true);
    await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ proposalId, vote }),
    });
    setLoading(false);
    // Refresh the page to show the new vote count
    window.location.reload();
  };

  return (
    <div className="p-4 border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black mt-8">
      <h3 className="font-bold text-xl text-center mb-4">Cast Your Vote</h3>
      <div className="flex justify-around space-x-4">
        <button 
          onClick={() => handleVote('For')} 
          disabled={loading}
          className="flex-1 py-3 px-4 bg-nouns-blue text-nouns-white font-bold text-lg border-2 border-nouns-black shadow-nouns-sm hover:bg-nouns-red transition-colors duration-200"
        >
          For
        </button>
        <button 
          onClick={() => handleVote('Against')} 
          disabled={loading}
          className="flex-1 py-3 px-4 bg-nouns-red text-nouns-white font-bold text-lg border-2 border-nouns-black shadow-nouns-sm hover:bg-nouns-blue transition-colors duration-200"
        >
          Against
        </button>
      </div>
    </div>
  );
};