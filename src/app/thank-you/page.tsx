"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

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
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="relative px-5 py-4 rounded-2xl bg-navy border-2 border-gold/30 min-w-[90px] md:min-w-[110px] text-center glow-gold overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
          <span className="relative text-4xl md:text-6xl font-black font-mono text-gold">
            {String(mins).padStart(2, "0")}
          </span>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mt-2 font-medium">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-black text-gold/60 animate-count-pulse">:</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative px-5 py-4 rounded-2xl bg-navy border-2 border-gold/30 min-w-[90px] md:min-w-[110px] text-center glow-gold overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
          <span className="relative text-4xl md:text-6xl font-black font-mono text-gold">
            {String(secs).padStart(2, "0")}
          </span>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30 mt-2 font-medium">Seconds</span>
      </div>
    </div>
  );
}

function Confetti() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; color: string; delay: number; size: number }>>([]);

  useEffect(() => {
    const colors = ["#d4a853", "#e8c878", "#b8923f", "#ffffff", "#4ade80"];
    const items = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      size: Math.random() * 8 + 4,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animation: `confetti-fall ${2 + Math.random() * 2}s ease-in ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}

export default function ThankYouPage() {
  const [upsellDismissed, setUpsellDismissed] = useState(false);
  const [upsellAdded, setUpsellAdded] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAddUpsell = useCallback(() => {
    setUpsellAdded(true);
    setUpsellDismissed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  }, []);

  const handleDecline = useCallback(() => {
    setUpsellDismissed(true);
  }, []);

  return (
    <main className="min-h-screen px-4 py-12 md:py-20 relative">
      {showConfetti && <Confetti />}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {!upsellDismissed && (
          <section className="mb-16 p-8 md:p-12 rounded-3xl glass-card gradient-border text-center glow-gold animate-fade-in-scale">
            <div className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-[0.2em] uppercase text-navy bg-gradient-to-r from-gold to-gold-light rounded-full animate-pulse">
              Wait — Special One-Time Offer!
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Add <span className="text-gradient-gold animate-text-glow inline-block">APEX BURN</span> to Your Order
            </h2>
            <p className="text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
              Our premium thermogenic fat burner — exclusively available at this price for the next
              15 minutes only. Never offered again.
            </p>

            <CountdownTimer />

            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-navy/80 border border-white/10 max-w-md mx-auto">
              <div className="w-full h-40 rounded-xl bg-gradient-to-br from-red-500/20 via-orange-500/10 to-gold/20 flex items-center justify-center mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                <div className="relative text-center animate-float">
                  <svg className="w-14 h-14 text-gold mx-auto mb-2 drop-shadow-[0_0_20px_rgba(212,168,83,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                  <span className="text-lg font-bold text-gradient-gold">APEX BURN</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1">APEX BURN — Thermogenic Formula</h3>
              <p className="text-sm text-white/40 mb-5">
                Accelerate fat loss, boost metabolism, and enhance energy levels. 30-day supply.
              </p>
              <div className="flex items-baseline justify-center gap-3 mb-5">
                <span className="text-4xl font-black text-gradient-gold">$29</span>
                <span className="text-lg text-white/30 line-through">$67</span>
                <span className="px-2.5 py-1 text-xs font-bold bg-green-500/20 text-green-400 rounded-full">
                  SAVE 57%
                </span>
              </div>
              <button
                onClick={handleAddUpsell}
                className="w-full py-4 text-lg font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-xl hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-[1.02] glow-gold-strong cursor-pointer"
              >
                YES — Add to My Order for Just $29!
              </button>
              <button
                onClick={handleDecline}
                className="block w-full mt-4 text-sm text-white/25 hover:text-white/40 transition-colors cursor-pointer"
              >
                No thanks, just send my original order →
              </button>
            </div>
          </section>
        )}

        <section className="text-center mb-12 animate-fade-in-up">
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6">
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" style={{ animationDuration: "2s" }} />
            <div className="relative w-full h-full rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Thank You for Your <span className="text-gradient-gold">Order!</span>
          </h1>
          <p className="text-white/50 max-w-md mx-auto">
            Your order has been confirmed and will ship within 24 hours. Check your email for tracking details.
          </p>
        </section>

        <section className="p-6 md:p-8 rounded-2xl glass-card gradient-border mb-6">
          <h2 className="text-xl font-bold mb-6">Order Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="text-white/40">Order Number</span>
              <span className="font-mono font-bold text-gold">#APX-847291</span>
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
                  <div className="text-sm text-white/30">Elite Pre-Workout Formula</div>
                </div>
              </div>
              <span className="font-bold">$117.00</span>
            </div>
            {upsellAdded && (
              <div className="flex items-center justify-between pb-4 border-b border-white/5 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">APEX BURN</div>
                    <div className="text-sm text-white/30">Thermogenic Formula</div>
                  </div>
                </div>
                <span className="font-bold">$29.00</span>
              </div>
            )}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="text-white/40">Shipping</span>
              <span className="text-green-400 font-semibold">FREE</span>
            </div>
            <div className="flex items-center justify-between text-xl font-bold pt-1">
              <span>Total Charged</span>
              <span className="text-gradient-gold text-2xl">${upsellAdded ? "146.00" : "117.00"}</span>
            </div>
          </div>
        </section>

        <section className="p-6 rounded-2xl glass-card border border-white/5 mb-8">
          <h3 className="font-bold mb-5 text-sm tracking-wider uppercase text-white/60">Estimated Delivery</h3>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.4)]" />
              <span className="text-[10px] text-white/40 whitespace-nowrap">Confirmed</span>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-green-400/50 to-white/10 rounded-full" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-white/20 border border-white/10" />
              <span className="text-[10px] text-white/40 whitespace-nowrap">Ships 24h</span>
            </div>
            <div className="flex-1 h-0.5 bg-white/5 rounded-full" />
            <div className="flex flex-col items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-white/20 border border-white/10" />
              <span className="text-[10px] text-white/40 whitespace-nowrap">3-5 Days</span>
            </div>
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-semibold"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
