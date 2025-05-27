import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4">
        <span className="inline-block px-4 py-1 mb-2 text-sm font-medium text-cyan-300 bg-cyan-900/30 rounded-full">
          Full Stack Developer
        </span>

        <h3
          className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          Hi I'm Faruq Sowemimo
          <Image
            src={assets.hand_icon}
            className="w-6 animate-pulse"
            alt="Hand icon"
            width={24}
            height={24}
          />
        </h3>

        <h1
          className="text-3xl sm:text-6xl lg:text-[66px] font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-secondary)" }}
        >
          The Software Developer you need.
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl my-4">
          With a burning passion for designing and creating full stack
          applications from start to finish
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://github.com/legendcodes1?tab=repositories"
            className="px-10 py-3 border-none rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center gap-2 font-medium hover:opacity-90 transition-opacity"
          >
            Git Hub
            <Image
              src={assets.right_arrow}
              alt="Right arrow"
              className="w-4 filter brightness-0 invert"
              width={16}
              height={16}
            />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-700 hover:border-cyan-500 hover:text-cyan-300 transition-colors flex items-center gap-2"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt="Download icon"
              className="w-4"
              width={16}
              height={16}
            />
          </a>
        </div>

        {/* Add subtle animated particle effect */}
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden z-0 opacity-30 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-100px) translateX(20px);
            }
            100% {
              transform: translateY(-200px) translateX(0);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Header;
