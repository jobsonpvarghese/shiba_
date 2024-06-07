import React from "react"
import "./htb.css"
import solana from "../../images/solana.png"

const HowToBuy = () => {
  return (
    <div className="how-to-buy-container">
      <h2 className="title-htb">How To Buy $VOTESHIBA</h2>
      <div className="steps-container">
        <div className="step-card">
          <img src={solana} alt="DEX" className="icon-htb" />
          <h3 className="step-title">First Step</h3>
          <p className="step-description">
            Acquire SOL from either Binance, Kucoin, Bybit Or Coinbase. Set up a Solana Wallet like Phantom, Solflare Or Trust wallet will also work.
          </p>
        </div>
        <div className="step-card">
          <img src={solana} alt="Secure" className="icon-htb" />
          <h3 className="step-title">Second Step</h3>
          <p className="step-description">
            Transfer the purchased SOL to the wallet you just set up, If you are looking to send just 1 SOL, remember to add a little extra for fees.
            Visit the Vote4shiba presale page here vote4shiba.com and click on Buy a popup modal will appear like in the one below.
          </p>
        </div>
        <div className="step-card">
          <img src={solana} alt="Buy" className="icon-htb" />
          <h3 className="step-title">Third Step</h3>
          <p className="step-description">Copy the presale address shown on the modal and send your SOL contribution to it. </p>
        </div>
        <div className="step-card">
          <img src={solana} alt="Add" className="icon-htb" />
          <h3 className="step-title">ADD TO YOUR WALLET</h3>
          <p className="step-description">
            Check the leaderboard after couple of hours to view your $VOTESHIBA allocation. Sit back and wait for your $VOTESHIBA tokens to be
            airdropped to your wallet after presale ends.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowToBuy
