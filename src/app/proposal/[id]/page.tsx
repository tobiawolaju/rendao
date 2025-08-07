import { codigo, Proposal } from '@/lib/codigo';
import { RepScoreDisplay } from '@/components/RepScore';
import { VoteWidget } from '@/components/VoteWidget';
import { Paperclip } from 'lucide-react';

async function getProposal(id: string) {
  const proposal = await codigo.getProposal(id);
  return proposal;
}

export default async function ProposalPage({ params }: { params: { id: string } }) {
  const proposal = await getProposal(params.id);

  if (!proposal) {
    return <div className="text-center p-8 text-nouns-black font-bold text-xl">Proposal not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold my-8 uppercase">{proposal.victimName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black p-8">
          <p className="text-lg font-bold">Amount Requested: <span className="font-mono">${proposal.amount}</span></p>
          <p className="text-lg font-bold">Hospital Contact: <span className="font-mono">{proposal.hospitalEmail}</span></p>
          <p className="text-lg font-bold">Sponsor Address: <span className="font-mono">{proposal.sponsor}</span></p>
          <p className="text-lg font-bold">Status: <span className="font-mono">{proposal.status}</span></p>
          <p className="text-lg font-bold">Doctor Verified: <span className="font-mono">{proposal.verifiedByDoctor ? 'Yes' : 'No'}</span></p>
          <h3 className="text-2xl font-extrabold mt-8 uppercase">Medical Documents</h3>
          <ul className="space-y-2 mt-4">
            {proposal.documents.map((doc) => (
              <li key={doc}>
                <a href={`https://ipfs.io/ipfs/${doc}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-nouns-blue hover:text-nouns-red font-mono">
                  <Paperclip className="h-5 w-5 mr-2" />
                  {doc}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <RepScoreDisplay walletAddress={proposal.sponsor} />
          <VoteWidget proposalId={proposal.id} />
        </div>
      </div>
    </div>
  );
}