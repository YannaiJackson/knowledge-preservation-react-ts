"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
    <header className="bg-gray-200 text-black px-12">
      <div className="px-8 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="text-4xl font-bold">
          <span className="text-black text-5xl">Yannai Jackson</span>
          <span className="text-black text-2xl">
            <br />
            Knowledge Preservation Site
          </span>
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
