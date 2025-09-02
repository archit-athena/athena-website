"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const containerStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const cardInLeft = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}
const cardInRight = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function ProblemSection() {
  const points = [
    { k: "Prompt Sensitivity", v: "Minor wording changes and context shifts cause large output variance." },
    { k: "Brittle Agent Chains", v: "Multi-step tool use fails silently; errors cascade without guardrails." },
    { k: "Non‑Determinism", v: "Same inputs yield different outputs—hard to test and certify." },
    { k: "Hidden Costs at Scale", v: "Retries, orchestration and evals inflate latency and spend." },
    { k: "Privacy & Compliance", v: "Third‑party inference and data exposure increase risk." },
  ]
  return (
    <section id="problem" className="relative">
      {/* Subtle animated accent behind header */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
        animate={{ y: [0, -10, 0], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="mx-auto max-w-6xl px-8 py-20 md:py-32">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">
            The Problem: Prompting and Agentic AI Is Brittle
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Prompt engineering and generic agent frameworks struggle in production—fragile chains, high variance, and
            unpredictable costs make reliability elusive.
          </p>
        </motion.div>

        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerStagger}
        >
          {points.map((p, i) => (
            <motion.article
              key={p.k}
              variants={i % 2 === 0 ? cardInLeft : cardInRight}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-xl border p-5 bg-card/60 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                <div>
                  <div className="font-medium">{p.k}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.v}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function SolutionSection() {
  const features = [
    {
      title: "Environment‑Grounded Training",
      description: "Models learn from tasks, tools, and feedback in situ—not just text patterns but real-world interactions and domain-specific workflows."
    },
    {
      title: "Reward Modeling", 
      description: "Align behavior to domain‑specific KPIs, not generic chat objectives—optimizing for your success metrics, not conversation quality."
    },
    {
      title: "Simulator‑in‑the‑Loop",
      description: "Scale safe exploration before production rollout—test edge cases and failure modes in controlled environments first."
    },
    {
      title: "Compact, Specialized Models",
      description: "Faster, cheaper inference with higher task accuracy—purpose-built efficiency that outperforms general models on your use cases."
    },
    {
      title: "On‑Prem/Private Deployments",
      description: "Preserve privacy and compliance—keep sensitive data within your infrastructure while maintaining full model performance."
    }
  ]
  return (
    <section id="solution" className="relative">
      {/* Gentle flowing gradient underline accent */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        viewport={{ once: true }}
        style={{
          background: "radial-gradient(60% 60% at 50% 50%, rgba(56,189,248,0.10), rgba(56,189,248,0) 70%)",
          filter: "blur(24px)",
        }}
      />
      <div className="mx-auto max-w-6xl px-8 py-20 md:py-32">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">
            Our Solution: Train to Learn from the Environment
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We move beyond prompting. We train agents with reinforcement learning and domain signals so they become
            robust, testable systems tuned to your environment.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerStagger}
        >
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              variants={i % 2 === 0 ? cardInLeft : cardInRight}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="rounded-xl border p-6 bg-card/60 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const steps = [
    { 
      t: "Discovery", 
      d: "Define business KPIs, constraints, and target tasks; map tool/APIs and data sources.",
      detail: "We start by understanding your specific use case, success metrics, and existing infrastructure to design the optimal training approach."
    },
    { 
      t: "Data & Simulation", 
      d: "Construct task datasets and simulators; design reward functions and evals.",
      detail: "Build comprehensive training environments that mirror your production scenarios, enabling safe and effective learning."
    },
    { 
      t: "Training", 
      d: "Fine‑tune and RL pipelines with domain feedback; iterate with human‑in‑the‑loop.",
      detail: "Deploy advanced reinforcement learning techniques with continuous human guidance to achieve optimal performance on your specific tasks."
    },
    { 
      t: "Evaluation", 
      d: "Benchmark against frontier models; harden for edge‑cases and reliability.",
      detail: "Rigorous testing against industry standards and stress-testing for production robustness and consistent performance."
    },
    { 
      t: "Integration", 
      d: "Serve via APIs/SDKs; deploy on‑prem or VPC; add observability and guardrails.",
      detail: "Seamless deployment with comprehensive monitoring, safety measures, and integration support for your existing systems."
    },
    { 
      t: "Support", 
      d: "Ongoing monitoring, cost tuning, and model updates aligned to KPIs.",
      detail: "Continuous optimization and support to ensure your models maintain peak performance as your needs evolve."
    }
  ]

  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-6xl px-8 py-20 md:py-32">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <h2 className="text-pretty text-2xl font-semibold md:text-4xl">Our Process</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A clear path from KPIs to reliable production agents.
          </p>
        </motion.div>

        {/* Timeline with animated progress line */}
        <div className="relative mt-8 md:mt-10">
          <motion.span
            aria-hidden="true"
            className="absolute left-3 top-0 h-full w-px bg-border md:left-4"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />
          <motion.ul
            className="space-y-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerStagger}
          >
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                variants={fadeUp}
                className="relative rounded-xl border bg-card/60 p-6 pl-10 backdrop-blur-sm md:pl-14"
                whileHover={{ y: -1, boxShadow: "0 12px 32px rgba(56, 189, 248, 0.06)" }}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-1.5 top-7 h-2 w-2 -translate-x-1/2 rounded-full bg-sky-400 md:left-2.5"
                />
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{s.t}</h3>
                  <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">Step {i + 1}</div>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.detail}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
