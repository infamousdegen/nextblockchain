'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {goerli,mainnet,} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [
    mainnet,
    goerli
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'NextJsBlockChain',
  projectId: 'cbc2313443443338b20debe33da28adf',
  chains,
});  

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>

      
        {children}

      </RainbowKitProvider>
      </WagmiConfig>
      </body>
    </html>
  )
}
