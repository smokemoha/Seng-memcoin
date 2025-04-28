// components/JoinCommunity.tsx
"use client"

import { FaTelegramPlane, FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import ScrollAnimation from './ScrollAnimation';

export default function JoinCommunity() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31] text-center p-8">
      <ScrollAnimation direction="up" delay={0.2}>
        <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-lg mb-8">Be part of the SENG Token family.</p>
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.4}>
        <div className="flex space-x-6">
          <ScrollAnimation direction="up" delay={0.5} className="inline-block">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
            >
              <FaTelegramPlane size={34} />
            </a>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.6} className="inline-block">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
            >
              <FaTwitter size={34} />
            </a>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.7} className="inline-block">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
            >
              <FaDiscord size={34} />
            </a>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.8} className="inline-block">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
            >
              <FaInstagram size={34} />
            </a>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </section>
  );
}