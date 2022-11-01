import React from 'react';

interface Scansites {
  [id: string]: string;
}

export const scansites: Scansites = {
  '1': 'https://etherscan.io/tx/',
  '2': 'https://bscscan.com/tx/',
  '3': 'https://arbiscan.io/tx/',
  '4': 'https://polygonscan.com/tx/',
  '5': 'https://optimistic.etherscan.io/tx/',
  '6': 'https://www.blockchain.com/btc/tx/',
  '7': 'https://tronscan.org/#/transaction/',
  '8': 'https://blockexplorer.one/litecoin/mainnet/blockHash/',
  '9': 'https://solscan.io/tx/',
  '10': 'https://tzkt.io/',
};

export const scansites_test: Scansites = {
  '1': 'https://goerli.etherscan.io/tx/',
  '2': 'https://testnet.bscscan.com/tx/',
  '3': 'https://testnet.arbiscan.io/tx/',
  '4': 'https://mumbai.polygonscan.com/tx/',
  '5': 'https://goerli-optimism.etherscan.io/tx/',
  '6': 'https://www.blockchain.com/btc/tx/',
  '7': 'https://shasta.tronscan.org/#/transaction/',
  '8': 'https://blockexplorer.one/litecoin/mainnet/blockHash/',
  '9': 'https://solscan.io/tx/', // ?cluster=devnet
  '10': 'https://ghostnet.tzkt.io/', // ?cluster=devnet
};

export const token_types = ['ERC20', 'BEP20', 'TRC20', 'Polygon'];
export const token_types_eth = ['Ethereum', 'Arbitrum'];

const ITEM_HEIGHT = 25;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      height: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP,
      width: 140,
    },
  },
};

export const MenuProps_page = {
  PaperProps: {
    style: {
      height: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP,
      width: 80,
    },
  },
};

export const page_limits = [2, 10, 20, 30, 40, 50];
