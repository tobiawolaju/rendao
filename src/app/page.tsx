import Link from 'next/link';
import { ProposalCard } from '@/components/ProposalCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { codigo, Proposal } from '@/lib/codigo';

async function getProposals() {
  const proposals = await codigo.getProposals();
  return proposals;
}

export default async function LandingPage() {
  const proposals = await getProposals();

  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase">Web3-Native RenDAO</h1>
        <p className="text-lg md:text-xl font-bold mt-4">Mutual Aid on Chain. Governed by You.</p>
      </header>

      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 my-12">
        <Link href="/sponsor/new" className="py-3 px-6 bg-nouns-blue text-nouns-white font-bold text-lg md:text-xl border-4 border-nouns-black shadow-nouns hover:bg-nouns-white hover:text-nouns-black dark:hover:bg-nouns-black dark:hover:text-nouns-white transition-colors duration-200 text-center">
          Sponsor a Surgery
        </Link>
        <Link href="/dashboard" className="py-3 px-6 bg-nouns-purple text-nouns-white font-bold text-lg md:text-xl border-4 border-nouns-black shadow-nouns hover:bg-nouns-white hover:text-nouns-black dark:hover:bg-nouns-black dark:hover:text-nouns-white transition-colors duration-200 text-center">
          Browse Approved Cases
        </Link>
      </div>

      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Approved Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((p) => (
            <ProposalCard key={p.id} proposal={p} />
          ))}
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <TestimonialCard
  quote="This platform saved my life."
  author="A. Victim"
  imageUrl="/pfp/victim.png"
/>
<TestimonialCard
  quote="I'm proud to be a sponsor."
  author="B. Sponsor"
  imageUrl="/pfp/sponsor.png"
/>
<TestimonialCard
  quote="Direct impact, no middlemen. This is the future."
  author="C. Donor"
  imageUrl="/pfp/donor.png"
/>
  </div>
      </section>
    </div>
  );
}
