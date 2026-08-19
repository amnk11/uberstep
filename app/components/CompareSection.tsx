"use client";

import { useState } from "react";
import Image from "next/image";
import { Footprints, Zap, Mountain, User, Star, ChevronRight } from "lucide-react";

const options = [
  {
    id: "one",
    name: "UberStep One",
    category: "Everyday Commute",
    price: "$130.00",
    rating: "4.9",
    capacity: "Plush BioFoam",
    time: "2-Day Delivery",
    desc: "Affordable, cloud-like daily walker",
    icon: "/images/sneaker_daily.svg",
  },
  {
    id: "pro",
    name: "UberStep Pro Flow",
    category: "High Performance",
    price: "$165.00",
    rating: "4.9",
    capacity: "Carbon Propel",
    time: "Next Day Air",
    desc: "Energy-returning marathon runner",
    icon: "/images/sneaker_speed.svg",
  },
  {
    id: "terrain",
    name: "UberStep All-Terrain",
    category: "Trail & Weather Shield",
    price: "$190.00",
    rating: "4.8",
    capacity: "Vibram Grip",
    time: "2-Day Delivery",
    desc: "Rugged waterproof trail explorer",
    icon: "/images/sneaker_trail.svg",
  },
];

export default function CompareSection() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedShoe, setSelectedShoe] = useState("one");

  return (
    <section id="compare" className="w-full bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-2">
          Compare your sneaker options
        </h2>
        <p className="text-sm text-neutral-600 mb-8 max-w-2xl">
          Find the perfect balance of lightweight responsiveness, cushioning stack, and price to elevate every stride.
        </p>

        {/* 2-Column Comparison Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Product Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
            <div>
              {/* Category Filter Tabs */}
              <div className="mb-6 flex items-center gap-2 border-b border-neutral-100 pb-4">
                <button
                  type="button"
                  onClick={() => setSelectedTab("all")}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    selectedTab === "all" ? "bg-black text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  All Silhouettes
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTab("running")}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    selectedTab === "running" ? "bg-black text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  Running
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTab("lifestyle")}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                    selectedTab === "lifestyle" ? "bg-black text-white" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  Lifestyle
                </button>
              </div>

              {/* Shoes List with Uber vehicle list UI */}
              <div className="space-y-3">
                {options.map((shoe) => (
                  <div
                    key={shoe.id}
                    onClick={() => setSelectedShoe(shoe.id)}
                    className={`flex items-center justify-between rounded-xl p-3.5 transition cursor-pointer border ${
                      selectedShoe === shoe.id
                        ? "border-black bg-neutral-50 shadow-2xs"
                        : "border-transparent hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-16 shrink-0">
                        <Image
                          src={shoe.icon}
                          alt={shoe.name}
                          fill
                          sizes="64px"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-black">{shoe.name}</p>
                          <span className="flex items-center text-xs font-semibold text-neutral-800">
                            <Star className="h-3 w-3 fill-black text-black mr-0.5" />
                            {shoe.rating}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500">{shoe.time} • {shoe.capacity}</p>
                        <p className="text-[11px] text-neutral-400 mt-0.5">{shoe.desc}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-bold text-black">{shoe.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Select CTA */}
            <div className="mt-6 pt-4 border-t border-neutral-100">
              <button
                type="button"
                className="w-full rounded-lg bg-black py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 cursor-pointer"
              >
                Choose {options.find((s) => s.id === selectedShoe)?.name}
              </button>
            </div>
          </div>

          {/* Right Column: Live Map & Pacing Telemetry (Hidden on Mobile, Visible on Desktop matching Image 1 & 2) */}
          <div className="hidden lg:flex lg:col-span-6 relative overflow-hidden rounded-2xl border border-neutral-200 bg-[#E4E9EC] shadow-xs min-h-[380px] items-center justify-center">
            <Image
              src="/images/compare_map.svg"
              alt="UberStep Route & Stride Telemetry Map"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
