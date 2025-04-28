'use client'

import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: ' Is the token audited or verified?',
    answer: ' Security is paramount. Our smart contract has been audited by [Auditor Name], and the audit report is available for your review.',
  },
  {
    question: 'What blockchain is SENG built on ?',
    answer: ' Our token is deployed on Solana, ensuring compatibility with popular wallets and decentralized applications.',
  },
  {
    question: ' Where can I buy or trade SENG?',
    answer: 'You can purchase or trade SENG on decentralized exchanges like Uniswap/PancakeSwap/Raydium and centralized exchanges such as Coinbase/Binance, depending on availability.',
  },
]

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-gradient-to-l from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31]">
      <ScrollAnimation direction="up" delay={0.2} className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg mb-12">Everything you need to know about SENG Token.</p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <ScrollAnimation 
              key={index} 
              direction="up" 
              delay={0.3 + index * 0.1} 
              className="bg-white-400 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-black/90">
                  {faq.answer}
                </div>
              )}
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  )
}

export default FAQ