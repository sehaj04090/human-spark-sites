import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-servers.webp";
import logo from "@/assets/pulsecompute-logo.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PulseCompute — Quality Hosting & Affordable Pricing" },
      {
        name: "description",
        content:
          "PulseCompute delivers blazing-fast, reliable hosting at prices that actually make sense. Game servers, VPS, and web hosting engineered for performance.",
      },
      { property: "og:title", content: "PulseCompute — Quality Hosting & Affordable Pricing" },
      {
        property: "og:description",
        content: "Blazing-fast, reliable hosting at prices that make sense.",
      },
      { property: "og:image", content: heroImg },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-void)] text-white font-sans overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[-20%] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-violet)] opacity-30 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--color-pulse)] opacity-20 blur-[140px]" />
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="PulseCompute" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-semibold tracking-wide">
            PULSECOMPUTE
          </span>
        </a>
        <nav className="hidden gap-8 text-sm text-white/70 md:flex">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition"
        >
          Get Started
        </a>
      </header>

      {/* Hero */}
      <section className="relative px-6 pt-12 pb-20 md:px-12 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-glow)] animate-pulse" />
            99.99% Uptime
          </span>
          <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Quality Hosting <span className="text-[var(--color-glow)]">&</span>{" "}
            <br className="hidden md:block" />
            Affordable Pricing.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-white/60 md:text-lg">
            Enterprise-grade infrastructure for game servers, websites, and
            applications — without the enterprise price tag.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-pulse)] px-7 py-3 text-sm font-semibold shadow-[0_0_40px_-10px_var(--color-pulse)] hover:opacity-90 transition"
            >
              View Plans
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/15 px-7 py-3 text-sm font-medium hover:bg-white/5 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--color-void)] via-transparent to-transparent" />
          <img
            src={heroImg}
            alt="PulseCompute server infrastructure"
            className="w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-glow)]">
              Why PulseCompute
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-5xl">
              Built for performance. Priced for everyone.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Lightning Fast",
                desc: "NVMe SSDs and Ryzen 9 CPUs deliver sub-millisecond response times across every plan.",
                icon: "⚡",
              },
              {
                title: "DDoS Protected",
                desc: "Enterprise-grade mitigation absorbs attacks up to 1 Tbps before they reach your server.",
                icon: "🛡️",
              },
              {
                title: "24/7 Support",
                desc: "Real engineers — not bots — respond in under 5 minutes, any time of day.",
                icon: "💬",
              },
              {
                title: "Global Network",
                desc: "Locations across NA, EU, and Asia keep your players and visitors close to home.",
                icon: "🌐",
              },
              {
                title: "Instant Deploy",
                desc: "Your server is provisioned and online within 60 seconds of checkout.",
                icon: "🚀",
              },
              {
                title: "No Hidden Fees",
                desc: "What you see is what you pay. No setup costs, no upgrade traps, no surprises.",
                icon: "💎",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-[var(--color-pulse)]/40 hover:bg-white/[0.04]"
              >
                <div className="mb-4 text-3xl">{f.icon}</div>
                <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-glow)]">
              Pricing
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-5xl">
              Simple plans. Honest prices.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "3",
                tagline: "For small projects",
                features: ["2 GB RAM", "20 GB NVMe", "1 vCPU", "Unmetered bandwidth"],
                highlight: false,
              },
              {
                name: "Pulse",
                price: "9",
                tagline: "Most popular",
                features: ["8 GB RAM", "80 GB NVMe", "4 vCPU", "DDoS Protection", "Priority support"],
                highlight: true,
              },
              {
                name: "Surge",
                price: "24",
                tagline: "Power users",
                features: ["16 GB RAM", "200 GB NVMe", "8 vCPU", "Dedicated IP", "99.99% SLA"],
                highlight: false,
              },
            ].map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl border p-7 backdrop-blur-sm transition ${
                  p.highlight
                    ? "border-[var(--color-pulse)]/60 bg-gradient-to-b from-[var(--color-violet)]/20 to-transparent shadow-[0_0_60px_-20px_var(--color-pulse)]"
                    : "border-white/10 bg-white/[0.02]"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-pulse)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider">
                    Popular
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className="text-sm text-white/50">{p.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-white/50">$</span>
                  <span className="font-display text-5xl font-semibold">{p.price}</span>
                  <span className="text-sm text-white/50">/mo</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-white/70">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="text-[var(--color-glow)]">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 block rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${
                    p.highlight
                      ? "bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-pulse)] hover:opacity-90"
                      : "border border-white/15 hover:bg-white/5"
                  }`}
                >
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--color-violet)]/30 to-[var(--color-midnight)] p-10 text-center md:p-16">
          <h2 className="font-display text-3xl font-semibold md:text-5xl">
            Ready to feel the pulse?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Spin up your first server in under a minute. Cancel anytime — we'll
            even refund unused time.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[var(--color-void)] hover:bg-white/90 transition"
          >
            Get Started — $3/mo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-6 w-6 object-contain" />
            <span>© 2026 PulseCompute. Built by Sehaj.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Status</a>
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
