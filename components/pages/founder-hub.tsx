"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Plus, FileText, DollarSign, Target, Users, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react"

export function FounderHub() {
  const [activeDeals] = useState([
    {
      id: 1,
      name: "Raay AI Platform",
      type: "SAFE",
      cap: "$10M",
      raised: "$750K",
      target: "$1M",
      progress: 75,
      investors: 12,
      status: "active",
      milestones: [
        { name: "10 Beta Customers", status: "completed" },
        { name: "Ship v1 Site", status: "completed" },
        { name: "$10k MRR", status: "in-progress" },
        { name: "3 Pilot Logos", status: "pending" },
      ],
    },
  ])

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Founder Hub</h1>
          <p className="text-muted-foreground">Manage your fundraising, track milestones, and engage with investors</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create New Deal
        </Button>
      </div>

      <Tabs defaultValue="deals" className="space-y-6">
        <TabsList>
          <TabsTrigger value="deals">Active Deals</TabsTrigger>
          <TabsTrigger value="create">Deal Builder</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="deals" className="space-y-6">
          {activeDeals.map((deal) => (
            <Card key={deal.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>{deal.name}</span>
                      <Badge variant="secondary">{deal.type}</Badge>
                    </CardTitle>
                    <CardDescription>
                      Valuation Cap: {deal.cap} • {deal.investors} Investors
                    </CardDescription>
                  </div>
                  <Badge variant={deal.status === "active" ? "default" : "secondary"}>{deal.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
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
                  <h4 className="font-medium mb-3">Milestones</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {deal.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        {milestone.status === "completed" && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {milestone.status === "in-progress" && <Clock className="w-4 h-4 text-yellow-500" />}
                        {milestone.status === "pending" && <AlertCircle className="w-4 h-4 text-gray-400" />}
                        <span
                          className={`text-sm ${
                            milestone.status === "completed"
                              ? "text-green-700"
                              : milestone.status === "in-progress"
                                ? "text-yellow-700"
                                : "text-muted-foreground"
                          }`}
                        >
                          {milestone.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    View Documents
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Investors
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Update Milestones
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Deal Builder</CardTitle>
              <CardDescription>Create a new funding instrument with milestone-based escrow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">SAFE Agreement</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Simple Agreement for Future Equity with milestone triggers
                    </p>
                    <Button className="w-full">Create SAFE</Button>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Convertible Note</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Traditional note with interest and conversion terms
                    </p>
                    <Button className="w-full">Create Note</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance">
          <Card>
            <CardHeader>
              <CardTitle>Governance & Compliance</CardTitle>
              <CardDescription>Manage entity formation, compliance, and investor relations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Governance Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Entity management, board resolutions, and compliance tracking
                </p>
                <Button>Set Up Governance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reporting</CardTitle>
              <CardDescription>Track performance, investor engagement, and milestone progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">Advanced analytics and reporting tools</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
