"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Globe, Brain, Dna, Home, Coins, ArrowRight, Target, DollarSign } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: string) => void
  userProfile: {
    name: string
    role: "founder" | "investor" | "organizer"
  }
}

export function HomePage({ onNavigate, userProfile }: HomePageProps) {
  const hubs = [
    {
      id: "web3",
      name: "Web3",
      icon: Globe,
      description: "Blockchain, DeFi, and decentralized applications",
      deals: 24,
      totalRaised: "$12.5M",
    },
    {
      id: "ai",
      name: "AI",
      icon: Brain,
      description: "Artificial intelligence and machine learning",
      deals: 18,
      totalRaised: "$8.2M",
    },
    {
      id: "biotech",
      name: "BioTech",
      icon: Dna,
      description: "Biotechnology and life sciences",
      deals: 12,
      totalRaised: "$15.8M",
    },
    {
      id: "realestate",
      name: "Real Estate",
      icon: Home,
      description: "Property investment and development",
      deals: 31,
      totalRaised: "$45.2M",
    },
    {
      id: "rwa",
      name: "Real World Assets",
      icon: Coins,
      description: "Tokenized physical and financial assets",
      deals: 15,
      totalRaised: "$22.1M",
    },
  ]

  const founderActions = [
    {
      title: "Bring Product to Market",
      description: "Launch your startup with comprehensive funding and support",
      icon: Target,
      action: () => onNavigate("founder"),
    },
    {
      title: "Create Investment Vehicle",
      description: "Set up SAFE agreements, milestones, and escrow systems",
      icon: DollarSign,
      action: () => onNavigate("founder"),
    },
  ]

  const investorActions = [
    {
      title: "Join Investment Pool",
      description: "Participate in collective investment opportunities",
      icon: Users,
      action: () => onNavigate("investor"),
    },
    {
      title: "Raise Funds for Group",
      description: "Organize and manage investor communities",
      icon: TrendingUp,
      action: () => onNavigate("investor"),
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-balance">Welcome to Fish School Network</h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          The future of venture capital - where small teams achieve billion-dollar outcomes through collective
          intelligence and programmable capital.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Badge variant="secondary" className="px-4 py-2">
            {userProfile.role === "founder" ? "Founder" : "Investor"} Dashboard
          </Badge>
          <Badge variant="outline" className="px-4 py-2">
            KYC Verified
          </Badge>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {userProfile.role === "founder"
          ? founderActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={action.action}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <action.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))
          : investorActions.map((action, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={action.action}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <action.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{action.title}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Explore <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
      </div>

      {/* Investment Hubs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Investment Hubs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => {
            const Icon = hub.icon
            return (
              <Card key={hub.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{hub.name}</CardTitle>
                      <CardDescription className="text-sm">{hub.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-muted-foreground">{hub.deals} Active Deals</div>
                    <div className="font-semibold text-primary">{hub.totalRaised}</div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Hub
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">$103.8M</div>
            <div className="text-sm text-muted-foreground">Total Value Locked</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">1,247</div>
            <div className="text-sm text-muted-foreground">Active Investors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">89</div>
            <div className="text-sm text-muted-foreground">Fish Schools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-2xl font-bold text-primary mb-2">156</div>
            <div className="text-sm text-muted-foreground">Funded Startups</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
