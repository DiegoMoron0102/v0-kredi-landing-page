"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Clock, Wallet, Activity, UserCheck } from "lucide-react"
import { VideoBackground } from "@/components/video-background"
import { AnimatedText, TypewriterText, FadeInSection } from "@/components/animated-text"

export default function DefiLendingPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}

    if (!name.trim()) newErrors.name = "Name is required"
    if (!email) newErrors.email = "Email is required"
    else if (!validateEmail(email)) newErrors.email = "Invalid email format"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Registration submitted:", { name, email, timestamp: new Date().toISOString() })
      alert("Welcome! Your wallet will be created and you can start building your reputation.")
      setName("")
      setEmail("")
    }
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full header-glass z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full overflow-hidden ring-2 ring-primary/30">
              <Image 
                src="/logo-kredi.png" 
                alt="Kredi Logo" 
                width={50} 
                height={50}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold trust-gradient neon-text">Kredi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm hover:text-primary transition-colors hover:neon-text"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("requirements")}
              className="text-sm hover:text-primary transition-colors hover:neon-text"
            >
              Requirements
            </button>
            <button
              onClick={() => scrollToSection("register")}
              className="text-sm hover:text-primary transition-colors hover:neon-text"
            >
              Get Started
            </button>
          </nav>
          <Button
            onClick={() => scrollToSection("register")}
            className="btn-primary enhanced-glow"
          >
            Register Now
          </Button>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <VideoBackground 
        src="/hero-video.mp4" 
        className="pt-20 pb-16 px-4 min-h-screen flex items-center"
        overlay="gradient"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <AnimatedText direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-white neon-text">
                  Build Your Credit, <span className="trust-gradient">Secure Your Future</span>
                </h1>
              </AnimatedText>
              
              <AnimatedText direction="up" delay={0.5}>
                <p className="text-xl md:text-2xl text-gray-200 text-pretty max-w-3xl mx-auto">
                  Decentralized, transparent, and community-driven loans. Start small, grow your reputation, and access
                  better rates through peer-to-peer lending.
                </p>
              </AnimatedText>
            </div>

            <AnimatedText direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("register")}
                    size="lg"
                    className="btn-primary enhanced-glow text-lg px-8 py-6"
                  >
                    Register Now
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => scrollToSection("benefits")}
                    variant="outline"
                    size="lg"
                    className="glass-card border-white/30 hover:bg-white/10 text-white text-lg px-8 py-6 enhanced-glow"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </AnimatedText>

            <AnimatedText direction="fade" delay={1.1}>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                <motion.div 
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Self-custodied wallets</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>On-chain reputation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <CheckCircle className="h-4 w-4 text-secondary" />
                  <span>Community-powered</span>
                </motion.div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </VideoBackground>

      <section id="benefits" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="text-center mb-12">
            <TypewriterText 
              text="Why Choose Kredi?" 
              className="text-3xl md:text-4xl font-bold mb-4"
              delay={0.2}
              speed={0.05}
            />
            <AnimatedText direction="up" delay={0.8}>
              <p className="text-xl text-muted-foreground">
                Experience the future of lending with blockchain-powered transparency
              </p>
            </AnimatedText>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure & Transparent",
                description: "On-chain reputation protects users and ensures fairness in every transaction",
                color: "primary",
                delay: 0.1
              },
              {
                icon: Activity,
                title: "Accessible",
                description: "Start with small loans and grow as you build your lending history",
                color: "secondary",
                delay: 0.2
              },
              {
                icon: Clock,
                title: "Fast & Simple",
                description: "Register, verify, and request your first loan in minutes",
                color: "primary",
                delay: 0.3
              },
              {
                icon: Users,
                title: "Community-Powered",
                description: "Your activity and peers strengthen your creditworthiness",
                color: "secondary",
                delay: 0.4
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: benefit.delay,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="glass-card card-hover text-center h-full">
                  <CardContent className="p-6">
                    <motion.div 
                      className={`bg-${benefit.color}/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ring-1 ring-${benefit.color}/30`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className={`h-8 w-8 text-${benefit.color}`} />
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <FadeInSection className="text-center mb-12">
            <AnimatedText direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Requirements for Your First Loan</h2>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <p className="text-xl text-muted-foreground">Simple steps to get started with decentralized lending</p>
            </AnimatedText>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection delay={0.2}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="glass-card card-hover h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                      >
                        <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 ring-1 ring-primary/30">
                          <Activity className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-white">Minimum 3 months of activity</h3>
                          <p className="text-sm text-gray-400">
                            Build your on-chain reputation through consistent platform engagement
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        <div className="bg-secondary/20 p-2 rounded-full flex-shrink-0 ring-1 ring-secondary/30">
                          <Users className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-white">Diversified transactions</h3>
                          <p className="text-sm text-gray-400">
                            Interact with multiple peers to demonstrate trustworthiness
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Card className="glass-card card-hover h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <motion.div 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                      >
                        <div className="bg-primary/20 p-2 rounded-full flex-shrink-0 ring-1 ring-primary/30">
                          <Wallet className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-white">Small initial amounts</h3>
                          <p className="text-sm text-gray-400">
                            Start with micro-loans to build trust and unlock larger amounts
                          </p>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.0 }}
                      >
                        <div className="bg-secondary/20 p-2 rounded-full flex-shrink-0 ring-1 ring-secondary/30">
                          <UserCheck className="h-4 w-4 text-secondary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-white">Identity verification</h3>
                          <p className="text-sm text-gray-400">Complete KYC and liveness check for security</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section id="register" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <FadeInSection className="text-center mb-12">
            <AnimatedText direction="up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Your Reputation</h2>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <p className="text-xl text-muted-foreground">
                Join our decentralized lending community and take control of your financial future
              </p>
            </AnimatedText>
          </FadeInSection>

          <FadeInSection delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="glass-card card-hover">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                    >
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 ${errors.name ? "border-destructive" : ""}`}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <motion.p 
                          id="name-error" 
                          className="text-sm text-destructive mt-1" 
                          aria-live="polite"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                    >
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`bg-slate-800/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 ${errors.email ? "border-destructive" : ""}`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <motion.p 
                          id="email-error" 
                          className="text-sm text-destructive mt-1" 
                          aria-live="polite"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      className="bg-slate-800/30 p-4 rounded-lg border border-slate-600/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-sm mb-1 text-white">Your information is secure</h3>
                          <p className="text-xs text-gray-400">
                            Your wallet is self-custodied and your data is encrypted. We never have access to your private
                            keys.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full btn-primary enhanced-glow text-lg py-6"
                      >
                        Start Building Your Reputation
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      <footer className="py-12 px-4 bg-slate-900/50 border-t border-slate-700">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded-full overflow-hidden ring-2 ring-primary/30">
                  <Image 
                    src="/logo-kredi.png" 
                    alt="Kredi Logo" 
                    width={24} 
                    height={24}
                    className="object-cover"
                  />
                </div>
                <span className="font-bold trust-gradient">Kredi</span>
              </div>
              <p className="text-sm text-gray-400">
                Decentralized micro-lending powered by community trust and blockchain transparency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    X (Twitter)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Kredi. All rights reserved. Built on blockchain for transparency and trust.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
