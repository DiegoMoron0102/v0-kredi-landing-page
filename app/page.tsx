"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Clock, Wallet, Activity, UserCheck } from "lucide-react"

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
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
              <Wallet className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold trust-gradient">DeFiLend</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm hover:text-primary transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("requirements")}
              className="text-sm hover:text-primary transition-colors"
            >
              Requirements
            </button>
            <button
              onClick={() => scrollToSection("register")}
              className="text-sm hover:text-primary transition-colors"
            >
              Get Started
            </button>
          </nav>
          <Button
            onClick={() => scrollToSection("register")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 defi-glow"
          >
            Register Now
          </Button>
        </div>
      </header>

      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
                Build Your Credit, <span className="trust-gradient">Secure Your Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Decentralized, transparent, and community-driven loans. Start small, grow your reputation, and access
                better rates through peer-to-peer lending.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("register")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 defi-glow text-lg px-8 py-6"
              >
                Register Now
              </Button>
              <Button
                onClick={() => scrollToSection("benefits")}
                variant="outline"
                size="lg"
                className="border-border hover:bg-muted text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Self-custodied wallets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>On-chain reputation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-secondary" />
                <span>Community-powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DeFiLend?</h2>
            <p className="text-xl text-muted-foreground">
              Experience the future of lending with blockchain-powered transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Secure & Transparent</h3>
                <p className="text-sm text-muted-foreground">
                  On-chain reputation protects users and ensures fairness in every transaction
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Accessible</h3>
                <p className="text-sm text-muted-foreground">
                  Start with small loans and grow as you build your lending history
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Fast & Simple</h3>
                <p className="text-sm text-muted-foreground">
                  Register, verify, and request your first loan in minutes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="bg-secondary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Community-Powered</h3>
                <p className="text-sm text-muted-foreground">
                  Your activity and peers strengthen your creditworthiness
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="requirements" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Requirements for Your First Loan</h2>
            <p className="text-xl text-muted-foreground">Simple steps to get started with decentralized lending</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Minimum 3 months of activity</h3>
                      <p className="text-sm text-muted-foreground">
                        Build your on-chain reputation through consistent platform engagement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full flex-shrink-0">
                      <Users className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Diversified transactions</h3>
                      <p className="text-sm text-muted-foreground">
                        Interact with multiple peers to demonstrate trustworthiness
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                      <Wallet className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Small initial amounts</h3>
                      <p className="text-sm text-muted-foreground">
                        Start with micro-loans to build trust and unlock larger amounts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/10 p-2 rounded-full flex-shrink-0">
                      <UserCheck className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Identity verification</h3>
                      <p className="text-sm text-muted-foreground">Complete KYC and liveness check for security</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="register" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Building Your Reputation</h2>
            <p className="text-xl text-muted-foreground">
              Join our decentralized lending community and take control of your financial future
            </p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`bg-input border-border ${errors.name ? "border-destructive" : ""}`}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-sm text-destructive mt-1" aria-live="polite">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`bg-input border-border ${errors.email ? "border-destructive" : ""}`}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-destructive mt-1" aria-live="polite">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Your information is secure</h3>
                      <p className="text-xs text-muted-foreground">
                        Your wallet is self-custodied and your data is encrypted. We never have access to your private
                        keys.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 defi-glow text-lg py-6"
                >
                  Start Building Your Reputation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center">
                  <Wallet className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="font-bold trust-gradient">DeFiLend</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Decentralized micro-lending powered by community trust and blockchain transparency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
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

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DeFiLend. All rights reserved. Built on blockchain for transparency and trust.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
