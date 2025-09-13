"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Clock, Unlock, Lock, AlertCircle } from "lucide-react"

export function EscrowManager() {
  const escrowAccounts = [
    {
      id: "1",
      name: "AI Innovation School - TechFlow Investment",
      amount: "50,000",
      currency: "USDC",
      status: "locked",
      releaseDate: "2024-12-15",
      daysRemaining: 45,
      conditions: "Milestone completion + community vote",
      progress: 60,
    },
    {
      id: "2",
      name: "Climate Solutions - GreenTech Funding",
      amount: "25,000",
      currency: "USDC",
      status: "pending_release",
      releaseDate: "2024-10-30",
      daysRemaining: 3,
      conditions: "Awaiting final approval",
      progress: 95,
    },
    {
      id: "3",
      name: "DeFi Builders - Protocol Development",
      amount: "75,000",
      currency: "USDC",
      status: "released",
      releaseDate: "2024-09-20",
      daysRemaining: 0,
      conditions: "Successfully completed",
      progress: 100,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "locked":
        return "bg-yellow-100 text-yellow-700"
      case "pending_release":
        return "bg-blue-100 text-blue-700"
      case "released":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "locked":
        return Lock
      case "pending_release":
        return Clock
      case "released":
        return Unlock
      default:
        return Shield
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Escrow Management</h2>
        <p className="text-muted-foreground">Monitor and manage escrowed funds</p>
      </div>

      {/* Escrow Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Escrowed</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$150,000</div>
            <p className="text-xs text-muted-foreground">Across 3 accounts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Release</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,000</div>
            <p className="text-xs text-muted-foreground">Ready in 3 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Released This Month</CardTitle>
            <Unlock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$75,000</div>
            <p className="text-xs text-muted-foreground">1 successful release</p>
          </CardContent>
        </Card>
      </div>

      {/* Escrow Accounts */}
      <Card>
        <CardHeader>
          <CardTitle>Escrow Accounts</CardTitle>
          <CardDescription>Active and completed escrow arrangements</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {escrowAccounts.map((account) => {
            const StatusIcon = getStatusIcon(account.status)
            return (
              <div key={account.id} className="p-4 border rounded-lg space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold">{account.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{account.conditions}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-lg">
                      ${account.amount} {account.currency}
                    </div>
                    <Badge variant="secondary" className={getStatusColor(account.status)}>
                      <StatusIcon className="mr-1 h-3 w-3" />
                      {account.status.replace("_", " ")}
                    </Badge>
                  </div>
                </div>

                {/* Progress and Timeline */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{account.progress}% complete</span>
                  </div>
                  <Progress value={account.progress} className="h-2" />
                  {account.daysRemaining > 0 && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{account.daysRemaining} days until release date</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {account.status === "pending_release" && (
                    <Button size="sm">
                      <Unlock className="mr-2 h-4 w-4" />
                      Release Funds
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {account.status === "locked" && (
                    <Button variant="outline" size="sm">
                      <AlertCircle className="mr-2 h-4 w-4" />
                      Report Issue
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
