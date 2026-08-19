"use client";

import { useState } from "react";
import Image from "next/image";
import { Navigation, Clock, Footprints, ChevronDown } from "lucide-react";

export default function HeroSection() {
  // 1. Updated state initial values
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  return (
    <section className="w-full bg-white pt-6 pb-6 md:pt-10 md:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Booking & Search Card */}
          <div className="lg:col-span-6 xl:col-span-6">
            
            {/* Mobile-only top gray placeholder pill (as seen in Image 2) */}
            <div className="block md:hidden mb-4 h-5 w-32 rounded-md bg-[#e5e5e5]" />

            {/* Desktop Top Tabs (as seen in Image 1) */}
            <div className="hidden md:flex items-center gap-6 mb-6 border-b border-neutral-100 pb-3 text-sm font-medium text-neutral-600">
              <button type="button" className="flex items-center gap-2 text-black font-semibold border-b-2 border-black pb-3 -mb-3.5">
                <Footprints className="h-4 w-4" />
                <span>Everyday</span>
              </button>
              <button type="button" className="flex items-center gap-2 hover:text-black transition">
                <span>Run</span>
              </button>
              <button type="button" className="flex items-center gap-2 hover:text-black transition">
                <span>Reserve</span>
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold tracking-tight text-black leading-[1.1] mb-5">
              <span className="block md:inline">Go anywhere with </span>
              <span className="block md:inline">UberStep</span>
            </h1>

            {/* Desktop Mode Pill Toggle (as seen in Image 1) */}
            <div className="hidden md:flex items-center mb-5">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-neutral-800"
              >
                <Footprints className="h-3.5 w-3.5" />
                <span>Custom Fit</span>
              </button>
            </div>

            {/* Inputs Container with connected dot-to-square timeline */}
            <div className="relative mb-5 space-y-3">
              {/* Vertical connecting line */}
              <div className="absolute left-[24px] top-[26px] bottom-[26px] w-[1.5px] bg-neutral-700 pointer-events-none" />

              {/* Input 1: Size (Previously Pickup) */}
              <div className="relative flex items-center rounded-xl bg-[#f3f3f3] px-4 py-3.5 transition focus-within:bg-[#e9e9e9] focus-within:ring-2 focus-within:ring-black">
                <div className="mr-3.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 rounded-full border-[2.5px] border-black bg-white flex items-center justify-center">
                    <div className="h-1 w-1 rounded-full bg-black" />
                  </div>
                </div>
                <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Choose your size" // 2. Updated placeholder
                  className="w-full bg-transparent text-sm font-medium text-black placeholder-neutral-500 outline-none"
                />
                <Navigation className="h-4 w-4 text-black shrink-0 fill-current rotate-45" />
              </div>

              {/* Input 2: Style (Previously Dropoff) */}
              <div className="relative flex items-center rounded-xl bg-[#f3f3f3] px-4 py-3.5 transition focus-within:bg-[#e9e9e9] focus-within:ring-2 focus-within:ring-black">
                <div className="mr-3.5 flex h-4 w-4 items-center justify-center">
                  <div className="h-3 w-3 bg-black flex items-center justify-center">
                    <div className="h-1 w-1 bg-white" />
                  </div>
                </div>
                <input
                  type="text"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  placeholder="Choose your style" // 3. Updated placeholder
                  className="w-full bg-transparent text-sm font-medium text-black placeholder-neutral-500 outline-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="#compare"
                className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 cursor-pointer"
              >
                Shop sneakers {/* 4. Updated CTA text */}
              </a>

              <a
                href="#reserve"
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#eeeeee] px-5 py-3 text-sm font-medium text-black transition hover:bg-[#e2e2e2] cursor-pointer"
              >
                <Clock className="h-4 w-4 text-neutral-700" />
                <span>Reserve for drop</span>
              </a>
            </div>

            {/* Recent Activity Link */}
            <div className="mt-4">
              <a
                href="#login"
                className="text-xs sm:text-sm text-black underline underline-offset-4 hover:text-neutral-600 transition"
              >
                Log in to see your recent activity
              </a>
            </div>
          </div>

          {/* Right Column: Hero Luggage (Shown on Desktop/Tablet) */}
          <div className="hidden lg:block lg:col-span-6 xl:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm aspect-square flex items-center justify-center group">
              <Image
                src="/images/hero_luggage.jpg"
                alt="UberStep Travel Sneakers Packed in Suitcase"
                width={700}
                height={700}
                priority
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Bottom Image Overlay Strip matching reference */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 backdrop-blur-md p-4 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-300">Limited Edition</p>
                  <p className="text-sm font-medium">Pack light. Step anywhere.</p>
                </div>
                <a
                  href="#shop"
                  className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black transition hover:bg-neutral-200"
                >
                  Explore drops
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}