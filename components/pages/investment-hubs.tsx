"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Brain, Dna, Home, Coins } from "lucide-react"

export function InvestmentHubs() {
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

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-balance">Investment Hubs</h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Explore specialized investment opportunities across different sectors and industries. Each hub represents a
          focused ecosystem of startups and investment opportunities.
        </p>
      </div>

      {/* Investment Hubs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

      {/* Hub Statistics */}
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
