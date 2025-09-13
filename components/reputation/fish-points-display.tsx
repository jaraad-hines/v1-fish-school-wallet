"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Fish, Trophy, Star, TrendingUp } from "lucide-react"

export function FishPointsDisplay() {
  const fishPoints = {
    total: 1247,
    level: "Expert",
    nextLevel: "Master",
    pointsToNext: 253,
    rank: "Top 5%",
    recentEarnings: [
      { action: "Voted on AI School proposal", points: 25, time: "2 hours ago" },
      { action: "Successful investment exit", points: 150, time: "1 day ago" },
      { action: "Referred new member", points: 50, time: "3 days ago" },
    ],
  }

  const achievements = [
    { name: "Early Adopter", description: "Joined first Fish School", icon: Star },
    { name: "Active Voter", description: "Participated in 10+ votes", icon: Trophy },
    { name: "Successful Investor", description: "3 profitable exits", icon: TrendingUp },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Fish className="h-5 w-5 text-primary" />
          Fish Points & Reputation
        </CardTitle>
        <CardDescription>Your standing in the Fish School Network</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Level */}
        <div className="text-center p-4 bg-primary/5 rounded-lg">
          <div className="text-3xl font-bold text-primary">{fishPoints.total}</div>
          <div className="text-sm text-muted-foreground">Fish Points</div>
          <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary">
            {fishPoints.level} Level
          </Badge>
        </div>

        {/* Progress to Next Level */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to {fishPoints.nextLevel}</span>
            <span>{fishPoints.pointsToNext} points needed</span>
          </div>
          <Progress value={75} className="h-2" />
          <div className="text-xs text-muted-foreground text-center">Rank: {fishPoints.rank} of all users</div>
        </div>

        {/* Recent Earnings */}
        <div>
          <h4 className="font-medium mb-3">Recent Earnings</h4>
          <div className="space-y-2">
            {fishPoints.recentEarnings.map((earning, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                <div>
                  <div className="text-sm font-medium">{earning.action}</div>
                  <div className="text-xs text-muted-foreground">{earning.time}</div>
                </div>
                <Badge variant="outline" className="text-primary">
                  +{earning.points}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-medium mb-3">Achievements</h4>
          <div className="grid grid-cols-1 gap-2">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="flex items-center gap-3 p-2 border rounded">
                  <Icon className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-medium">{achievement.name}</div>
                    <div className="text-xs text-muted-foreground">{achievement.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
