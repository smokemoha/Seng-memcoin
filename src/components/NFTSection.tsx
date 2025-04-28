"use client"

import React from 'react'
import ScrollAnimation from './ScrollAnimation'

const NFTSection: React.FC = () => {
  // Sample NFT data - replace with your actual data
  const nfts = [
    {
      id: 1,
      title: "",
      image: "",
      description: "A unique series of cosmic-inspired digital art"
    },
    {
      id: 2,
      title: "",
      image: "",
      description: "Legendary characters from the crypto universe"
    },
    {
      id: 3,
      title: "",
      image: "",
      description: "Futuristic animal species in vibrant ecosystems"
    },
    {
      id: 4,
      title: "",
      image: "",
      description: "Rare digital collectibles with historical significance"
    }
  ]

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0D1F31] mb-4">Exclusive NFT Collections</h2>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Discover our upcoming unique digital collectibles powered by blockchain technology
            </p>
          </div>
        </ScrollAnimation>

        {/* NFT Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {nfts.map((nft, index) => (
            <ScrollAnimation 
              key={nft.id} 
              direction="up" 
              delay={0.3 + index * 0.1}
            >
              <div 
                className="relative group overflow-hidden rounded-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Highly Transparent Card */}
                <div className="bg-white/30 backdrop-filter backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-lg">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
                    {/* Only Coming Soon Text */}
                    <div className="text-black font-bold text-2xl">COMING SOON</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NFTSection