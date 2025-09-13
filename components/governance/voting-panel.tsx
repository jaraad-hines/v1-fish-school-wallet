"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Vote, Clock, CheckCircle, XCircle } from "lucide-react"

export function VotingPanel() {
  const activeVotes = [
    {
      id: "1",
      title: "Fund TechFlow AI Startup",
      school: "AI Innovation School",
      description: "Proposal to invest $50,000 in TechFlow, an AI-powered workflow automation platform.",
      amount: "$50,000",
      votesFor: 34,
      votesAgainst: 8,
      totalVoters: 47,
      timeLeft: "2 days, 14 hours",
      yourVote: null,
      status: "active",
    },
    {
      id: "2",
      title: "Approve ClimateDAO Exit",
      school: "Climate Solutions",
      description: "Vote to approve the exit strategy for ClimateDAO investment with 3.2x returns.",
      amount: "$75,000",
      votesFor: 22,
      votesAgainst: 3,
      totalVoters: 28,
      timeLeft: "5 days, 8 hours",
      yourVote: "for",
      status: "active",
    },
  ]

  const completedVotes = [
    {
      id: "3",
      title: "DeFi Protocol Investment",
      school: "DeFi Builders",
      result: "Approved",
      finalVotes: "28 for, 4 against",
      completedDate: "3 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Governance & Voting</h2>
        <p className="text-muted-foreground">Participate in Fish School decision making</p>
      </div>

      {/* Active Votes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Vote className="h-5 w-5" />
            Active Proposals
          </CardTitle>
          <CardDescription>Proposals requiring your vote</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {activeVotes.map((vote) => (
            <div key={vote.id} className="p-4 border rounded-lg space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold">{vote.title}</h3>
                  <Badge variant="outline" className="mt-1">
                    {vote.school}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">{vote.description}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-lg">{vote.amount}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {vote.timeLeft}
                  </div>
                </div>
              </div>

              {/* Voting Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Votes For: {vote.votesFor}</span>
                  <span>Votes Against: {vote.votesAgainst}</span>
                </div>
                <Progress value={(vote.votesFor / vote.totalVoters) * 100} className="h-2" />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    {vote.votesFor + vote.votesAgainst} of {vote.totalVoters} voted
                  </span>
                  <span>{Math.round((vote.votesFor / (vote.votesFor + vote.votesAgainst)) * 100)}% approval</span>
                </div>
              </div>

              {/* Voting Actions */}
              <div className="flex gap-2">
                {vote.yourVote ? (
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>You voted {vote.yourVote}</span>
                  </div>
                ) : (
                  <>
                    <Button className="flex-1">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Vote For
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <XCircle className="mr-2 h-4 w-4" />
                      Vote Against
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Completed Votes */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Decisions</CardTitle>
          <CardDescription>Recently completed votes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {completedVotes.map((vote) => (
              <div key={vote.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{vote.title}</div>
                  <div className="text-sm text-muted-foreground">{vote.school}</div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {vote.result}
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-1">{vote.completedDate}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
