
import Link from 'next/link';
import { Proposal } from '@/lib/codigo';

export const ProposalCard = ({ proposal }: { proposal: Proposal }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-nouns-blue';
      case 'Executed':
        return 'bg-nouns-yellow';
      case 'Rejected':
        return 'bg-nouns-red';
      default:
        return 'bg-nouns-black';
    }
  }

  return (
    <Link href={`/proposal/${proposal.id}`}>
      <div className="border-4 border-nouns-black shadow-nouns p-6 bg-nouns-white text-nouns-black hover:shadow-nouns-lg transition-shadow duration-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold uppercase">{proposal.victimName}</h3>
          <div className={`text-sm font-bold text-nouns-white px-3 py-1 border-2 border-nouns-black ${getStatusColor(proposal.status)}`}>
            {proposal.status}
          </div>
        </div>
        <p className="text-lg font-mono">Amount: ${proposal.amount}</p>
        <p className="text-sm font-mono break-all">Sponsor: {proposal.sponsor}</p>
      </div>
    </Link>
  );
};
