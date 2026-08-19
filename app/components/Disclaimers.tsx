export default function Disclaimers() {
  return (
    <section className="w-full bg-white py-10 border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 space-y-3">
        <p className="text-[11px] text-neutral-500 leading-relaxed">
          * Estimated shipping and delivery times are subject to location, carrier transit times, and weather conditions.
          UberStep Reserve drop guarantees apply to active members who complete reservation confirmations prior to launch cutoff times.
        </p>
        <p className="text-[11px] text-neutral-500 leading-relaxed">
          Certain silhouette styles, colorways, and sizes may have limited production runs. 30-day risk-free trial applies to all standard unworn and indoor-tested pairs with original tags.
        </p>
        <p className="text-[11px] text-neutral-500 leading-relaxed">
          Step reward redemption terms and corporate fleet purchasing terms available at <a href="#terms" className="underline hover:text-black">uberstep.com/terms</a>.
        </p>
      </div>
    </section>
  );
}
