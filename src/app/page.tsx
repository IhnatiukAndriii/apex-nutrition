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
        <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border border-white/10 rounded-lg">
      <summary className="flex items-center justify-between cursor-pointer p-5 text-lg font-medium hover:text-gold transition-colors">
        {q}
        <svg
          className="w-5 h-5 text-gold transition-transform group-open:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 pb-5 text-white/70 leading-relaxed">{a}</div>
    </details>
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
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light to-navy" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase text-gold border border-gold/30 rounded-full">
              Clinically Dosed Formula
            </span>
          </div>
          <h1 className="animate-fade-in-up-delay-1 text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Unleash Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
              Maximum Potential
            </span>
          </h1>
          <p className="animate-fade-in-up-delay-2 mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            APEX PRE is the elite pre-workout trusted by 5,000+ athletes. Clinically dosed ingredients.
            Zero fillers. Unmatched performance.
          </p>
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/checkout"
              className="animate-pulse-gold inline-flex items-center px-8 py-4 text-lg font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-lg hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-105"
            >
              ORDER NOW — 40% OFF
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <span className="text-sm text-white/50">Free shipping on all orders</span>
          </div>
        </div>
      </section>

      <section className="py-6 bg-navy-light border-y border-white/5">
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
            Why Athletes Choose <span className="text-gold">APEX PRE</span>
          </h2>
          <p className="text-center text-white/50 mb-16 max-w-xl mx-auto">
            Engineered for those who refuse to settle for average
          </p>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="group p-8 rounded-2xl bg-navy-light border border-white/5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  {b.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-animate py-20 md:py-28 px-4 bg-navy-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Full <span className="text-gold">Ingredient Transparency</span>
          </h2>
          <p className="text-center text-white/50 mb-12 max-w-xl mx-auto">
            No proprietary blends. Every ingredient, every dose — right on the label.
          </p>
          <div className="space-y-4">
            {[
              { name: "L-Citrulline", dose: "8,000mg", purpose: "Nitric oxide & pumps" },
              { name: "Beta-Alanine", dose: "3,200mg", purpose: "Endurance & buffering" },
              { name: "Caffeine Anhydrous", dose: "300mg", purpose: "Energy & alertness" },
              { name: "Alpha-GPC", dose: "300mg", purpose: "Focus & mind-muscle connection" },
              { name: "L-Tyrosine", dose: "1,500mg", purpose: "Cognitive performance" },
              { name: "Creatine Monohydrate", dose: "5,000mg", purpose: "Strength & power output" },
            ].map((ing) => (
              <div
                key={ing.name}
                className="flex items-center justify-between p-4 rounded-lg bg-navy border border-white/5 hover:border-gold/20 transition-colors"
              >
                <div>
                  <span className="font-semibold">{ing.name}</span>
                  <span className="ml-3 text-sm text-white/40">{ing.purpose}</span>
                </div>
                <span className="font-mono font-bold text-gold">{ing.dose}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-animate py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            What Our <span className="text-gold">Athletes Say</span>
          </h2>
          <p className="text-center text-white/50 mb-16">Join 5,000+ satisfied customers</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-8 rounded-2xl bg-navy-light border border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <Stars count={t.rating} />
                <p className="mt-4 text-white/70 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-white/40">Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-gradient-to-r from-gold-dark via-gold to-gold-dark">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="animate-count-pulse flex items-center justify-center w-10 h-10 rounded-full bg-navy/20 text-navy font-black text-lg">
            47
          </div>
          <p className="font-bold text-navy text-lg">
            Only <span className="underline">47 bottles</span> left at this price — don&apos;t miss out!
          </p>
        </div>
      </section>

      <section className="scroll-animate py-20 md:py-28 px-4 bg-navy-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-animate py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to <span className="text-gold">Level Up</span>?
          </h2>
          <p className="text-white/50 mb-8">
            Join thousands of athletes who transformed their workouts with APEX PRE.
          </p>
          <Link
            href="/checkout"
            className="animate-pulse-gold inline-flex items-center px-10 py-5 text-xl font-bold text-navy bg-gradient-to-r from-gold to-gold-light rounded-lg hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:scale-105"
          >
            CLAIM YOUR BOTTLE — 40% OFF
          </Link>
          <p className="mt-4 text-sm text-white/30">60-day money-back guarantee · Free shipping</p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-light/95 backdrop-blur-md border-t border-white/10 p-3">
        <Link
          href="/checkout"
          className="animate-shimmer block w-full py-4 text-center text-lg font-bold text-navy rounded-lg"
        >
          ORDER NOW — 40% OFF →
        </Link>
      </div>
    </main>
  );
}
