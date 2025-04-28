// components/Tokenomics.tsx
"use client"

import ScrollAnimation from './ScrollAnimation';

export default function Tokenomics() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31] text-center py-20 px-6" id="tokenomics">
      <ScrollAnimation direction="up" delay={0.2}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0D1F31]">Tokenomics</h2>
        <p className="text-base md:text-lg mb-10">How SENG Token tokens are distributed.</p>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Total Supply */}
        <ScrollAnimation direction="left" delay={0.3}>
          <div className="bg-white border-2 border-[#FF8103] p-8 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-lg font-medium mb-2 text-[#0D1F31]">Total Supply</span>
            <span className="text-3xl font-bold text-[#0D1F31]">10,000,000</span>
          </div>
        </ScrollAnimation>

        {/* Buy Tax */}
        <ScrollAnimation direction="right" delay={0.4}>
          <div className="bg-white border-2 border-[#FF8103] p-8 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-lg font-medium mb-2 text-[#0D1F31]">Buy Tax</span>
            <span className="text-3xl font-bold text-[#0D1F31]">5%</span>
          </div>
        </ScrollAnimation>

        {/* Sell Tax */}
        <ScrollAnimation direction="left" delay={0.5}>
          <div className="bg-white border-2 border-[#FF8103] p-8 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-lg font-medium mb-2 text-[#0D1F31]">Sell Tax</span>
            <span className="text-3xl font-bold text-[#0D1F31]">5%</span>
          </div>
        </ScrollAnimation>

        {/* LP Locked */}
        <ScrollAnimation direction="right" delay={0.6}>
          <div className="bg-white border-2 border-[#FF8103] p-8 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300">
            <span className="text-lg font-medium mb-2 text-[#0D1F31]">LP Locked</span>
            <span className="text-3xl font-bold text-[#0D1F31]">2 Years</span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}