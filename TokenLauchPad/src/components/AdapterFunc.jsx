import React, { useMemo } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    ConnectionProvider,
    WalletProvider
} from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletMultiButton,
    WalletDisconnectButton
} from '@solana/wallet-adapter-react-ui';
import {
    UnsafeBurnerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';

// Required wallet modal styles
import '@solana/wallet-adapter-react-ui/styles.css';

function AdapterFunc({ children }) {
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(
        () => "https://solana-devnet.g.alchemy.com/v2/8WgUwQm3DE-vwOvIP64ZJlXUsUbIk1sI",
        []
    );

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
            new UnsafeBurnerWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f4f4' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
                            <WalletMultiButton />
                            <WalletDisconnectButton />
                        </div>

                 
                        <div style={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            {children}
                        </div>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}

export default AdapterFunc;
