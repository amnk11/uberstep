import Image from "next/image";

// Mobile 2x2 compact categories
const mobileCategories = [
  {
    id: "daily",
    title: "Daily Pace",
    image: "/images/sneaker_daily.svg",
    alt: "UberStep Daily Pace",
  },
  {
    id: "reserve",
    title: "Reserve",
    image: "/images/sneaker_reserve.svg",
    alt: "UberStep Reserve",
  },
  {
    id: "speed",
    title: "Speed Aero",
    image: "/images/sneaker_speed.svg",
    alt: "UberStep Speed Aero",
  },
  {
    id: "trail",
    title: "Trail Shield",
    image: "/images/sneaker_trail.svg",
    alt: "UberStep Trail Shield",
  },
];

// Desktop 6-card detailed categories (matching Image 1)
const desktopCategories = [
  {
    id: "daily",
    title: "Daily Pace",
    description: "Everyday comfort sneakers engineered for city commutes and 10,000+ steps.",
    image: "/images/sneaker_daily.svg",
    alt: "UberStep Daily Pace Sneaker",
  },
  {
    id: "speed",
    title: "Speed Aero",
    description: "Ultralight carbon-infused racers built for explosive marathon velocity.",
    image: "/images/sneaker_speed.svg",
    alt: "UberStep Speed Aero Racing Shoe",
  },
  {
    id: "trail",
    title: "Trail Shield",
    description: "All-weather waterproof silhouettes ready for any off-road terrain.",
    image: "/images/sneaker_trail.svg",
    alt: "UberStep Trail Shield Shoe",
  },
  {
    id: "reserve",
    title: "Studio Luxe",
    description: "Handcrafted luxury silhouettes made with premium sustainable materials.",
    image: "/images/sneaker_reserve.svg",
    alt: "UberStep Studio Luxe Sneaker",
  },
  {
    id: "steplab",
    title: "StepLab Pro",
    description: "AI custom-fitted orthopedic insoles and high-support walking shoes.",
    image: "/images/sneaker_daily.svg",
    alt: "UberStep StepLab Pro",
  },
  {
    id: "sprint",
    title: "Sprint Pulse",
    description: "Lightweight track spikes and hyper-responsive sprint runners.",
    image: "/images/sneaker_speed.svg",
    alt: "UberStep Sprint Pulse",
  },
];

export default function ExploreSection() {
  return (
    <section id="explore" className="w-full bg-white pb-12 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-5 sm:mb-6">
          Explore what you can do with UberStep
        </h2>

        {/* Mobile View: 2x2 Compact Cards (matching Image 2) */}
        <div className="grid grid-cols-2 md:hidden gap-3">
          {mobileCategories.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center rounded-2xl bg-[#f3f3f3] p-4 min-h-[120px] transition hover:bg-[#eaeaea] cursor-pointer"
            >
              <div className="relative h-12 w-16 mb-2.5 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-black text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop View: 6 Detailed Cards (3x2 grid matching Image 1) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {desktopCategories.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-2xl bg-[#f6f6f6] p-6 min-h-[190px] transition duration-200 hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-bold text-black mb-1.5">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-[70%]">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex items-end justify-between">
                <button
                  type="button"
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black border border-neutral-200 shadow-2xs transition hover:bg-neutral-100 cursor-pointer"
                >
                  Details
                </button>

                <div className="relative h-20 w-32 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


