"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  Filter,
  Users,
  DollarSign,
  Clock,
  CheckCircle,
  Eye,
  FileText,
  Plus,
  BarChart3,
  PieChart,
  Target,
} from "lucide-react"

export function InvestorHub() {
  const [availableDeals] = useState([
    {
      id: 1,
      company: "Raay AI Platform",
      type: "SAFE",
      cap: "$10M",
      discount: "20%",
      raised: "$750K",
      target: "$1M",
      progress: 75,
      investors: 12,
      hub: "AI",
      description: "AI-powered task automation platform for small teams",
      milestones: [
        { name: "10 Beta Customers", status: "completed" },
        { name: "$10k MRR", status: "in-progress" },
      ],
      minInvestment: "$5K",
      timeLeft: "14 days",
    },
    {
      id: 2,
      company: "DeFi Yield Protocol",
      type: "SAFE",
      cap: "$15M",
      discount: "15%",
      raised: "$400K",
      target: "$2M",
      progress: 20,
      investors: 8,
      hub: "Web3",
      description: "Automated yield farming protocol with risk management",
      milestones: [
        { name: "Mainnet Launch", status: "completed" },
        { name: "$1M TVL", status: "pending" },
      ],
      minInvestment: "$10K",
      timeLeft: "28 days",
    },
  ])

  const [myInvestments] = useState([
    {
      id: 1,
      company: "BioTech Innovations",
      invested: "$25K",
      currentValue: "$32K",
      return: "+28%",
      status: "active",
      lastUpdate: "2 days ago",
      sector: "BioTech",
      stage: "Series A",
    },
    {
      id: 2,
      company: "PropTech Solutions",
      invested: "$50K",
      currentValue: "$67K",
      return: "+34%",
      status: "active",
      lastUpdate: "1 week ago",
      sector: "Real Estate",
      stage: "SAFE",
    },
  ])

  const [aumOverview] = useState({
    totalAUM: "$2.4M",
    activeInvestments: 15,
    avgReturn: "+31.2%",
    diversificationScore: 8.5,
    riskScore: "Moderate",
    sectors: [
      { name: "AI/ML", allocation: 35, value: "$840K", return: "+42%" },
      { name: "Web3", allocation: 25, value: "$600K", return: "+28%" },
      { name: "BioTech", allocation: 20, value: "$480K", return: "+15%" },
      { name: "Real Estate", allocation: 15, value: "$360K", return: "+38%" },
      { name: "Other", allocation: 5, value: "$120K", return: "+22%" },
    ],
  })

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Investor Hub</h1>
          <p className="text-muted-foreground">Manage your investment portfolio and discover new opportunities</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Investment
        </Button>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-6">
        <TabsList>
          <TabsTrigger value="portfolio">Portfolio Overview</TabsTrigger>
          <TabsTrigger value="deals">Deal Discovery</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="schools">Fish Schools</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          {/* AUM Overview Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{aumOverview.totalAUM}</div>
                <div className="text-sm text-muted-foreground">Total AUM</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{aumOverview.activeInvestments}</div>
                <div className="text-sm text-muted-foreground">Active Investments</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">{aumOverview.avgReturn}</div>
                <div className="text-sm text-muted-foreground">Avg Return</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">{aumOverview.diversificationScore}/10</div>
                <div className="text-sm text-muted-foreground">Diversification</div>
              </CardContent>
            </Card>
          </div>

          {/* Sector Allocation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="w-5 h-5" />
                <span>Sector Allocation</span>
              </CardTitle>
              <CardDescription>Your investment distribution across sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aumOverview.sectors.map((sector, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-3 h-3 rounded-full bg-primary"
                        style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                      />
                      <span className="font-medium">{sector.name}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-muted-foreground">{sector.allocation}%</span>
                      <span className="font-semibold">{sector.value}</span>
                      <span className="text-green-600">{sector.return}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Investments */}
          <Card>
            <CardHeader>
              <CardTitle>Active Investments</CardTitle>
              <CardDescription>Your current investment positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myInvestments.map((investment) => (
                  <div key={investment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{investment.company}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {investment.sector}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {investment.stage}
                          </Badge>
                          <span>Updated {investment.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{investment.currentValue}</div>
                      <div className="text-sm text-green-600">{investment.return}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deals" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input placeholder="Search deals..." className="w-full" />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* Deal Cards */}
          <div className="space-y-4">
            {availableDeals.map((deal) => (
              <Card key={deal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <span>{deal.company}</span>
                        <Badge variant="secondary">{deal.type}</Badge>
                        <Badge variant="outline">{deal.hub}</Badge>
                      </CardTitle>
                      <CardDescription>{deal.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Time Left</div>
                      <div className="font-semibold">{deal.timeLeft}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Deal Terms */}
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Valuation Cap</div>
                      <div className="font-semibold">{deal.cap}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Discount</div>
                      <div className="font-semibold">{deal.discount}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Min Investment</div>
                      <div className="font-semibold">{deal.minInvestment}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Investors</div>
                      <div className="font-semibold">{deal.investors}</div>
                    </div>
                  </div>

                  {/* Funding Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Funding Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {deal.raised} / {deal.target}
                      </span>
                    </div>
                    <Progress value={deal.progress} className="h-2" />
                  </div>

                  {/* Milestones */}
                  <div>
                    <h4 className="font-medium mb-2">Key Milestones</h4>
                    <div className="flex space-x-4">
                      {deal.milestones.map((milestone, index) => (
                        <div key={index} className="flex items-center space-x-1">
                          {milestone.status === "completed" ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <Clock className="w-4 h-4 text-yellow-500" />
                          )}
                          <span className="text-sm">{milestone.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Button>
                      <DollarSign className="w-4 h-4 mr-2" />
                      Invest Now
                    </Button>
                    <Button variant="outline">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Documents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5" />
                <span>Investment Analytics</span>
              </CardTitle>
              <CardDescription>Performance metrics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Track performance, risk metrics, and portfolio optimization
                </p>
                <Button>View Analytics Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schools">
          <Card>
            <CardHeader>
              <CardTitle>Fish Schools</CardTitle>
              <CardDescription>Join investment clubs and participate in collective decision making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Discover Fish Schools</h3>
                <p className="text-muted-foreground mb-4">Connect with like-minded investors and pool resources</p>
                <Button>Browse Schools</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
