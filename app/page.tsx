"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Reveal from "@/components/reveal"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SiteHeader from "@/components/site-header"
import HeroCurves from "@/components/hero-curves"
import { ProblemSection, SolutionSection, ProcessSection } from "@/components/sections/dynamic-sections"
import { MotionCard, MotionContainer, MotionLi } from "@/components/motion-primitives"
import ScrollAnimator from "@/components/scroll-animator"
import Parallax from "@/components/parallax"
import { motion } from "framer-motion"

// Sections are split into simple components for clarity and reuse

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid opacity-40"></div>
        <div className="bg-spotlight"></div>
        <HeroCurves />
        <Parallax speed={-40} className="absolute inset-x-0 top-0 h-[60vh] -z-10">
          <div
            className="h-full w-full blur-3xl opacity-40"
            style={{
              background: "radial-gradient(600px 300px at 50% 30%, rgba(56,189,248,0.18), rgba(56,189,248,0) 60%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent)",
              mixBlendMode: "multiply",
            }}
          />
        </Parallax>
        {/* Optional: grain overlay. Add a tiling noise at /public/textures/noise.png if desired */}
        {/* <div className="noise"></div> */}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-8 py-20 md:py-28">
        <Reveal className="flex flex-col gap-4 text-center">
          <h1 className="text-balance text-4xl font-semibold md:text-6xl">
            Build AI Agents That Actually Work in Production
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            We deliver specialized, compact LLMs through reinforcement learning—outperforming frontier models at a
            fraction of the cost.
          </p>
          <div className="mt-2 flex items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="shadow-[0_0_0_0_rgba(0,0,0,0)] transition-shadow hover:shadow-[0_8px_24px_rgba(56,189,248,0.25)]"
            >
              <Link href="https://cal.com/sachdh/15min">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#proof">View Benchmarks</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Proof() {
  return (
    <section id="proof" className="relative">
      <div className="mx-auto max-w-6xl px-8 py-18 md:py-26">
        <Reveal>
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">
            Aryabhata 1.0: Our First Frontier-Beating Model
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Our 7B parameter Aryabhata model outperforms OpenAI&apos;s O4 mini and Google&apos;s Gemini Flash 2.5 on
            mathematics benchmarks—designed to serve millions of students at scale.
          </p>
        </Reveal>

        <Reveal className="mt-6">
          <div className="w-full flex justify-center">
            <blockquote className="twitter-tweet" data-theme="dark" data-width="500" data-dnt="true" data-align="center">
              <a href="https://twitter.com/sachdh/status/1947541485530046589?ref_src=twsrc%5Etfw">Loading tweet...</a>
            </blockquote>
          </div>
          <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild size="sm">
              <Link href="#">View Full Benchmarks</Link>
            </Button>
            
            <Button asChild size="sm" variant="secondary">
              <Link href="https://huggingface.co/PhysicsWallahAI/Aryabhata-1.0" target="_blank" rel="noopener noreferrer">
                Model Card ↗
              </Link>
            </Button>

            {/* Research Paper Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="secondary">Research Paper</Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] p-0 overflow-hidden border-border/60 bg-card/95 backdrop-blur-sm">
                <div className="rounded-xl border border-border/30 bg-card/80 m-4 overflow-hidden shadow-2xl">
                  <DialogHeader className="p-6 border-b border-border/30 bg-card/60">
                    <DialogTitle className="text-xl font-semibold text-foreground">
                      Research Paper - ArXiv
                    </DialogTitle>
                  </DialogHeader>
                  <div className="w-full h-[75vh] bg-background/50">
                    <iframe
                      src="https://arxiv.org/html/2508.08665v1"
                      className="w-full h-full border-0"
                      title="Aryabhata Research Paper"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="text-xs text-muted-foreground">As featured in</div>
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { name: "MoneyControl", url: "https://www.moneycontrol.com/technology/ipo-bound-physicswallah-unveils-aryabhata-1-0-ai-model-to-help-jee-aspirants-article-13309495.html" },
              { name: "Business Standard", url: "https://www.business-standard.com/companies/start-ups/physicswallah-launches-ai-model-aryabhata-1-0-125072201347_1.html" },
              { name: "Analytics India Magazine", url: "https://analyticsindiamag.com/ai-news-updates/physicswallah-launches-aryabhata-1-0-ai-model-to-help-students-with-jee-main-maths/" },
              { name: "Business Today", url: "https://www.businesstoday.in/technology/news/story/physicswallah-unveils-aryabhata-10-ai-model-built-for-jee-maths-students-485864-2025-07-23" }
            ].map((media) => (
              <a
                key={media.name}
                href={media.url}
                target="_blank"
                rel="noreferrer"
                className="grid h-16 place-items-center rounded-md border bg-card text-xs text-muted-foreground transition-colors hover:text-sky-400 hover:border-sky-400/30"
              >
                {media.name}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Problem() {
  return <ProblemSection />
}

function Solution() {
  return <SolutionSection />
}

function Process() {
  return <ProcessSection />
}

function UseCases() {
  const items = [
    {
      title: "Financial Services",
      points: [
        "Risk assessment agents that understand your regulatory environment",
        "Trading algorithms trained on your market dynamics",
      ],
    },
    {
      title: "Healthcare & Pharma",
      points: [
        "Clinical decision support trained on your protocols",
        "Drug discovery models optimized for your research areas",
      ],
    },
    {
      title: "Education & EdTech",
      points: [
        "Personalized tutoring agents that match your curriculum",
        "Assessment systems aligned with your pedagogy",
      ],
    },
    {
      title: "Manufacturing & Supply Chain",
      points: [
        "Quality control agents trained on your product specifications",
        "Demand forecasting tuned to your market patterns",
      ],
    },
  ]
  return (
    <section id="use-cases" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal>
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl mb-8">Where Domain-Specific Models Win</h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <MotionCard
              key={item.title}
              index={idx}
              className="rounded-xl border p-6 transition-shadow hover:shadow-[0_10px_30px_rgba(56,189,248,0.12)]"
            >
              <h3 className="font-semibold mb-3">{item.title}</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  )
}

function Founder() {
  return (
    <section id="founder" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-8">
        <Reveal className="grid items-start gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1 space-y-6">
            <div>
              <h2 className="text-pretty text-2xl font-semibold md:text-3xl mb-4">
                Led by a Decade-Long RL Expert Who&apos;s Built This Before
              </h2>
              <div className="text-sm text-muted-foreground md:text-base">
                <div className="font-medium text-foreground mb-2">Sachin Dharashivkar, CEO & Founder</div>
                <div className="flex gap-3 mb-4">
                  <a className="text-xs underline-offset-2 hover:underline" href="https://www.linkedin.com/company/athenaagent/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a className="text-xs underline-offset-2 hover:underline" href="https://x.com/AthenaAgentRL" target="_blank" rel="noreferrer">
                    X / Twitter
                  </a>
                </div>
                <p>
                  With over a decade of experience building RL agents and simulators at scale, Sachin brings deep
                  expertise from:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["JPMC", "Samsung Research", "Unity", "Huawei", "Autodesk", "UMass Amherst"].map((logo) => (
                <div
                  key={logo}
                  className="grid h-16 place-items-center rounded-md border bg-card text-xs text-muted-foreground"
                >
                  {logo}
                </div>
              ))}
            </div>

            <div>
              <div className="font-medium mb-3">Key Achievements</div>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground mb-6">
                <li>
                  At JPMorgan Chase: Built advanced simulators and RL agents for high-volume equity trading systems
                </li>
                <li>At Unity: Trained collaborative AI agents that mastered the complex multiplayer game Overcooked</li>
                <li>
                  Technical Leadership: Published research on Aryabhata model, delivered talks at Lossfunk on advanced
                  model training
                </li>
              </ul>
              <div className="flex gap-3">
                <Button asChild>
                  <Link href="#">Watch Technical Talks</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="#">Read Our Research</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative max-w-md mx-auto md:max-w-none">
              <div
                className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-xl border border-sky-400/50"
                aria-hidden="true"
              />
              <div className="relative rounded-xl border bg-card p-6">
                <div className="aspect-[4/3] w-full rounded-lg bg-muted overflow-hidden mb-4 ring-1 ring-border/40 shadow-lg">
                  <img 
                    src="https://pbs.twimg.com/profile_images/1660878487232876544/LjtlZ44B_400x400.jpg" 
                    alt="Photo of Sachin Dharashivkar, CEO & Founder" 
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  A decade of RL and simulation engineering across finance, gaming, and research.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Resources() {
  const resources = [
    { title: "Aryabhata Model Card - Technical Specifications", href: "https://huggingface.co/PhysicsWallahAI/Aryabhata-1.0" },
    { title: "ArXiv Paper - Research & Methodology", href: "https://arxiv.org/html/2508.08665v1" },
    { title: "Lossfunk Talk 1 - Advanced RL Training Techniques", href: "https://www.youtube.com/watch?v=ur6gi9S1ZJw" },
    { title: "Lossfunk Talk 2 - Building Domain-Specific Models", href: "https://www.youtube.com/watch?v=GqsDcV6kCOc" },
  ]
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-8 py-14 md:py-18">
        <Reveal>
          <div className="rounded-xl border">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <h3 className="text-base font-semibold">Go Deeper Into Our Work</h3>
              <span className="text-xs text-muted-foreground">Technical resources and research</span>
            </div>
            <ul className="divide-y">
              {resources.map((r, idx) => (
                <MotionLi key={r.href} index={idx} className="group">
                  <a
                    className="flex items-center justify-between px-5 py-4 text-sm transition-colors hover:text-sky-400 w-full"
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="link-underline">{r.title}</span>
                    <span className="text-xs text-muted-foreground transition-transform group-hover:translate-x-0.5">
                      Visit →
                    </span>
                  </a>
                </MotionLi>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TechnicalDeepDive() {
  const bullets = [
    "Architecture: Efficient transformer variants optimized for inference",
    "Training Pipeline: Custom RLHF with domain-specific reward models",
    "Evaluation: Comprehensive benchmarking against frontier models",
    "Integration: REST APIs, Python SDKs, and containerized deployments",
  ]
  return (
    <section id="technical" className="relative">
      <div className="mx-auto max-w-6xl px-8 py-18 md:py-26">
        <Reveal className="mb-8">
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">For the Technical Leaders: Our Approach</h2>
        </Reveal>
        <MotionContainer className="mt-4 rounded-xl border p-5">
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {bullets.map((b, i) => (
              <MotionLi key={b} index={i}>
                {b}
              </MotionLi>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <Button asChild>
              <Link href="#">Download Technical Whitepaper</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="#">View GitHub</Link>
            </Button>
          </div>
        </MotionContainer>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="cta" className="relative">
      {/* Reuse a calmer background: grid + spotlight */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid opacity-60"></div>
        <div className="bg-spotlight"></div>
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-8 py-18 text-center md:py-24">
        <MotionContainer>
          <Reveal className="rounded-2xl border bg-card/60 px-6 py-10 backdrop-blur">
            <h2 className="text-balance text-2xl font-semibold md:text-3xl">
              Ready to Build AI That Actually Works?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Stop wasting resources on unreliable agents. Let&apos;s discuss how custom RL training can solve your specific challenges.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg" className="transition-transform hover:-translate-y-0.5">
                <Link href="https://cal.com/sachdh/15min">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transition-transform hover:-translate-y-0.5">
                <Link href="mailto:hello@athenaagent.com">Get Detailed Cost Analysis</Link>
              </Button>
            </div>
          </Reveal>
        </MotionContainer>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    {
      title: "How is your approach different from prompt engineering?",
      content: "We move beyond prompting by using reinforcement learning to train models on your specific domain and tasks, creating robust agents that learn from environment feedback rather than just text patterns.",
    },
    {
      title: "What kind of performance improvements can I expect?",
      content: "Our domain-specific models typically outperform frontier models on specialized tasks while costing 90% less to run at scale. Aryabhata 1.0, for example, beats GPT-4 mini on mathematics benchmarks.",
    },
    {
      title: "How long does the training process take?",
      content: "Our typical timeline is 3-6 months from kickoff to production, including dataset curation, training, evaluation, and deployment with ongoing support.",
    },
    {
      title: "Can you deploy models on-premises?",
      content: "Yes, we support on-premises and private cloud deployments to ensure data privacy and compliance with your security requirements.",
    },
    {
      title: "What industries do you serve?",
      content: "We work across financial services, healthcare, education, manufacturing, and any domain where specialized AI performance is critical for business success.",
    },
    {
      title: "How do you ensure model reliability?",
      content: "We use comprehensive evaluation frameworks, edge case testing, and continuous monitoring to ensure consistent performance in production environments.",
    },
  ]

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-8 py-14 md:py-18">
        <Reveal>
          <h2 className="text-center text-2xl font-semibold mb-8 md:text-3xl">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.title} value={faq.title}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className={cn("relative bg-background text-foreground font-sans pt-16")}>
        <ScrollAnimator ids={["problem", "solution", "process", "use-cases", "resources", "technical", "cta"]} />
        <Hero />
        <Proof />
        <Problem />
        <Solution />
        <Process />
        <UseCases />
        <Founder />
        <TechnicalDeepDive />
        <Resources />
        <FAQ />
        <CTA />
        <footer className="mx-auto max-w-6xl px-8 py-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AthenaAgent. All rights reserved.
        </footer>
      </main>
    </>
  )
}
