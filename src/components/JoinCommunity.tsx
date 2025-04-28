// components/JoinCommunity.tsx
import { FaTelegramPlane, FaTwitter, FaDiscord,FaInstagram, } from "react-icons/fa";

export default function JoinCommunity() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 pt-16 pb-8 text-[#0D1F31] text-center p-8">
      <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
      <p className="text-lg mb-8">Be part of the SENG Token family.</p>
      <div className="flex space-x-6">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
        >
          <FaTelegramPlane size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
        >
          <FaDiscord size={24} />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-400 hover:bg-purple-300 p-4 rounded-full transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </section>
  );
}
