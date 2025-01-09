"use client";
import React from "react";
import Image from "next/image";

/**
 * Header Component
 * Represents the top navigation bar or branding section of the application.
 */
const Header: React.FC = () => {
  return (
    <header className="bg-white text-black px-12 py-2 w-full border-b-2">
      <div className="text-4xl font-bold flex gap-4">
        <Image
          src="/file.svg"
          alt="Logo"
          width={50}
          height={50}
          className="w-10 h-10"
        />
        <span className="text-black text-3xl text-blue-700">Jackson</span>
      </div>
    </header>
  );
};

export default Header;
