"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Clock, Plus } from "lucide-react"

export function FishSchoolOverview() {
  const fishSchools = [
    {
      id: "1",
      name: "AI Innovation School",
      organizer: "Sarah Chen",
      members: 47,
      totalRaised: 125000,
      yourInvestment: 2500,
      performance: "+12.5%",
      status: "active",
      nextVote: "2 days",
      focus: "Artificial Intelligence",
    },
    {
      id: "2",
      name: "DeFi Builders",
      organizer: "Marcus Rodriguez",
      members: 32,
      totalRaised: 89000,
      yourInvestment: 1500,
      performance: "+8.2%",
      status: "active",
      nextVote: "5 days",
      focus: "Decentralized Finance",
    },
    {
      id: "3",
      name: "Climate Solutions",
      organizer: "Dr. Emily Watson",
      members: 28,
      totalRaised: 67000,
      yourInvestment: 1000,
      performance: "+15.1%",
      status: "voting",
      nextVote: "Active",
      focus: "Climate Technology",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Your Fish Schools</CardTitle>
            <CardDescription>Investment clubs you're participating in</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Join School
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {fishSchools.map((school) => (
          <div key={school.id} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold">{school.name}</h3>
                <p className="text-sm text-muted-foreground">Led by {school.organizer}</p>
                <Badge variant="outline" className="mt-1">
                  {school.focus}
                </Badge>
              </div>
              <Badge
                variant={school.status === "voting" ? "default" : "secondary"}
                className={school.status === "voting" ? "bg-primary text-primary-foreground" : ""}
              >
                {school.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{school.members} members</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>Vote: {school.nextVote}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Raised</span>
                <span className="font-medium">${school.totalRaised.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Your Investment</span>
                <span className="font-medium">${school.yourInvestment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Performance</span>
                <span className="font-medium text-green-600">{school.performance}</span>
              </div>
            </div>

            <Progress value={(school.yourInvestment / school.totalRaised) * 100} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
