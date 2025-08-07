
import { NextRequest, NextResponse } from 'next/server';
import { codigo } from '@/lib/codigo';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { proposalId } = body;
    const updatedProposal = await codigo.verifyDoctor(proposalId);
    return NextResponse.json(updatedProposal, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 404 });
  }
}
