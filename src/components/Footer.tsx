"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollAnimation from './ScrollAnimation';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
          {/* Logo and Description */}
          <ScrollAnimation direction="left" delay={0.2} className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/seng.png"
                alt="Seng Token Logo"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="text-3xl font-bold text-black">SENG</span>
            </Link>
            <p className="text-black/90 text-sm leading-relaxed max-w-md">
              Seng is more than just a memecoin - it&apos;s a community-driven 
              project bringing fun and innovation to the crypto space.
              Join us on our journey to the moon!
            </p>
          </ScrollAnimation>
          
          {/* Quick Links - Moved to the right */}
          <ScrollAnimation direction="right" delay={0.3} className="col-span-1 md:text-right">
            <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Tokenomics", href: "#tokenomics" },
                { name: "Roadmap", href: "#roadmap" },
                { name: "How to Buy", href: "#howtobuy" },
                { name: "FAQ", href: "#faq" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-black/80 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/20 my-6"></div>
        
        {/* Bottom Section */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black/70 text-sm order-2 md:order-1">
              © {currentYear} Seng Token. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 order-1 md:order-2">
              <Link 
                href="/terms" 
                className="text-black/70 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                href="/privacy" 
                className="text-black/70 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
            
            <p className="text-black/70 text-xs text-center md:text-right mt-4 md:mt-0 order-3">
              Seng Token is a meme coin with no intrinsic value or financial return expectation.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
};

export default Footer;