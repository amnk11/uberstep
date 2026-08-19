import Image from "next/image";

export default function AccountSection() {
  return (
    <section id="login" className="w-full bg-white pb-14 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl bg-[#f6f6f6] p-8 md:p-12">
          
          {/* Left Text & CTA */}
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black mb-3">
              Log in to see your account details
            </h2>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              View past orders, track custom size profiles, monitor step reward points, and unlock member-only releases.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#login-action"
                className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Log in to account
              </a>

              <a
                href="#signup"
                className="text-sm font-medium text-black underline underline-offset-4 hover:text-neutral-700"
              >
                Sign up as member
              </a>
            </div>
          </div>

          {/* Right Duo Graphic */}
          <div className="relative h-48 w-full max-w-[340px] shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/images/login_duo.svg"
              alt="UberStep Member Duo"
              fill
              sizes="(max-width: 768px) 100vw, 340px"
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
