"use client";

import { useState, useEffect } from 'react';
import { ProposalCard } from '@/components/ProposalCard';
import { codigo, Proposal } from '@/lib/codigo';
import { WalletConnect } from '@/components/WalletConnect';

type ProposalStatus = 'All' | 'Pending' | 'Approved' | 'Closed';

export default function DashboardPage() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [filter, setFilter] = useState<ProposalStatus>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProposals() {
      setLoading(true);
      const allProposals = await codigo.getProposals();
      let filteredProposals = allProposals;

      if (filter !== 'All') {
        filteredProposals = allProposals.filter(p => p.status === filter);
      }
      setProposals(filteredProposals);
      setLoading(false);
    }
    fetchProposals();
  }, [filter]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center my-8 uppercase">DAO Dashboard</h1>
      <div className="flex justify-center mb-8">
        <WalletConnect />
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setFilter('All')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border-2 border-nouns-black ${
            filter === 'All' ? 'bg-nouns-black text-nouns-white shadow-nouns-sm' : 'bg-nouns-white text-nouns-black hover:bg-nouns-black hover:text-nouns-white'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('Pending')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border-2 border-nouns-black ${
            filter === 'Pending' ? 'bg-nouns-black text-nouns-white shadow-nouns-sm' : 'bg-nouns-white text-nouns-black hover:bg-nouns-black hover:text-nouns-white'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('Approved')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border-2 border-nouns-black ${
            filter === 'Approved' ? 'bg-nouns-black text-nouns-white shadow-nouns-sm' : 'bg-nouns-white text-nouns-black hover:bg-nouns-black hover:text-nouns-white'
          }`}
        >
          Approved
        </button>
        <button
          onClick={() => setFilter('Closed')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border-2 border-nouns-black ${
            filter === 'Closed' ? 'bg-nouns-black text-nouns-white shadow-nouns-sm' : 'bg-nouns-white text-nouns-black hover:bg-nouns-black hover:text-nouns-white'
          }`}
        >
          Closed
        </button>
      </div>
      {loading ? (
        <p className="text-center text-xl">Loading proposals...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.length > 0 ? (
            proposals.map((p) => <ProposalCard key={p.id} proposal={p} />)
          ) : (
            <p className="text-center text-xl col-span-full">No proposals found for this filter.</p>
          )}
        </div>
      )}
    </div>
  );
}