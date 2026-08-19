import Image from "next/image";
import { ArrowRight, Smartphone } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="w-full bg-[#f6f6f6] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-6 md:mb-8">
          <span className="block md:hidden">There&apos;s more to love in the apps</span>
          <span className="hidden md:block">It&apos;s easier in the apps</span>
        </h2>

        {/* Mobile View: App Icon Cards (matching Image 2) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {/* Mobile Card 1 */}
          <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-2xs border border-neutral-100 cursor-pointer">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white font-bold text-xs tracking-tight">
                UberStep
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">
                  UberStep
                </h3>
                <p className="text-xs text-neutral-500">
                  Download the app
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-neutral-800 shrink-0" />
          </div>

          {/* Mobile Card 2 */}
          <div className="flex items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-2xs border border-neutral-100 cursor-pointer">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-black text-white font-bold text-[10px] tracking-tight flex-col leading-none">
                <span>Step</span>
                <span>Lab</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">
                  StepLab 3D Fit
                </h3>
                <p className="text-xs text-neutral-500">
                  Download the app
                </p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-neutral-800 shrink-0" />
          </div>
        </div>

        {/* Desktop View: QR Code Cards (matching Image 1) */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {/* Desktop Card 1 */}
          <div className="flex items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-xs border border-neutral-100 transition hover:shadow-md cursor-pointer">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 border border-neutral-200 rounded-xl p-1 bg-white">
                <Image
                  src="/images/qr_code.svg"
                  alt="QR Code for UberStep App"
                  fill
                  sizes="80px"
                  className="p-1 object-contain"
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1">
                  Download the UberStep App
                </h3>
                <p className="text-xs text-neutral-500">
                  Scan to shop drops, track deliveries & earn step points
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-neutral-800 shrink-0" />
          </div>

          {/* Desktop Card 2 */}
          <div className="flex items-center justify-between gap-6 rounded-2xl bg-white p-6 shadow-xs border border-neutral-100 transition hover:shadow-md cursor-pointer">
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 border border-neutral-200 rounded-xl p-1 bg-white">
                <Image
                  src="/images/qr_code.svg"
                  alt="QR Code for StepLab 3D Scanner"
                  fill
                  sizes="80px"
                  className="p-1 object-contain"
                />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-black mb-1">
                  Download StepLab 3D Scanner
                </h3>
                <p className="text-xs text-neutral-500">
                  Scan to calculate your exact arch, width, and true size
                </p>
              </div>
            </div>

            <ArrowRight className="h-5 w-5 text-neutral-800 shrink-0" />
          </div>
        </div>

      </div>
    </section>
  );
}

