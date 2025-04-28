"use client"

import { FaRegCopy, FaExclamationCircle } from 'react-icons/fa'

const ContractAddress: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0D1F31]">Contract Address</h2>
          <p className="text-[#333333] mt-2">
            Our smart contract will be available soon
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/30 backdrop-filter backdrop-blur-md rounded-xl p-6 border border-[#6D1DC6]/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-[#0D1F31] mb-1">SENG TOKEN CONTRACT</h3>
                <div className="bg-white/50 rounded-lg p-5 font-mono text-center flex items-center justify-center">
                  <div className="flex items-center gap-3 text-[#6D1DC6]">
                    <FaExclamationCircle className="w-5 h-5" />
                    <span className="text-lg font-bold">COMING SOON</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  disabled
                  className="flex items-center gap-2 bg-[#6D1DC6] text-white px-4 py-2 rounded-md cursor-not-allowed opacity-70"
                >
                  <FaRegCopy className="w-4 h-4" />
                  <span>Copy Address</span>
                </button>
                
                <button 
                  disabled
                  className="flex items-center gap-2 border border-[#6D1DC6] text-[#6D1DC6] px-4 py-2 rounded-md cursor-not-allowed opacity-70"
                >
                  View on Solscan
                </button>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-[#333333]">
              <p className="mb-2">
                <strong>Network:</strong> Solana Mainnet
              </p>
              <p>
                <strong>Note:</strong> Our contract is currently in development and will be deployed soon. 
                Stay tuned for the official launch announcement!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContractAddress