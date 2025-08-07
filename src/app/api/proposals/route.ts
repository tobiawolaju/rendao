
import { NextRequest, NextResponse } from 'next/server';
import { codigo } from '@/lib/codigo';

export async function GET(req: NextRequest) {
  try {
    const proposals = await codigo.getProposals();
    return NextResponse.json(proposals, { status: 200 });
  } catch (error) {
    console.error('Error in GET /api/proposals:', error);
    return NextResponse.json({ error: 'Failed to fetch proposals' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { victimName, hospitalEmail, hospitalWallet, amount, documents, sponsor } = body;
    const newProposal = await codigo.submitProposal({
      victimName,
      hospitalEmail,
      hospitalWallet,
      amount,
      documents,
      sponsor,
    });
    return NextResponse.json(newProposal, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/proposals:', error);
    return NextResponse.json({ error: 'Failed to submit proposal' }, { status: 500 });
  }
}
