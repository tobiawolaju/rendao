import { ProposalCard } from '@/components/ProposalCard';
import { codigo, Proposal } from '@/lib/codigo';

async function getProposals() {
  const proposals = await codigo.getProposals();
  return proposals;
}

export default async function DashboardPage() {
  const proposals = await getProposals();

  // TODO: Add filtering and sorting controls

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center my-8 uppercase">DAO Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proposals.map((p) => (
          <ProposalCard key={p.id} proposal={p} />
        ))}
      </div>
    </div>
  );
}