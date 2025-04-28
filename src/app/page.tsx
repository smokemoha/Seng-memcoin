"use client"

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ"
import JoinCommunity from "@/components/JoinCommunity";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer"
import NFTSection from "@/components/NFTSection";
import About from "@/components/About";
import ContractAddress from "@/components/Contract Address";
import GradientSeparator from "@/components/GradientSeparator";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
<GradientSeparator/>
      <About />
      <GradientSeparator/>
      <Roadmap />
      <GradientSeparator/>
      < Tokenomics/>
      <GradientSeparator/>
      <NFTSection  />
      <GradientSeparator/>
      <ContractAddress/>
      <GradientSeparator/>
      <JoinCommunity/>
      <GradientSeparator/>
      
      <FAQ  />
 <GradientSeparator/>
<Footer/>
    </div>
  );
}