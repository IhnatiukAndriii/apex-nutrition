"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="flex items-center justify-center gap-3 text-4xl md:text-6xl font-black font-mono">
      <div className="flex flex-col items-center">
        <div className="px-4 py-3 rounded-xl bg-navy border border-gold/30 text-gold min-w-[80px] md:min-w-[100px] text-center">
          {String(mins).padStart(2, "0")}
        </div>
        <span className="text-xs text-white/40 mt-1 font-sans font-normal">MINUTES</span>
      </div>
      <span className="text-gold text-3xl -mt-5">:</span>
      <div className="flex flex-col items-center">
        <div className="px-4 py-3 rounded-xl bg-navy border border-gold/30 text-gold min-w-[80px] md:min-w-[100px] text-center">
          {String(secs).padStart(2, "0")}
        </div>
        <span className="text-xs text-white/40 mt-1 font-sans font-normal">SECONDS</span>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  const [upsellAdded, setUpsellAdded] = useState(false);

  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        {!upsellAdded && (
          <section className="mb-16 p-8 md:p-12 rounded-3xl bg-gradient-to-b from-navy-lighter to-navy-light border border-gold/20 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase text-navy bg-gold rounded-full animate-pulse">
              Wait — Special One-Time Offer!
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Add <span className="text-gold">APEX BURN</span> to Your Order
            </h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              Our premium thermogenic fat burner — exclusively available at this price for the next
              15 minutes only. Never offered again.
            </p>
            <CountdownTimer />
            <div className="mt-10 p-6 rounded-2xl bg-navy border border-white/10 max-w-md mx-auto">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-red-500/20 via-orange-500/10 to-gold/20 flex items-center justify-center mb-4">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gold mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                  <span className="text-lg font-bold text-gold">APEX BURN</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">APEX BURN — Thermogenic Formula</h3>
              <p className="text-sm text-white/50 mb-4">
                Accelerate fat loss, boost metabolism, and enhance energy levels. 30-day supply.
              </p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-gold">$29</span>
                <span className="text-lg text-white/40 line-through">$67</span>
                <span className="px-2 py-0.5 text-xs font-bold bg-green-500/20 text-green-400 rounded-full">
                  SAVE 57%
                </span>
              </div>
              <button
                onClick={() => setUpsellAdded(true)}
                className="animate-pulse-gold w-full py-4 text-lg font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-lg hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-[1.02] cursor-pointer"
              >
                YES — Add to My Order for Just $29!
              </button>
              <button
                onClick={() => setUpsellAdded(true)}
                className="block w-full mt-3 text-sm text-white/30 hover:text-white/50 transition-colors cursor-pointer"
              >
                No thanks, just send my original order →
              </button>
            </div>
          </section>
        )}

        <section className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-6">
            <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Thank You for Your <span className="text-gold">Order!</span>
          </h1>
          <p className="text-white/60 max-w-md mx-auto">
            Your order has been confirmed and will ship within 24 hours. Check your email for tracking details.
          </p>
        </section>

        <section className="p-8 rounded-2xl bg-navy-light border border-white/10 mb-8">
          <h2 className="text-xl font-bold mb-6">Order Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="text-white/50">Order Number</span>
              <span className="font-mono font-bold text-gold">#APX-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">APEX PRE — 3 Bottles</div>
                  <div className="text-sm text-white/40">Elite Pre-Workout Formula</div>
                </div>
              </div>
              <span className="font-bold">$117.00</span>
            </div>
            {upsellAdded && (
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">APEX BURN</div>
                    <div className="text-sm text-white/40">Thermogenic Formula</div>
                  </div>
                </div>
                <span className="font-bold">$29.00</span>
              </div>
            )}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="text-white/50">Shipping</span>
              <span className="text-green-400 font-semibold">FREE</span>
            </div>
            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total Charged</span>
              <span className="text-gold">${upsellAdded ? "146.00" : "117.00"}</span>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-2xl bg-navy-light border border-white/10 mb-8">
          <h3 className="font-bold mb-4">Estimated Delivery</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-sm text-white/60">Order Confirmed</span>
            </div>
            <div className="flex-1 h-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <span className="text-sm text-white/60">Ships in 24h</span>
            </div>
            <div className="flex-1 h-px bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20" />
              <span className="text-sm text-white/60">3-5 Business Days</span>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
