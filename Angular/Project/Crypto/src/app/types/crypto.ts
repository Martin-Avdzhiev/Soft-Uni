export interface CryptoData {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  timestamp: number;
}

export class PostCryptoData {
  id: string = '';
  rank: string = '';
  symbol: string = '';
  name: string = '';
  supply: string = '';
  maxSupply: string = '';
  explorer: string = '';
  descripton: string = '';
}
