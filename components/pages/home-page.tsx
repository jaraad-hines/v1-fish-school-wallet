"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Target, DollarSign, ArrowRight, Search } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: string) => void
  userProfile: {
    name: string
    role: "founder" | "investor" | "organizer"
  }
}

export function HomePage({ onNavigate, userProfile }: HomePageProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

      <div className="relative mb-16">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* First card - Explore Investment Hubs */}
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 w-96 flex flex-col"
            onClick={() => onNavigate("investor")}
          >
            <CardHeader className="flex-grow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Explore Investment Hubs</CardTitle>
                  <CardDescription>
                    Discover specialized investment opportunities across Web3, AI, BioTech, Real Estate, and RWA sectors
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-muted-foreground">5 Active Hubs • 100+ Deals • $103.8M TVL</div>
              </div>
              <Button className="w-full">
                View All Hubs <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Second card - Bring Product to Market */}
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 w-80 flex flex-col"
            onClick={() => onNavigate("founder")}
          >
            <CardHeader className="flex-grow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Bring Product to Market</CardTitle>
                  <CardDescription>Launch your startup with comprehensive funding and support</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button className="w-full">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Third card - Create Investment Vehicle */}
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 w-80 flex flex-col"
            onClick={() => onNavigate("model-hub")}
          >
            <CardHeader className="flex-grow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Create Investment Vehicle</CardTitle>
                  <CardDescription>Set up SAFE agreements, milestones, and escrow systems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button className="w-full">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Additional cards for investors */}
          {userProfile.role === "investor" && (
            <>
              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 w-80 flex flex-col"
                onClick={() => onNavigate("investor")}
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Join Investment Pool</CardTitle>
                      <CardDescription>Participate in collective investment opportunities</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button className="w-full">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 w-80 flex flex-col"
                onClick={() => onNavigate("investor")}
              >
                <CardHeader className="flex-grow">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">Raise Funds for Group</CardTitle>
                      <CardDescription>Organize and manage investor communities</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button className="w-full">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
