
import { NextRequest, NextResponse } from 'next/server';
import { calculateRepScore } from '@/lib/repScore';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { walletAddress } = body;
    // In a real application, you would fetch this data from the blockchain
    const mockWalletData = {
      walletAgeDays: 365,
      txCount: 100,
      ens: 'sponsor.eth',
      poaps: 5,
      daos: ['Gitcoin', 'ENS'],
    };
    const repScore = calculateRepScore(mockWalletData);
    return NextResponse.json(repScore, { status: 200 });
  } catch (error) {
    console.error('Error in POST /api/repScore:', error);
    return NextResponse.json({ error: 'Failed to calculate rep score' }, { status: 500 });
  }
}
