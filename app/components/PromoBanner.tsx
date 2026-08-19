"use client";

import { useState } from "react";
import { Tag, X } from "lucide-react";

export default function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <section className="w-full bg-white pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between gap-3 rounded-lg bg-[#f26522] px-4 py-3 text-black shadow-2xs">
          <div className="flex items-center gap-3">
            {/* Green diamond coupon badge */}
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-[#10b981] text-white shadow-2xs">
              <Tag className="h-4 w-4 fill-current" />
            </div>
            
            <p className="text-xs sm:text-sm font-semibold leading-tight text-black">
              First pair perk. Valid within 14 days of signup. T&Cs apply*
            </p>
          </div>
          
          {/* Close button */}
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="p-1 text-black hover:opacity-70 transition cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="h-4 w-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}

