"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Search, Filter, TrendingUp, Users, DollarSign, Clock, CheckCircle, Eye, FileText } from "lucide-react"

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
    },
  ])

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Investor Hub</h1>
          <p className="text-muted-foreground">Discover deals, manage investments, and track your portfolio</p>
        </div>
        <Button>
          <Users className="w-4 h-4 mr-2" />
          Join Fish School
        </Button>
      </div>

      <Tabs defaultValue="deals" className="space-y-6">
        <TabsList>
          <TabsTrigger value="deals">Available Deals</TabsTrigger>
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="schools">Fish Schools</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="deals" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <Input placeholder="Search deals..." className="w-full" icon={<Search className="w-4 h-4" />} />
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

        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">$125K</div>
                <div className="text-sm text-muted-foreground">Total Invested</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">$156K</div>
                <div className="text-sm text-muted-foreground">Current Value</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">+24.8%</div>
                <div className="text-sm text-muted-foreground">Total Return</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {myInvestments.map((investment) => (
              <Card key={investment.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{investment.company}</h3>
                      <p className="text-sm text-muted-foreground">Last updated {investment.lastUpdate}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{investment.currentValue}</div>
                      <div className="text-sm text-green-600">{investment.return}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

        <TabsContent value="governance">
          <Card>
            <CardHeader>
              <CardTitle>Governance & Voting</CardTitle>
              <CardDescription>Participate in investment decisions and governance proposals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Active Proposals</h3>
                <p className="text-muted-foreground mb-4">Vote on investment opportunities and governance decisions</p>
                <Button>View Proposals</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
