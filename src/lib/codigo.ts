
// Mock Codigo.ai SDK
// In a real application, this would be replaced by the actual SDK
// and would interact with a real blockchain.

export interface Wallet {
  address: string;
  ens?: string;
  reputation: number;
}

export interface Proposal {
  id: string;
  victimName: string;
  hospitalEmail: string;
  hospitalWallet: string;
  amount: number;
  documents: string[]; // IPFS CIDs
  sponsor: string;
  votesFor: number;
  votesAgainst: number;
  verifiedByDoctor: boolean;
  status: 'Pending' | 'Active' | 'Closed' | 'Approved' | 'Rejected';
}

const mockWallet: Wallet = {
  address: '0x1234567890123456789012345678901234567890',
  ens: 'sponsor.eth',
  reputation: 85,
};

import proposalsData from './proposals.json';

interface RawProposalData {
  id: number;
  name: string;
  status: string;
  amount: number;
  sponsor: string;
  testimonials: Array<{ author: string; comment: string }>;
}

let mockProposals: Proposal[] = (proposalsData as RawProposalData[]).map(p => ({
  id: p.id.toString(),
  victimName: p.name,
  hospitalEmail: 'N/A',
  hospitalWallet: 'N/A',
  amount: p.amount,
  documents: [],
  sponsor: p.sponsor,
  votesFor: 0,
  votesAgainst: 0,
  verifiedByDoctor: false,
  status: p.status as Proposal['status'],
}));

export const codigo = {
  connectWallet: async (): Promise<Wallet> => {
    console.log('Connecting wallet...');
    return new Promise((resolve) => setTimeout(() => resolve(mockWallet), 500));
  },

  signMetadata: async (metadata: any): Promise<string> => {
    console.log('Signing metadata:', metadata);
    return new Promise((resolve) =>
      setTimeout(() => resolve('signed_metadata_hash'), 500)
    );
  },

  submitProposal: async (proposal: Omit<Proposal, 'id' | 'status' | 'votesFor' | 'votesAgainst' | 'verifiedByDoctor'>): Promise<Proposal> => {
    console.log('Submitting proposal to smart contract:', proposal);
    const newProposal: Proposal = {
      ...proposal,
      id: (mockProposals.length + 1).toString(),
      status: 'Pending',
      votesFor: 0,
      votesAgainst: 0,
      verifiedByDoctor: false,
    };
    mockProposals.push(newProposal);
    return new Promise((resolve) => setTimeout(() => resolve(newProposal), 500));
  },

  getProposals: async (): Promise<Proposal[]> => {
    return new Promise((resolve) => setTimeout(() => resolve(mockProposals), 500));
  },

  getProposal: async (id: string): Promise<Proposal | undefined> => {
    return new Promise((resolve) =>
      setTimeout(() => resolve(mockProposals.find((p) => p.id === id)), 500)
    );
  },

  vote: async (
    proposalId: string,
    vote: 'For' | 'Against'
  ): Promise<Proposal> => {
    console.log(`Voting ${vote} for proposal ${proposalId}`);
    const proposal = mockProposals.find((p) => p.id === proposalId);
    if (proposal) {
      if (vote === 'For') {
        proposal.votesFor++;
      } else {
        proposal.votesAgainst++;
      }
      return new Promise((resolve) => setTimeout(() => resolve(proposal), 500));
    }
    throw new Error('Proposal not found');
  },

  executeProposal: async (proposalId: string): Promise<Proposal> => {
    console.log(`Executing proposal ${proposalId}`);
    const proposal = mockProposals.find((p) => p.id === proposalId);
    if (proposal) {
      proposal.status = 'Closed';
      return new Promise((resolve) => setTimeout(() => resolve(proposal), 500));
    }
    throw new Error('Proposal not found');
  },

  verifyDoctor: async (proposalId: string): Promise<Proposal> => {
    console.log(`Verifying doctor for proposal ${proposalId}`);
    const proposal = mockProposals.find((p) => p.id === proposalId);
    if (proposal) {
      proposal.verifiedByDoctor = true;
      return new Promise((resolve) => setTimeout(() => resolve(proposal), 500));
    }
    throw new Error('Proposal not found');
  }
};
