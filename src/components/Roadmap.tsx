"use client"

import React from 'react'

const Roadmap = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31]">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-[#0D1F31] mb-12">Roadmap</h2>
      
      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#6D1DC6]"></div>
        
        {/* Mobile and Desktop Timeline Items */}
        <div className="space-y-16">
          {/* Phase 1 */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-5/12 pr-0 md:pr-8 mb-8 md:mb-0">
              <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-20">
                <p className="text-[#6D1DC6] font-bold mb-2">Phase 1</p>
                <h3 className="text-xl font-bold text-[#0D1F31] mb-3">Foundation & Solana Launch</h3>
                <ul className="text-[#333333] space-y-2 font-normal">
                  <li><span className="font-semibold">Smart Contract Development (Solana):</span> Deploy SENG using Solana Program Library (SPL Token) with total supply, burn mechanics, and anti-bot protections.</li>
                  <li><span className="font-semibold">Token Utilities Planning:</span> Plan for low gas tipping, staking, or microtransactions via SENG.</li>
                  <li><span className="font-semibold">Website & Branding:</span> Meme-centric website explaining what SENG stands for with Solana aesthetic—futuristic and fun.</li>
                  <li><span className="font-semibold">Socials Setup:</span> Twitter, Discord, Telegram, Instagram with a meme army built for viral engagement.</li>
                </ul>
              </div>
            </div>
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#6D1DC6] rounded-full z-10 shadow-lg"></div>
            </div>
            
            <div className="md:w-5/12"></div>
          </div>
          
          {/* Phase 2 */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-5/12 order-2 md:order-1"></div>
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#6D1DC6] rounded-full z-10 shadow-lg"></div>
            </div>
            
            <div className="w-full md:w-5/12 pl-0 md:pl-8 order-1 md:order-2 mb-8 md:mb-0">
              <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-20">
                <p className="text-[#6D1DC6] font-bold mb-2">Phase 2</p>
                <h3 className="text-xl font-bold text-[#0D1F31] mb-3">Launch & Community Hype</h3>
                <ul className="text-[#333333] space-y-2 font-normal">
                  <li><span className="font-semibold">Fair Launch or Presale:</span> Launch via platforms like Pump.fun or Backpack for Solana-based tokens.</li>
                  <li><span className="font-semibold">DEX Listing:</span> List SENG on Raydium, Jupiter, or Orca.</li>
                  <li><span className="font-semibold">Meme & Shill Competitions:</span> Weekly meme wars with prizes in SENG and community XP systems in Discord.</li>
                  <li><span className="font-semibold">Liquidity Lock:</span> Lock initial liquidity via platforms like HoneyComb or Solana Locker.</li>
                  <li><span className="font-semibold">Smart Contract Audit:</span> Lightweight audit from a Solana audit firm or community review.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-5/12 pr-0 md:pr-8 mb-8 md:mb-0">
              <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-20">
                <p className="text-[#6D1DC6] font-bold mb-2">Phase 3</p>
                <h3 className="text-xl font-bold text-[#0D1F31] mb-3">Ecosystem & NFT Integration</h3>
                <ul className="text-[#333333] space-y-2 font-normal">
                  <li><span className="font-semibold">SENG NFT Drop:</span> Meme-based NFTs with rarity tiers and community utility (e.g., voting, staking).</li>
                  <li><span className="font-semibold">SENG Tools:</span> Solana-based meme tipping bot and mobile wallet tracking tools.</li>
                  <li><span className="font-semibold">Community Governance:</span> DAO-style decision-making for SENG treasury and roadmap direction.</li>
                  <li><span className="font-semibold">Integration with Solana Tools:</span> Support Phantom, Solflare, and Backpack Wallet.</li>
                </ul>
              </div>
            </div>
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#6D1DC6] rounded-full z-10 shadow-lg"></div>
            </div>
            
            <div className="md:w-5/12"></div>
          </div>
          
          {/* Phase 4 */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-5/12 order-2 md:order-1"></div>
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#6D1DC6] rounded-full z-10 shadow-lg"></div>
            </div>
            
            <div className="w-full md:w-5/12 pl-0 md:pl-8 order-1 md:order-2 mb-8 md:mb-0">
              <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-20">
                <p className="text-[#6D1DC6] font-bold mb-2">Phase 4</p>
                <h3 className="text-xl font-bold text-[#0D1F31] mb-3">Growth & Exposure</h3>
                <ul className="text-[#333333] space-y-2 font-normal">
                  <li><span className="font-semibold">Listings:</span> Apply for Dextools/Dexscreener, CoinMarketCap, CoinGecko and start process for Tier 2 CEX listings that support SPL tokens.</li>
                  <li><span className="font-semibold">Partnerships & Collabs:</span> Work with other Solana-native memecoins, NFT projects, or games.</li>
                  <li><span className="font-semibold">Cross-Promo & Campaigns:</span> Community events, livestreams, and meme marketing blitz.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Phase 5 */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-5/12 pr-0 md:pr-8">
              <div className="bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-6 rounded-lg shadow-md border border-white border-opacity-20">
                <p className="text-[#6D1DC6] font-bold mb-2">Phase 5</p>
                <h3 className="text-xl font-bold text-[#0D1F31] mb-3">Long-Term Ecosystem</h3>
                <ul className="text-[#333333] space-y-2 font-normal">
                  <li><span className="font-semibold">SENGFi (Future):</span> Develop SENG staking or farming pools on Raydium.</li>
                  <li><span className="font-semibold">Cross-Chain Possibility:</span> Bridge to Ethereum or BSC using Wormhole for more visibility.</li>
                  <li><span className="font-semibold">Charity & IRL Campaigns:</span> Meme-powered philanthropy (e.g., Solana x SENG merch for causes).</li>
                  <li><span className="font-semibold">Roadmap v2 Planning:</span> Based on community votes and Solana ecosystem trends.</li>
                </ul>
              </div>
            </div>
            
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className="w-6 h-6 bg-[#6D1DC6] rounded-full z-10 shadow-lg"></div>
            </div>
            
            <div className="md:w-5/12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap