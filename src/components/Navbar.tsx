"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Navbar Component
 * Represents a vertical navigation menu for the application.
 */
const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("About");
  const router = useRouter();

  /**
   * Handles navigation and updates the active menu item.
   * @param page - The name of the page to navigate to.
   */
  const handleNavigation = (page: string) => {
    setActive(page);
    if (page === "About") {
      router.push("/");
    } else {
      router.push(`/${page.toLowerCase()}`);
    }
  };

  return (
    <aside className="h-full w-64 bg-white text-black shadow-lg">
      <div className="flex flex-col h-full pt-4">

        {/* Main Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            {["About", "Projects", "Technologies"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={`w-full text-left py-2 px-4 rounded-md focus:outline-none ${
                    active === item
                      ? "bg-black text-white"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Navbar;
