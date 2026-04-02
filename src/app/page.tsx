"use client";

import Link from "next/link";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Marcus Johnson",
    rating: 5,
    text: "I've tried every pre-workout on the market. APEX PRE is on another level. The focus, the pump, the energy — it's unmatched. I'll never go back.",
    avatar: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=d4a853&color=0a0f1e&size=80&bold=true",
  },
  {
    name: "Sarah Chen",
    rating: 5,
    text: "As a competitive CrossFit athlete, I need something that delivers without the crash. APEX PRE gives me 2+ hours of clean energy. Game changer.",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Chen&background=d4a853&color=0a0f1e&size=80&bold=true",
  },
  {
    name: "David Rodriguez",
    rating: 5,
    text: "My trainer recommended APEX and within the first week I was hitting PRs I hadn't touched in months. The ingredient transparency sold me.",
    avatar: "https://ui-avatars.com/api/?name=David+Rodriguez&background=d4a853&color=0a0f1e&size=80&bold=true",
  },
];

const faqs = [
  {
    q: "How should I take APEX PRE?",
    a: "Mix one scoop with 8-12 oz of cold water 20-30 minutes before your workout. Start with half a scoop to assess tolerance.",
  },
  {
    q: "Is APEX PRE safe for daily use?",
    a: "Yes. All ingredients are clinically dosed and third-party tested. We recommend cycling off for one week every 8 weeks for optimal results.",
  },
  {
    q: "Will it make me jittery or crash?",
    a: "No. Our sustained-release caffeine matrix provides smooth energy without the spike-and-crash effect of traditional pre-workouts.",
  },
  {
    q: "Is it third-party tested?",
    a: "Every batch is tested by an independent lab for purity, potency, and banned substances. We publish certificates of analysis on our website.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 60-day, 100% money-back guarantee. If you're not completely satisfied, return the product (even empty) for a full refund.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gold drop-shadow-[0_0_4px_rgba(212,168,83,0.5)]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-white/10 rounded-xl hover:border-gold/20 transition-all duration-300">
      <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 text-lg font-medium hover:text-gold transition-colors">
        {q}
        <svg
          className="w-5 h-5 text-gold/60 transition-transform duration-300 group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 md:px-6 pb-5 md:pb-6 text-white/60 leading-relaxed">{a}</div>
    </details>
  );
}

function ProductVisual() {
  return (
    <div className="relative w-64 h-72 md:w-80 md:h-96 mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 animate-glow-rotate opacity-50 blur-2xl" />
      <div className="relative w-full h-full rounded-3xl glass-card gradient-border flex flex-col items-center justify-center p-6 glow-gold">
        <div className="animate-float">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-gold/30 via-gold/10 to-transparent flex items-center justify-center mb-4">
            <svg className="w-14 h-14 md:w-20 md:h-20 text-gold drop-shadow-[0_0_20px_rgba(212,168,83,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold tracking-[0.3em] uppercase text-gold/60 mb-1">Apex Nutrition</div>
          <div className="text-2xl md:text-3xl font-black text-gradient-gold">APEX PRE</div>
          <div className="text-sm text-white/40 mt-1">Elite Pre-Workout</div>
          <div className="mt-3 flex items-baseline justify-center gap-2">
            <span className="text-3xl font-black text-gold">$49</span>
            <span className="text-sm text-white/30 line-through">$79</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="particle-1 absolute top-1/3 left-1/5 w-2 h-2 bg-gold/40 rounded-full" />
          <div className="particle-2 absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-gold/30 rounded-full" />
          <div className="particle-3 absolute top-2/3 left-1/3 w-1 h-1 bg-gold/50 rounded-full" />
          <div className="particle-1 absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-gold/20 rounded-full" />
          <div className="particle-2 absolute bottom-1/3 left-1/2 w-2 h-2 bg-gold/25 rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[80px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.25em] uppercase text-gold border border-gold/30 rounded-full bg-gold/5">
                Clinically Dosed Formula
              </span>
            </div>
            <h1 className="animate-fade-in-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight">
              Unleash Your
              <br />
              <span className="text-gradient-gold animate-text-glow inline-block">
                Maximum Potential
              </span>
            </h1>
            <p className="animate-fade-in-up-delay-2 mt-6 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              APEX PRE is the elite pre-workout trusted by 5,000+ athletes. Clinically dosed ingredients.
              Zero fillers. Unmatched performance.
            </p>
            <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Link
                href="/checkout"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-xl hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-105 glow-gold-strong"
              >
                ORDER NOW — 40% OFF
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-sm text-white/40">Free shipping on all orders</span>
            </div>
          </div>
          <div className="animate-fade-in-scale flex-shrink-0">
            <ProductVisual />
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <section className="py-5 glass border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <Stars count={5} />
            <span className="font-semibold text-white">5,000+</span> verified reviews
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/10" />
          <span>As seen in <strong className="text-white">Men&apos;s Health</strong></span>
          <div className="hidden sm:block w-px h-5 bg-white/10" />
          <span>Featured in <strong className="text-white">GQ</strong></span>
          <div className="hidden sm:block w-px h-5 bg-white/10" />
          <span>Trusted by <strong className="text-white">Elite Athletes</strong></span>
        </div>
      </section>

      <section className="scroll-animate py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Why Athletes Choose <span className="text-gradient-gold">APEX PRE</span>
          </h2>
          <p className="text-center text-white/40 mb-16 max-w-xl mx-auto">
            Engineered for those who refuse to settle for average
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Explosive Energy",
                desc: "300mg sustained-release caffeine matrix for 2+ hours of clean, crash-free energy that powers your most intense sessions.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Laser Focus",
                desc: "Nootropic blend with Alpha-GPC and L-Tyrosine enhances mind-muscle connection and mental clarity throughout your workout.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Skin-Splitting Pumps",
                desc: "8g L-Citrulline and 3.2g Beta-Alanine deliver insane vascularity and endurance so you can push past every plateau.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="group p-8 rounded-2xl glass-card gradient-border hover:glow-gold transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 text-gold flex items-center justify-center mb-5 group-hover:from-gold/30 group-hover:to-gold/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,168,83,0.2)]">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-gold transition-colors duration-300">{b.title}</h3>
                <p className="text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <section className="scroll-animate py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 via-navy-light to-navy-light/50" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Full <span className="text-gradient-gold">Ingredient Transparency</span>
          </h2>
          <p className="text-center text-white/40 mb-12 max-w-xl mx-auto">
            No proprietary blends. Every ingredient, every dose — right on the label.
          </p>
          <div className="space-y-3">
            {[
              { name: "L-Citrulline", dose: "8,000mg", purpose: "Nitric oxide & pumps" },
              { name: "Beta-Alanine", dose: "3,200mg", purpose: "Endurance & buffering" },
              { name: "Caffeine Anhydrous", dose: "300mg", purpose: "Energy & alertness" },
              { name: "Alpha-GPC", dose: "300mg", purpose: "Focus & mind-muscle connection" },
              { name: "L-Tyrosine", dose: "1,500mg", purpose: "Cognitive performance" },
              { name: "Creatine Monohydrate", dose: "5,000mg", purpose: "Strength & power output" },
            ].map((ing, i) => (
              <div
                key={ing.name}
                className="group flex items-center justify-between p-4 md:p-5 rounded-xl glass-card border border-white/5 hover:border-gold/20 transition-all duration-300 hover:-translate-x-1"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold/50 group-hover:bg-gold group-hover:shadow-[0_0_8px_rgba(212,168,83,0.5)] transition-all duration-300" />
                  <div>
                    <span className="font-semibold">{ing.name}</span>
                    <span className="ml-3 text-sm text-white/30 hidden sm:inline">{ing.purpose}</span>
                  </div>
                </div>
                <span className="font-mono font-bold text-gold text-lg">{ing.dose}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <section className="scroll-animate py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            What Our <span className="text-gradient-gold">Athletes Say</span>
          </h2>
          <p className="text-center text-white/40 mb-16">Join 5,000+ satisfied customers</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="group p-8 rounded-2xl glass-card gradient-border hover:glow-gold transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Stars count={t.rating} />
                  <svg className="w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-white/60 leading-relaxed italic mb-6">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full ring-2 ring-gold/20"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-gold/60">Verified Buyer ✓</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark via-gold to-gold-dark animate-gradient-shift" />
        <div className="relative max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="animate-count-pulse flex items-center justify-center w-11 h-11 rounded-full bg-navy/30 text-navy font-black text-lg backdrop-blur-sm">
            47
          </div>
          <p className="font-bold text-navy text-lg">
            Only <span className="underline decoration-2">47 bottles</span> left at this price — don&apos;t miss out!
          </p>
        </div>
      </section>

      <section className="scroll-animate py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-light/50 via-navy-light to-navy-light/50" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gradient" />

      <section className="scroll-animate py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gradient-gold">Level Up</span>?
          </h2>
          <p className="text-white/40 mb-10">
            Join thousands of athletes who transformed their workouts with APEX PRE.
          </p>
          <Link
            href="/checkout"
            className="group relative inline-flex items-center px-12 py-5 text-xl font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-xl hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-105 glow-gold-strong"
          >
            CLAIM YOUR BOTTLE — 40% OFF
            <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-5 text-sm text-white/25">60-day money-back guarantee · Free shipping · Secure checkout</p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-white/10 p-3">
        <Link
          href="/checkout"
          className="animate-shimmer block w-full py-4 text-center text-lg font-bold text-navy rounded-xl"
        >
          ORDER NOW — 40% OFF →
        </Link>
      </div>
    </main>
  );
}
