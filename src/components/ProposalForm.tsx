
'use client';

import { useState } from 'react';
import { codigo } from '@/lib/codigo';
import { UploadDocs } from './UploadDocs';

export const ProposalForm = () => {
  const [victimName, setVictimName] = useState('');
  const [hospitalEmail, setHospitalEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [documents, setDocuments] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const wallet = await codigo.connectWallet();
    await codigo.submitProposal({
      victimName,
      hospitalEmail,
      hospitalWallet: '0x...', // This would be fetched from a trusted source
      amount: parseInt(amount),
      documents,
      sponsor: wallet.address,
    });
    setLoading(false);
    // Redirect to status page
    window.location.href = '/status';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-8 p-4 border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black">
      <input
        type="text"
        placeholder="Victim's Full Name"
        value={victimName}
        onChange={(e) => setVictimName(e.target.value)}
        required
        className="w-full p-3 border-2 border-nouns-black bg-nouns-white text-nouns-black placeholder-nouns-black font-mono"
      />
      <input
        type="email"
        placeholder="Hospital Email"
        value={hospitalEmail}
        onChange={(e) => setHospitalEmail(e.target.value)}
        required
        className="w-full p-3 border-2 border-nouns-black bg-nouns-white text-nouns-black placeholder-nouns-black font-mono"
      />
      <input
        type="number"
        placeholder="Amount (USD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        className="w-full p-3 border-2 border-nouns-black bg-nouns-white text-nouns-black placeholder-nouns-black font-mono"
      />
      <UploadDocs onUpload={setDocuments} />
      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-3 px-4 bg-nouns-blue text-nouns-white font-bold text-lg border-2 border-nouns-black shadow-nouns-sm hover:bg-nouns-red transition-colors duration-200"
      >
        {loading ? 'Submitting...' : 'Submit Proposal'}
      </button>
    </form>
  );
};
