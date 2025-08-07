import { ProposalForm } from '@/components/ProposalForm';
import { WalletConnect } from '@/components/WalletConnect';

export default function NewSponsorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center my-8 uppercase">Sponsor a New Proposal</h1>
      <div className="max-w-2xl mx-auto border-4 border-nouns-black shadow-nouns bg-nouns-white text-nouns-black p-8">
        <WalletConnect />
        <ProposalForm />
      </div>
    </div>
  );
}