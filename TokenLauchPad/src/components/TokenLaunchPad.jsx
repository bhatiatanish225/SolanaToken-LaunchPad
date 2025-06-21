import React from 'react';

export function TokenLaunchPad() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Solana Token Launch Pad</h1>
            <input className="inputtext" type='text' placeholder='Enter Token Name' />
            <br />
            <input className="inputtext" type='text' placeholder='Enter Token Symbol' />
            <br />
            <input className="inputtext" type='text' placeholder='Enter Token Supply' />
            <br />
            <input className="inputtext" type='text' placeholder='Enter Token Price' />
            <br />
            <button className="btn">Launch Token</button>
        </div>
    );
}
