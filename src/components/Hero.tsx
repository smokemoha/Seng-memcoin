"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'




const Hero: React.FC = () => {
 
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 overflow-hidden flex items-center justify-center">
      {/* Hero */}
      <main className="container mx-auto px-4 w-full">
        {/* Animated container that slides down */}
        <div 
          className={`transform transition-all duration-1000 ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          }`}
        >
          {/* Content container with reduced spacing between columns */}
          <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 lg:space-x-12 justify-center">
            {/* Left */}
            <div className="flex-1 space-y-6 md:max-w-md lg:max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0D1F31]">SENG Token</h1>
              <p className="max-w-md">
              SENG is the future of meme fueled finance built fast, built wild, built on Solana. Powered by unstoppable energy, community driven chaos, and cutting-edge tech, SENG ignites a movement where memes tip, stake, govern, and rule. This isn&apos;t just another token — it&apos;s a revolution — and you&apos;re either riding the wave or watching from the sidelines.
              </p>
              <div className="flex space-x-4">
                <button className="bg-[#FF8103]  text-white px-6 py-2 rounded-md">
                  Buy
                </button>
                <button className="border border-[#FF8103] text-[#f0ece9] hover:bg-[#FF8103] hover:text-white px-6 py-2 rounded-md transition">
                  Learn More
                </button>
              </div>

              
            </div>

            {/* Right */}
            <div className="flex-1 flex justify-center mb-8 md:mb-0">
              <div 
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden flex items-center justify-center shadow-lg animate-float"
                style={{
                  animation: 'float 4s ease-in-out infinite'
                }}
              >
                <style jsx>{`
                  @keyframes float {
                    0% {
                      transform: translateY(0px);
                    }
                    50% {
                      transform: translateY(-15px);
                    }
                    100% {
                      transform: translateY(0px);
                    }
                  }
                `}</style>
                <Image 
                  src="/seng.png" 
                  alt="BUIDL" 
                  width={300} 
                  height={300} 
                  className="object-cover w-full h-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero