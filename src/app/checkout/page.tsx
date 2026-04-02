"use client";

import Link from "next/link";
import { useState } from "react";

const packages = [
  {
    bottles: 1,
    label: "Starter",
    price: 49,
    original: 79,
    savings: 38,
    perBottle: 49,
    badge: null,
  },
  {
    bottles: 3,
    label: "Most Popular",
    price: 117,
    original: 237,
    savings: 51,
    perBottle: 39,
    badge: "MOST POPULAR",
  },
  {
    bottles: 6,
    label: "Best Value",
    price: 196,
    original: 474,
    savings: 59,
    perBottle: 32.67,
    badge: "BEST VALUE",
  },
];

export default function CheckoutPage() {
  const [selected, setSelected] = useState(1);
  const [qty, setQty] = useState(1);
  const pkg = packages[selected];
  const total = pkg.price * qty;

  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-gold transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to product
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Secure <span className="text-gold">Checkout</span>
        </h1>
        <p className="text-white/50 mb-12">Complete your order below</p>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-xl font-bold mb-6">Select Your Package</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {packages.map((p, i) => (
                  <button
                    key={p.bottles}
                    onClick={() => { setSelected(i); setQty(1); }}
                    className={`relative p-6 rounded-2xl border-2 text-left transition-all duration-300 cursor-pointer ${
                      selected === i
                        ? "border-gold bg-gold/5 shadow-lg shadow-gold/10"
                        : "border-white/10 bg-navy-light hover:border-white/20"
                    }`}
                  >
                    {p.badge && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold tracking-wider text-navy bg-gold rounded-full whitespace-nowrap">
                        {p.badge}
                      </span>
                    )}
                    <div className="text-3xl font-black mb-1">{p.bottles}</div>
                    <div className="text-sm text-white/50 mb-3">
                      {p.bottles === 1 ? "Bottle" : "Bottles"}
                    </div>
                    <div className="text-2xl font-bold text-gold">${p.price}</div>
                    <div className="text-sm text-white/40 line-through">${p.original}</div>
                    <div className="mt-2 text-xs font-semibold text-green-400">
                      SAVE {p.savings}%
                    </div>
                    <div className="mt-1 text-xs text-white/40">
                      ${p.perBottle.toFixed(2)} / bottle
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Shipping Address</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="NY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">ZIP Code</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6">Payment Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Card Number</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                    placeholder="4242 4242 4242 4242"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5">CVC</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-navy-light border border-white/10 text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="p-6 rounded-2xl bg-navy-light border border-white/10">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center shrink-0">
                    <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">APEX PRE</div>
                    <div className="text-sm text-white/50">Elite Pre-Workout Formula</div>
                    <div className="text-sm text-white/50">
                      {pkg.bottles} {pkg.bottles === 1 ? "bottle" : "bottles"} per set
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <label className="text-sm text-white/60">Qty:</label>
                  <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="px-3 py-1.5 rounded-lg bg-navy border border-white/10 text-white text-sm focus:border-gold focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2 text-sm border-t border-white/10 pt-4">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Shipping</span>
                    <span className="text-green-400">FREE</span>
                  </div>
                  <div className="flex justify-between text-white/40 line-through">
                    <span>Regular price</span>
                    <span>${(pkg.original * qty).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-white/10 pt-3">
                    <span>Total</span>
                    <span className="text-gold">${total.toFixed(2)}</span>
                  </div>
                  <div className="text-xs text-green-400 text-right">
                    You save ${((pkg.original - pkg.price) * qty).toFixed(2)}!
                  </div>
                </div>
              </div>

              <Link
                href="/thank-you"
                className="animate-pulse-gold block w-full py-4 text-center text-lg font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-lg hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-[1.02]"
              >
                COMPLETE ORDER →
              </Link>

              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    text: "256-bit SSL",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                    text: "60-Day Guarantee",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                      </svg>
                    ),
                    text: "Free Shipping",
                  },
                ].map((badge) => (
                  <div
                    key={badge.text}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-navy-light border border-white/5 text-center"
                  >
                    <div className="text-gold">{badge.icon}</div>
                    <span className="text-xs text-white/50">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
