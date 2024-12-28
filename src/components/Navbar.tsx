"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar: React.FC = () => {
  // Define the state type for 'active' as a string (name of the active page)
  const [active, setActive] = useState<string>("Home");

  const router = useRouter();

  // Type the function parameter as a string (page name)
  const handleNavigation = (page: string) => {
    setActive(page);
    if (page === "Home") {
      router.push("/"); // Navigate to the home page
    } else {
      router.push(`/${page.toLowerCase()}`); // Navigate to respective page
    }
  };

  return (
    <header className="bg-white text-black px-12">
      <div className="px-8 py-4 flex justify-between items-center">
        <div className="flex">
        {/* Logo and Title */}
        <div className="text-4xl font-bold flex gap-4">
            <Image src='/file.svg' alt="Logo" width={50} height={50} className="w-10 h-10" />
            <span className="text-black text-3xl text-blue-700">Jackson</span>
        </div>
        <div className="flex space-x-6 px-20">
          {["Languages", "Technologies", "Services", "Other"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className={`relative py-2 px-2 text-black focus:outline-none border-b-2 ${
                active === item
                  ? "border-black"
                  : "border-transparent hover:border-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        </div>

        {/* Navbar Links */}
        <nav>
          <div className="flex space-x-6">
            {["Home", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavigation(item)}
                className={`relative py-2 px-2 text-black focus:outline-none border-b-2 ${
                  active === item
                    ? "border-black"
                    : "border-transparent hover:border-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
