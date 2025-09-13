"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Send, ArrowDownToLine, RefreshCw, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export function WalletBalance() {
  const [showBalance, setShowBalance] = useState(true)

  const balances = [
    { symbol: "USDC", amount: "8,450.32", usdValue: "8,450.32", change: "+2.1%" },
    { symbol: "ETH", amount: "1.2847", usdValue: "4,000.00", change: "+5.3%" },
  ]

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Wallet Balance</CardTitle>
            <CardDescription>Your cryptocurrency holdings</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setShowBalance(!showBalance)}>
            {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Total Balance */}
        <div className="p-4 bg-primary/5 rounded-lg">
          <div className="text-sm text-muted-foreground">Total Portfolio Value</div>
          <div className="text-2xl font-bold">{showBalance ? "$12,450.32" : "••••••"}</div>
          <Badge variant="secondary" className="mt-1 bg-green-100 text-green-700">
            +3.2% (24h)
          </Badge>
        </div>

        {/* Individual Balances */}
        <div className="space-y-3">
          {balances.map((balance) => (
            <div key={balance.symbol} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{balance.symbol}</span>
                </div>
                <div>
                  <div className="font-medium">{balance.symbol}</div>
                  <div className="text-sm text-muted-foreground">{showBalance ? balance.amount : "••••••"}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{showBalance ? `$${balance.usdValue}` : "••••••"}</div>
                <div className="text-sm text-green-600">{balance.change}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button className="flex-1">
            <Send className="mr-2 h-4 w-4" />
            Send
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <ArrowDownToLine className="mr-2 h-4 w-4" />
            Receive
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <RefreshCw className="mr-2 h-4 w-4" />
            Swap
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
