"use client";

import { useState } from "react";
import { Globe, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-8 lg:gap-10">
          <a href="#" className="text-[22px] md:text-2xl font-bold tracking-tight text-white hover:opacity-90">
            UberStep
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[14px] font-medium text-neutral-200">
            <a href="#everyday" className="hover:text-white transition-colors duration-150">Everyday</a>
            <a href="#run" className="hover:text-white transition-colors duration-150">Run</a>
            <a href="#lifestyle" className="hover:text-white transition-colors duration-150">Lifestyle</a>
            <a href="#about" className="hover:text-white transition-colors duration-150">About</a>
          </nav>
        </div>

        {/* Right Side: Utils & Actions */}
        <div className="flex items-center gap-4 lg:gap-6 text-[14px] font-medium">
          <div className="hidden sm:flex items-center gap-5 lg:gap-7 text-neutral-200">
            <button type="button" className="flex items-center gap-1.5 hover:text-white transition-colors duration-150 cursor-pointer">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </button>

            <a href="#help" className="hover:text-white transition-colors duration-150">
              Help
            </a>

            <a href="#login" className="hover:text-white transition-colors duration-150">
              Log in
            </a>
          </div>

          <a
            href="#shop"
            className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-black transition-colors duration-150 hover:bg-neutral-200"
          >
            Shop now
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-200 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-800 bg-black px-6 py-5 md:hidden">
          <div className="flex flex-col space-y-4 text-base font-medium">
            <a
              href="#everyday"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-white"
            >
              Everyday
            </a>
            <a
              href="#run"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-white"
            >
              Run
            </a>
            <a
              href="#lifestyle"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-white"
            >
              Lifestyle
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-200 hover:text-white"
            >
              About
            </a>

            <div className="pt-4 border-t border-neutral-800 flex flex-col space-y-3">
              <button type="button" className="flex items-center gap-2 text-neutral-300">
                <Globe className="h-4 w-4" />
                <span>EN (US)</span>
              </button>
              <a href="#help" className="text-neutral-300">Help</a>
              <a href="#login" className="text-neutral-300">Log in</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
