
export interface RepScore {
  walletAgeDays: number;
  txCount: number;
  ens: string | null;
  poaps: number;
  daos: string[];
  total: number;
}

export const calculateRepScore = (walletData: any): RepScore => {
  const { walletAgeDays, txCount, ens, poaps, daos } = walletData;

  const ageScore = Math.min(walletAgeDays / 365 * 10, 30);
  const txScore = Math.min(txCount / 100, 20);
  const poapScore = Math.min(poaps * 2, 15);
  const daoScore = Math.min(daos.length * 3, 15);
  const ensScore = ens ? 10 : 0;
  const sbtScore = 0; // Placeholder for SBTs

  const total = ageScore + txScore + poapScore + daoScore + ensScore + sbtScore;

  return {
    walletAgeDays,
    txCount,
    ens,
    poaps,
    daos,
    total: Math.round(total),
  };
};
