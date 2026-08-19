import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AlternatingStory() {
  return (
    <div className="w-full bg-white space-y-16 md:space-y-24 pb-16 md:pb-24">
      
      {/* 1. Planning your next marathon / getaway (Text Left, Image Right) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          <div className="lg:col-span-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-black leading-tight mb-4">
              Planning your next marathon or city stroll?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mb-6 leading-relaxed">
              From bustling urban pavements to scenic coastal bridges, UberStep delivers responsive cushioning, energy return, and cloud-like stability on every journey.
            </p>
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Explore collections
            </a>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm aspect-[16/10]">
              <Image
                src="/images/city_getaway.jpg"
                alt="UberStep Travel & Scenic Getaway"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. Engineered for creators & athletes (Image Left, Text Right) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-900 shadow-sm aspect-[16/11]">
              <Image
                src="/images/inside_garage.svg"
                alt="Engineered for athletes and creators"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-black leading-tight mb-4">
              Engineered for creators, athletes, and daily commuters
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mb-6 leading-relaxed">
              Move with confidence. Every silhouette is crafted with ultra-rebound bio-foam and breathable knit weave for seamless transitions from morning sprints to evening city walks.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#get-started"
                className="rounded-lg bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Get started
              </a>
              <a
                href="#materials"
                className="text-sm font-medium text-black underline underline-offset-4 hover:text-neutral-700"
              >
                Learn about our materials
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Reimagined for business & teams (Text Left, Image Right) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          <div className="lg:col-span-6 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-black leading-tight mb-4">
              The UberStep you know, reimagined for business
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mb-6 leading-relaxed">
              Outfit your healthcare staff, hospitality crews, or corporate workforce with certified ergonomic footwear engineered for 12+ hour standing shifts.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#business"
                className="rounded-lg bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Check out solutions
              </a>
              <a
                href="#business-pricing"
                className="text-sm font-medium text-black underline underline-offset-4 hover:text-neutral-700"
              >
                Business bulk pricing
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl bg-neutral-100 shadow-sm aspect-[16/11]">
              <Image
                src="/images/business_campus.svg"
                alt="UberStep Business and Enterprise Footwear"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Join the Collective / Earning (Image Left, Text Right) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl bg-blue-500 shadow-sm aspect-[16/11]">
              <Image
                src="/images/collective_earning.svg"
                alt="UberStep Athlete and Creator Collective"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-black leading-tight mb-4">
              Join the UberStep Athlete & Creator Collective
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mb-6 leading-relaxed">
              Earn rewards, test prototype releases before public drops, and turn your daily step mileage into exclusive footwear gear and member cashbacks.
            </p>
            <a
              href="#collective"
              className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Join Collective
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
