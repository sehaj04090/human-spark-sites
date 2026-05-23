import { createFileRoute } from "@tanstack/react-router";
import deskImg from "@/assets/desk.jpg";
import workAtelier from "@/assets/work-atelier.jpg";
import workEcho from "@/assets/work-echo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pulse Compute — Websites made by hands, not prompts" },
      {
        name: "description",
        content:
          "Pulse Compute is Sehaj's boutique web design studio. Hand-crafted, editorial websites that reject the sterile uniformity of AI-generated design.",
      },
      { property: "og:title", content: "Pulse Compute — Websites made by hands, not prompts" },
      {
        property: "og:description",
        content:
          "A boutique studio building digital spaces that breathe, glitch, and feel human.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-accent/10 selection:text-accent">
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <nav className="flex justify-between items-center px-8 py-10 max-w-7xl mx-auto">
        <div className="text-xl font-medium tracking-tight">Pulse Compute</div>
        <div className="flex gap-12 text-sm font-medium opacity-80">
          <a href="#work" className="hover:opacity-100 transition-opacity underline decoration-accent/30 underline-offset-4">
            Work
          </a>
          <a href="#manifesto" className="hover:opacity-100 transition-opacity">
            Manifesto
          </a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">
            Contact
          </a>
        </div>
      </nav>

      <header className="px-8 pt-20 pb-32 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-serif text-7xl md:text-9xl leading-[0.85] tracking-tight mb-12">
            Websites made <span className="italic text-accent">by hands</span>, not prompts.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-2xl opacity-90">
            Sehaj's Pulse Compute is a boutique studio rejecting the sterile uniformity of AI design. We build digital spaces that breathe, glitch, and feel human.
          </p>
        </div>
      </header>

      <section className="px-8 mb-32">
        <div className="max-w-7xl mx-auto">
          <img
            src={deskImg}
            alt="A designer's desk with charcoal sketches, vintage Leica, and open art books"
            width={1440}
            height={704}
            className="w-full aspect-[21/9] object-cover outline-1 -outline-offset-1 outline-ink/5 rounded-sm"
          />
          <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/40">
            The Artifact No. 01 — Studio, somewhere quiet.
          </p>
        </div>
      </section>

      <section id="manifesto" className="px-8 py-32 border-t border-ink/5 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h2 className="font-serif text-5xl leading-tight">The Uncanny Valley ends here.</h2>
          </div>
          <div className="md:col-span-7 space-y-8">
            <p className="text-xl leading-relaxed opacity-80">
              The modern web is suffering from a crisis of sameness. Every grid is perfect, every gradient is generated, and every word is predictable. We find beauty in the intentional imperfection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div>
                <span className="block text-xs uppercase tracking-widest text-accent mb-4 font-bold">
                  Tactile UI
                </span>
                <p className="text-sm leading-relaxed">
                  Interfaces inspired by print layouts, physical texture, and rhythmic spacing that guides the eye naturally.
                </p>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-accent mb-4 font-bold">
                  Coded by Hand
                </span>
                <p className="text-sm leading-relaxed">
                  No block builders. Every line of CSS is authored to serve the specific narrative of your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-8 py-32 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h3 className="font-serif text-5xl md:text-6xl">Recent Work</h3>
          <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-40">
            Selected Archives 2024
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="group cursor-pointer">
            <img
              src={workAtelier}
              alt="L'Atelier — minimalist brutalist architecture site"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-ink/5 rounded-sm mb-6 transition-transform duration-700 group-hover:scale-[0.98]"
            />
            <h4 className="text-2xl font-serif mb-2">L'Atelier</h4>
            <p className="text-sm opacity-60 italic">Creative Direction & Development</p>
          </div>

          <div className="group cursor-pointer md:pt-24">
            <img
              src={workEcho}
              alt="Echo Systems — typography-focused magazine layout"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-ink/5 rounded-sm mb-6 transition-transform duration-700 group-hover:scale-[0.98]"
            />
            <h4 className="text-2xl font-serif mb-2">Echo Systems</h4>
            <p className="text-sm opacity-60 italic">Visual Identity & Product Design</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="px-8 py-20 border-t border-ink/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-md">
            <h5 className="font-serif text-4xl mb-6">Ready to pulse?</h5>
            <p className="opacity-60 mb-8">
              We take on four projects per year to ensure every pixel is placed with intent.
            </p>
            <a
              href="mailto:hello@pulsecompute.com"
              className="inline-block px-8 py-4 bg-ink text-paper rounded-full text-sm font-medium hover:bg-accent transition-colors"
            >
              hello@pulsecompute.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-20 text-sm">
            <div className="space-y-4">
              <p className="font-bold opacity-30 uppercase tracking-tighter">Social</p>
              <a href="#" className="block hover:text-accent">
                Instagram
              </a>
              <a href="#" className="block hover:text-accent">
                Read.cv
              </a>
            </div>
            <div className="space-y-4">
              <p className="font-bold opacity-30 uppercase tracking-tighter">Studio</p>
              <p>Remote / Worldwide</p>
              <p>By Sehaj, est. 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
