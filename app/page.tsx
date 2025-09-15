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
import { ThemeToggle } from "@/components/theme-toggle"
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
      <VideoBackground
        src="/home.mp4"
        overlay="light"
        className="absolute inset-0 z-0"
      />
      
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
            <span className="text-xl font-bold trust-gradient modern-text-shadow">Kredi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-base hover:text-blue-600 transition-colors font-medium text-stone-700 dark:text-stone-300"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("requirements")}
              className="text-base hover:text-blue-600 transition-colors font-medium text-stone-700 dark:text-stone-300"
            >
              Requirements
            </button>
            <button
              onClick={() => scrollToSection("register")}
              className="text-base hover:text-blue-600 transition-colors font-medium text-stone-700 dark:text-stone-300"
            >
              Get Started
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection("register")}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Register Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background - Centered */}
      <VideoBackground 
        src="/home.mp4" 
        className="pt-20 pb-16 px-4 min-h-screen flex items-center justify-center"
        overlay="light"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <AnimatedText direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-stone-800 dark:text-stone-100 modern-text-shadow">
                  Build Your Credit, <span className="trust-gradient">Secure Your Future</span>
                </h1>
              </AnimatedText>
              
              <AnimatedText direction="up" delay={0.5}>
                <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-200 text-pretty max-w-3xl mx-auto font-medium modern-text-shadow">
                  Kredi provides transparent, community-backed loans. Start small, grow your reputation, and access
                  better rates through Kredi's lending platform.
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
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started Now
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
                    className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 backdrop-blur-sm bg-stone-50/80 dark:bg-gray-800/80 dark:text-blue-400 text-lg px-8 py-6 font-semibold rounded-xl transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </AnimatedText>

            <AnimatedText direction="fade" delay={1.1}>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-700 dark:text-stone-300">
                <motion.div 
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Self-custodied wallets</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>On-chain reputation</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Community-powered</span>
                </motion.div>
              </div>
            </AnimatedText>
          </div>
        </div>
      </VideoBackground>

      <section id="benefits" className="py-16 px-4 benefits-section bg-transparent dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="text-center mb-12">
            <TypewriterText 
              text="Why Choose Kredi?" 
              className="text-4xl md:text-5xl font-bold mb-4 text-stone-800 dark:text-stone-100"
              delay={0.2}
              speed={0.05}
            />
            <AnimatedText direction="up" delay={0.8}>
              <p className="text-2xl text-stone-600 dark:text-stone-300">
                Experience the future of lending with blockchain-powered transparency
              </p>
            </AnimatedText>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Secure & Transparent",
                description: "Kredi's on-chain system protects users and ensures fairness in every transaction",
                color: "blue",
                delay: 0.1
              },
              {
                icon: Activity,
                title: "Accessible",
                description: "Start with small loans from Kredi and grow as you build your lending history",
                color: "cyan",
                delay: 0.2
              },
              {
                icon: Clock,
                title: "Fast & Simple",
                description: "Register, verify, and request your Kredi loan in minutes",
                color: "emerald",
                delay: 0.3
              },
              {
                icon: Users,
                title: "Community-Powered",
                description: "Community backing strengthens Kredi's lending decisions and your creditworthiness",
                color: "indigo",
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
                      className={`bg-${benefit.color}-100 dark:bg-${benefit.color}-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ring-2 ring-${benefit.color}-200 dark:ring-${benefit.color}-700`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className={`h-8 w-8 text-${benefit.color}-600 dark:text-${benefit.color}-400`} />
                    </motion.div>
                    <h3 className="font-semibold mb-2 text-lg text-stone-800 dark:text-stone-100">{benefit.title}</h3>
                    <p className="text-base text-stone-600 dark:text-stone-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <motion.section 
        className="py-16 px-4 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900/20 dark:to-stone-800/20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Video de fondo directo para debugging */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 dark:opacity-30"
            style={{ filter: "brightness(0.8) contrast(1.1)" }}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            onError={(e) => console.error("Video error:", e)}
          >
            <source src="/upsis.mp4" type="video/mp4" />
            <source src="/home.mp4" type="video/mp4" />
            {/* Fallback visible para debugging */}
            Tu navegador no soporta el elemento video.
          </video>
          {/* Fallback background si el video no carga */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 dark:from-blue-400/30 dark:via-purple-400/20 dark:to-pink-400/30"></div>
        </div>
        {/* Overlay adicional para mejor legibilidad con efecto glassmorphism */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50/30 via-stone-100/10 to-stone-200/20 dark:from-stone-900/30 dark:via-stone-800/10 dark:to-stone-700/20 backdrop-blur-[0.5px] z-5"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeInSection className="text-center mb-16">
            <AnimatedText direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800 dark:text-stone-100">Our Value Proposition</h2>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <p className="text-2xl text-stone-600 dark:text-stone-300">
                Six key benefits that make Kredi the future of lending
              </p>
            </AnimatedText>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Accessible Micro-Loans",
                description: "Start small, grow with repayment history.",
                icon: "💰",
                delay: 0.1
              },
              {
                title: "On-Chain Credit Score",
                description: "Build transparent and portable reputation.",
                icon: "📊",
                delay: 0.2
              },
              {
                title: "Lower Interest Rates",
                description: "Fair alternatives to abusive informal lending (fixed fees).",
                icon: "📉",
                delay: 0.3
              },
              {
                title: "Financial Inclusion",
                description: "Unlock access to savings, credit, and investment tools.",
                icon: "🏦",
                delay: 0.4
              },
              {
                title: "Blockchain Gateway",
                description: "First step for excluded users into the digital economy.",
                icon: "🔗",
                delay: 0.5
              },
              {
                title: "Trust & Transparency",
                description: "Clear terms, no hidden fees, community-powered credibility.",
                icon: "🛡️",
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: item.delay,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="glass-card card-hover text-center h-full bg-stone-100/80 dark:bg-stone-900/30 border-stone-200 dark:border-stone-700">
                  <CardContent className="p-6">
                    <motion.div 
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="font-bold mb-3 text-xl text-stone-800 dark:text-stone-100">{item.title}</h3>
                    <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <FadeInSection delay={0.8}>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card bg-gradient-to-r from-stone-200/50 to-stone-300/50 dark:from-stone-800/30 dark:to-stone-900/30 border-stone-300 dark:border-stone-600 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-3xl mb-4"
                  >
                    🎯
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 trust-gradient">Building Financial Futures</h3>
                  <p className="text-lg text-stone-700 dark:text-stone-200">
                    Kredi transforms how people access credit by combining blockchain transparency 
                    with community trust, creating opportunities for financial growth and inclusion.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>
        </div>
      </motion.section>

      <section id="requirements" className="py-20 px-4 requirements-section bg-transparent dark:bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="text-center mb-16">
            <AnimatedText direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-stone-800 dark:text-stone-100">Requirements for Your First Loan</h2>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <p className="text-2xl text-stone-600 dark:text-stone-300 max-w-2xl mx-auto">
                Simple and transparent steps to get started with Kredi lending - build your reputation step by step
              </p>
            </AnimatedText>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FadeInSection delay={0.2}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="h-full">
                <Card className="glass-card card-hover text-center h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ring-4 ring-blue-200 dark:ring-blue-700"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Activity className="h-10 w-10 text-blue-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-stone-800 dark:text-stone-100 min-h-[3rem] flex items-center">3 Months Activity</h3>
                    </div>
                    <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed flex-1 flex items-center">
                      Build your reputation with Kredi through consistent platform engagement and transactions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="h-full">
                <Card className="glass-card card-hover text-center h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="bg-cyan-100 dark:bg-cyan-900/30 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ring-4 ring-cyan-200 dark:ring-cyan-700"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Users className="h-10 w-10 text-cyan-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-stone-800 dark:text-stone-100 min-h-[3rem] flex items-center">Diversified Transactions</h3>
                    </div>
                    <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed flex-1 flex items-center">
                      Multiple platform interactions help Kredi evaluate your creditworthiness and reliability
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="h-full">
                <Card className="glass-card card-hover text-center h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ring-4 ring-emerald-200 dark:ring-emerald-700"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Wallet className="h-10 w-10 text-emerald-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-stone-800 dark:text-stone-100 min-h-[3rem] flex items-center">Start Small</h3>
                    </div>
                    <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed flex-1 flex items-center">
                      Begin with micro-loans from Kredi to build trust and progressively unlock larger amounts
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} className="h-full">
                <Card className="glass-card card-hover text-center h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="bg-indigo-100 dark:bg-indigo-900/30 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center ring-4 ring-indigo-200 dark:ring-indigo-700"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <UserCheck className="h-10 w-10 text-indigo-600" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-stone-800 dark:text-stone-100 min-h-[3rem] flex items-center">Identity Verification</h3>
                    </div>
                    <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed flex-1 flex items-center">
                      Complete KYC and liveness verification for security and regulatory compliance
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeInSection>
          </div>

          <FadeInSection delay={1.0}>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.02 }}
            >
              <Card className="glass-card bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700 max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-4xl mb-6"
                  >
                    🚀
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 trust-gradient">Ready to Get Started?</h3>
                  <p className="text-lg text-stone-700 dark:text-stone-200 mb-6 max-w-2xl mx-auto">
                    Once you meet these requirements, you'll be ready to access Kredi's lending platform 
                    and start building your financial future with transparent, blockchain-powered loans.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => scrollToSection("register")}
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Start Your Journey
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      <section id="register" className="py-16 px-4 register-section bg-transparent dark:bg-gray-900/50">
        <div className="container mx-auto max-w-2xl">
          <FadeInSection className="text-center mb-12">
            <AnimatedText direction="up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800 dark:text-stone-100">Start Building Your Reputation</h2>
            </AnimatedText>
            <AnimatedText direction="up" delay={0.3}>
              <p className="text-2xl text-stone-600 dark:text-stone-300">
                Join Kredi's lending community and take control of your financial future
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
                        className={`modern-input border-stone-300 dark:border-gray-600 text-stone-800 dark:text-stone-100 placeholder:text-stone-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 ${errors.name ? "border-red-500" : ""}`}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <motion.p 
                          id="name-error" 
                          className="text-base text-red-600 mt-1" 
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
                        className={`modern-input border-stone-300 dark:border-gray-600 text-stone-800 dark:text-stone-100 placeholder:text-stone-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 ${errors.email ? "border-red-500" : ""}`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <motion.p 
                          id="email-error" 
                          className="text-base text-destructive mt-1" 
                          aria-live="polite"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div 
                      className="bg-stone-50 dark:bg-gray-800 p-4 rounded-lg border border-stone-200 dark:border-gray-600"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                    >
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold text-base mb-1 text-gray-800 dark:text-gray-100">Your information is secure</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Your wallet is self-custodied and your data is encrypted. We never have access to your
                            private keys.
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
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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
              <p className="text-base text-gray-400">
                Kredi's micro-lending powered by community trust and blockchain transparency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg text-white">Legal</h3>
              <ul className="space-y-2 text-base text-gray-400">
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
              <h3 className="font-semibold mb-4 text-lg text-white">Community</h3>
              <ul className="space-y-2 text-base text-gray-400">
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
              <h3 className="font-semibold mb-4 text-lg text-white">Support</h3>
              <ul className="space-y-2 text-base text-gray-400">
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

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-base text-gray-400">
            <p>&copy; 2024 Kredi. All rights reserved. Built on blockchain for transparency and trust.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
