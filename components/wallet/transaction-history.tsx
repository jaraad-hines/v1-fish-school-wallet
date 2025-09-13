"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownLeft, Vote, Shield, ExternalLink } from "lucide-react"

export function TransactionHistory() {
  const transactions = [
    {
      id: "1",
      type: "investment",
      description: "Investment in AI Fish School",
      amount: "-2,500.00",
      currency: "USDC",
      status: "completed",
      timestamp: "2 hours ago",
      icon: Vote,
    },
    {
      id: "2",
      type: "escrow",
      description: "Escrow Release - ClimateDAO",
      amount: "+1,200.00",
      currency: "USDC",
      status: "completed",
      timestamp: "1 day ago",
      icon: Shield,
    },
    {
      id: "3",
      type: "receive",
      description: "Received from 0x742d...35Cc",
      amount: "+500.00",
      currency: "USDC",
      status: "completed",
      timestamp: "3 days ago",
      icon: ArrowDownLeft,
    },
    {
      id: "4",
      type: "send",
      description: "Sent to DeFi Fish School",
      amount: "-1,000.00",
      currency: "USDC",
      status: "completed",
      timestamp: "5 days ago",
      icon: ArrowUpRight,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "failed":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Recent wallet activity and Fish School transactions</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => {
            const Icon = tx.icon
            return (
              <div
                key={tx.id}
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{tx.description}</div>
                    <div className="text-sm text-muted-foreground">{tx.timestamp}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-medium ${tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                    {tx.amount} {tx.currency}
                  </div>
                  <Badge variant="secondary" className={getStatusColor(tx.status)}>
                    {tx.status}
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
