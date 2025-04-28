"use client"

import React from 'react'
import Image from 'next/image'
import ScrollAnimation from './ScrollAnimation'

const About: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31]">
      <div className="container mx-auto px-4">
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About</h2>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Image */}
          <ScrollAnimation direction="left" delay={0.3} className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-xl border-4 border-[#FF8103]/20">
              <Image 
                src="/seng.png" 
                alt="Seng Token" 
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* Right side - Content */}
          <ScrollAnimation direction="right" delay={0.4} className="md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-[#0D1F31]">Our Mission</h3>
            <p className="text-lg">
              Seng Token is more than just a memecoin - it&apos;s a community-driven project built on the principles of fun, innovation, and shared prosperity.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About