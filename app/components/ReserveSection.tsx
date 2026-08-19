"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, CheckCircle2, Clock, ShieldCheck, ChevronDown, ArrowRight } from "lucide-react";

export default function ReserveSection() {
  const [reserveDate, setReserveDate] = useState("Thu, Nov 14");
  const [reserveSize, setReserveSize] = useState("US 10.5 (M)");

  return (
    <section id="reserve" className="w-full bg-white pb-14 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black mb-4">
          Plan for later
        </h2>

        {/* Main Teal Container */}
        <div className="overflow-hidden rounded-2xl bg-[#cbe7eb] p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-3 leading-tight">
                Get your fit right with UberStep Reserve
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 mb-5 leading-relaxed">
                Lock in highly anticipated limited editions up to 90 days in advance with guaranteed size allocation.
              </p>

              {/* Input Selectors */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center justify-between rounded-lg bg-white px-3.5 py-3 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-neutral-500" />
                    <span className="text-xs font-semibold text-black">{reserveDate}</span>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white px-3.5 py-3 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-neutral-500">SZ</span>
                    <span className="text-xs font-semibold text-black">{reserveSize}</span>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-neutral-400" />
                </div>
              </div>

              {/* Reserve Button */}
              <button
                type="button"
                className="w-full rounded-lg bg-black py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 cursor-pointer"
              >
                Reserve pair
              </button>
            </div>

            {/* Middle Column: Visual Graphic */}
            <div className="lg:col-span-4 flex justify-center py-2">
              <div className="relative h-44 sm:h-52 w-full max-w-[260px] sm:max-w-[280px]">
                <Image
                  src="/images/reserve_planner.svg"
                  alt="UberStep Reserve Planner & Watch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 280px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right Column (Desktop View): Value Props */}
            <div className="hidden lg:block lg:col-span-3 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-neutral-800 leading-snug">
                  Choose your exact drop window up to 90 days in advance
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-neutral-800 leading-snug">
                  Guaranteed pair allocation with zero queue waiting
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-neutral-800 leading-snug">
                  Cancel free of charge up to 60 minutes before dispatch
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#reserve-faq"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black underline underline-offset-4 hover:text-neutral-700"
                >
                  <span>See terms & benefits</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile View: Value Props stacked cleanly below the card (matching Image 2) */}
        <div className="block lg:hidden mt-6 space-y-4 px-2">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-black shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-neutral-800 leading-snug">
              Choose your exact drop window up to 90 days in advance
            </p>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-black shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-neutral-800 leading-snug">
              Guaranteed pair allocation with zero queue waiting
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-black shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-neutral-800 leading-snug">
              Cancel free of charge up to 60 minutes before dispatch
            </p>
          </div>

          <div className="pt-1">
            <a
              href="#reserve-faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-black underline underline-offset-4 hover:text-neutral-700"
            >
              <span>See terms & benefits</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

