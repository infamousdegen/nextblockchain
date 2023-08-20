"use client"
import styles from './page.module.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { useAccount, useSignMessage, useNetwork } from "wagmi";
import { useSwitchNetwork } from 'wagmi'
import { useEffect, useState } from 'react';


import {
  goerli,
  mainnet,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';








// const AccountInfo = () => {

//   const [isClient , setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   },[])

//   const account = useAccount({
//     onConnect({ address, connector, isReconnected }) {
//       console.log('Connected', { address, connector, isReconnected })
//     },
//   })

//   return (
//     <div>

//       {isClient && account.isConnected ? (
//       <p>{account.address}</p>
//       ):
//       (<p>Not Connecteds</p>)
//       }
//     </div>
//   );
// };



// const SwithNetwork = () =>{
//   const { chain } = useNetwork()
//   const { chains, error, isLoading, pendingChainId, switchNetwork } =
//     useSwitchNetwork({
//     })

    

//   const [isClient , setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   },[])
//   console.log(chains)
//   return (
//     <>
    
//       {isClient && chain && <div>Connected to {chain.name}</div>}
      
//       {isClient && chains.map((x) => (
//         <button
//           disabled={!switchNetwork || x.id === chain?.id}
//           key={x.id}
//           onClick={() => switchNetwork?.(x.id)}
//         >
//           {x.name}
//           {isLoading && pendingChainId === x.id && ' (switching)'}
//         </button>
//       ))}
 
//       <div>{error && error.message}</div>
//     </>
//   )
// }

export default function Home() {

  
  return (
    
    <main className={styles.main}>
      <ConnectButton />
    </main>
  )
}
