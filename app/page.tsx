"use client"

import { useState } from "react"
import { GlasmorphicHeader } from "@/components/layout/glassmorphic-header"
import { HomePage } from "@/components/pages/home-page"
import { FounderHub } from "@/components/pages/founder-hub"
import { InvestorHub } from "@/components/pages/investor-hub"
import { InvestmentHubs } from "@/components/pages/investment-hubs"
import { ModelHub } from "@/components/pages/model-hub"
import { WalletDashboard } from "@/components/wallet-dashboard"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "founder" | "investor" | "investment-hubs" | "wallet" | "model-hub"
  >("home")

  const [userProfile] = useState({
    name: "Koyuki",
    role: "investor" as const,
    avatar: "/abstract-profile.png",
    badges: ["GP", "Leading Investor", "Founding Group"],
  })

  const handleNavigate = (page: string) => {
    setCurrentPage(page as any)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} userProfile={userProfile} />
      case "founder":
        return <FounderHub />
      case "investor":
        return <InvestorHub />
      case "investment-hubs":
        return <InvestmentHubs />
      case "wallet":
        return <WalletDashboard />
      case "model-hub":
        return <ModelHub onNavigate={handleNavigate} />
      default:
        return <HomePage onNavigate={handleNavigate} userProfile={userProfile} />
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <GlasmorphicHeader currentPage={currentPage} userProfile={userProfile} onNavigate={handleNavigate} />
      <div className="pt-20">{renderCurrentPage()}</div>
    </main>
  )
}
