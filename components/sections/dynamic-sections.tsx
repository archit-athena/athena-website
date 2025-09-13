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
  ]

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      } 
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.2 
      } 
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      } 
    },
  }

  const listVariants = {
    hidden: {},
    show: { 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.6
      } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  }

  return (
    <section id="problem" className="relative">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-muted/20 blur-3xl opacity-30"
      />

      <div className="mx-auto max-w-6xl px-8 py-24 md:py-32">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl font-semibold md:text-5xl text-foreground"
          >
            Your AI Agents Are Failing Because Prompting Isn't Enough
          </motion.h2>
          <motion.div 
            variants={subtitleVariants}
            className="mt-6 space-y-4 max-w-4xl"
          >
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              You've tried prompt engineering. You've tested every frontier model. Yet your agents 
              still hallucinate, fail edge cases, and burn through API costs.
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              The truth? <span className="bg-sky-100 px-2 py-0.5 rounded font-medium text-sky-800 shadow-sm shadow-sky-400/20" style={{boxShadow: "0 0 15px rgba(56, 189, 248, 0.15)"}}>MIT research shows 95% of GenAI projects fail to reach production</span><sup className="ml-1"><a href="https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/" target="_blank" rel="noopener noreferrer" className="text-xs text-sky-600 hover:text-sky-800 transition-colors no-underline hover:drop-shadow-lg">[1]</a></sup>. General-purpose models trained on internet text weren't designed for your 
              specific domain. No amount of prompting can fix a fundamental training mismatch.
            </p>
          </motion.div>
        </motion.div>

        {/* Symmetric Problems Grid */}
        <motion.div className="max-w-6xl">
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={listVariants}
          >
            {points.map((point, i) => (
              <motion.div
                key={point.k}
                variants={itemVariants}
                whileHover={{ 
                  y: -2,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                className="group relative flex h-full min-h-[120px] overflow-hidden rounded-lg border border-border/50 bg-card/70 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/30 hover:shadow-md"
              >
                {/* Left side - Number indicator */}
                <div className="flex w-16 flex-shrink-0 items-center justify-center border-r border-border/30 bg-card/60">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/8 ring-1 ring-sky-400/20" style={{boxShadow: "0 0 6px rgba(56, 189, 248, 0.1)"}}>
                    <span className="text-sky-600 font-semibold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex flex-1 flex-col justify-center p-4">
                  <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-sky-600 transition-colors duration-300">
                    {point.k}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300 md:text-sm">
                    {point.v}
                  </p>
                </div>
                
                {/* Subtle hover effect */}
                <div className="absolute inset-0 opacity-0 bg-gradient-to-r from-sky-400/3 to-transparent transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.ul 
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden"
          >
          </motion.ul>

          {/* Bottom accent */}
          <motion.div
            className="mt-8 pt-6 border-t border-border/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              These challenges compound at scale, making traditional approaches unsuitable for production AI systems.
            </p>
          </motion.div>
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
      t: "Dataset Analysis & Curation", 
      d: "We analyze your data landscape and curate high-quality training sets optimized for your domain.",
      detail: "Comprehensive data assessment and preparation tailored to your specific use case requirements and business objectives."
    },
    { 
      t: "Compute Cost Estimation", 
      d: "Transparent pricing with detailed compute projections—no surprise bills.",
      detail: "Clear, upfront cost breakdown with detailed resource planning so you know exactly what to expect throughout the training process."
    },
    { 
      t: "Evaluation Framework Design", 
      d: "We help create comprehensive eval sets that measure what actually matters for your use case.",
      detail: "Custom evaluation metrics and test suites designed to validate performance on your specific business requirements and success criteria."
    },
    { 
      t: "RL-Based Model Training", 
      d: "Our specialized training pipeline delivers compact models that outperform giants.",
      detail: "Advanced reinforcement learning techniques that create efficient, domain-specific models with superior performance at a fraction of the size."
    },
    { 
      t: "Deployment & Integration Support", 
      d: "Seamless integration with your existing infrastructure and workflows.",
      detail: "Full deployment support with comprehensive integration assistance to ensure smooth adoption within your current technology stack."
    },
    { 
      t: "Performance Monitoring & Optimization", 
      d: "Continuous monitoring and iterative improvements post-deployment.",
      detail: "Ongoing performance tracking, optimization, and model updates to ensure sustained excellence and adaptation to evolving requirements."
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
        <div className="relative mt-12 md:mt-16">
          <motion.span
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-sky-400/60 via-sky-400/30 to-transparent md:left-7"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              transformOrigin: "top",
              boxShadow: "0 0 6px rgba(56, 189, 248, 0.2)"
            }}
          />
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerStagger}
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                variants={fadeUp}
                className="group relative"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Step number indicator */}
                <div className="absolute left-0 flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
                  <motion.div
                    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/50 bg-card backdrop-blur-sm md:h-12 md:w-12"
                    whileHover={{ 
                      borderColor: "rgba(56, 189, 248, 0.8)",
                      boxShadow: "0 0 15px rgba(56, 189, 248, 0.25)"
                    }}
                    style={{
                      boxShadow: "0 0 8px rgba(56, 189, 248, 0.15)"
                    }}
                  >
                    <span className="text-xs font-semibold text-sky-500 md:text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                </div>

                {/* Step content card */}
                <motion.div
                  className="ml-16 rounded-lg border border-border/50 bg-card/70 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-sky-400/40 group-hover:bg-card/85 md:ml-18 md:p-5"
                  whileHover={{
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08), 0 0 15px rgba(56, 189, 248, 0.1)"
                  }}
                >
                  {/* Header section for executive scannability */}
                  <div className="mb-4 border-b border-border/30 pb-4">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-semibold text-foreground md:text-lg">
                        {s.t}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="hidden sm:inline">Step</span>
                        <span className="rounded-full bg-sky-400/10 px-2 py-0.5 font-medium text-sky-600 text-xs">
                          {i + 1} of {steps.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content hierarchy for busy executives */}
                  <div className="space-y-3">
                    {/* Key summary - scannable */}
                    <p className="text-sm font-medium leading-relaxed text-foreground/90 md:text-base">
                      {s.d}
                    </p>
                    
                    {/* Detailed explanation - expandable feel */}
                    <p className="text-xs leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-muted-foreground/90 md:text-sm">
                      {s.detail}
                    </p>
                  </div>

                  {/* Progress indicator for visual flow */}
                  <div className="mt-4 flex items-center gap-1.5">
                    {steps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                          idx <= i 
                            ? 'bg-sky-400/60' 
                            : 'bg-border/30'
                        }`}
                        style={idx <= i ? {
                          boxShadow: "0 0 4px rgba(56, 189, 248, 0.3)"
                        } : {}}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Timeline */}
          <motion.div
            className="mt-8 pl-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground">
              Typical Timeline: 3-6 months from kickoff to production
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
