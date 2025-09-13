"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Vote, Shield, TrendingUp, Users, DollarSign, Fish, Settings } from "lucide-react"
import { WalletBalance } from "./wallet/wallet-balance"
import { TransactionHistory } from "./wallet/transaction-history"
import { FishSchoolOverview } from "./fish-school/fish-school-overview"
import { VotingPanel } from "./governance/voting-panel"
import { EscrowManager } from "./escrow/escrow-manager"
import { FishPointsDisplay } from "./reputation/fish-points-display"

export function WalletDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-sidebar border-r border-sidebar-border p-6">
        <div className="flex items-center gap-2 mb-8">
          <Fish className="h-8 w-8 text-sidebar-primary" />
          <h1 className="text-xl font-bold text-sidebar-foreground">Fish School Wallet</h1>
        </div>

        <nav className="space-y-2">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("overview")}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Overview
          </Button>
          <Button
            variant={activeTab === "fish-schools" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("fish-schools")}
          >
            <Users className="mr-2 h-4 w-4" />
            Fish Schools
          </Button>
          <Button
            variant={activeTab === "governance" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("governance")}
          >
            <Vote className="mr-2 h-4 w-4" />
            Governance
          </Button>
          <Button
            variant={activeTab === "escrow" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("escrow")}
          >
            <Shield className="mr-2 h-4 w-4" />
            Escrow
          </Button>
          <Button
            variant={activeTab === "reputation" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("reputation")}
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Fish Points
          </Button>
        </nav>

        <div className="mt-8 pt-8 border-t border-sidebar-border">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
              <p className="text-muted-foreground">Manage your Fish School investments and governance</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Fish className="mr-1 h-3 w-3" />
                Connected
              </Badge>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$12,450.32</div>
                    <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Schools</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">AI, DeFi, Climate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Fish Points</CardTitle>
                    <Fish className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,247</div>
                    <p className="text-xs text-muted-foreground">Reputation Level: Expert</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Votes</CardTitle>
                    <Vote className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2</div>
                    <p className="text-xs text-muted-foreground">Ends in 3 days</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Dashboard Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <WalletBalance />
                <FishPointsDisplay />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TransactionHistory />
                </div>
                <div>
                  <FishSchoolOverview />
                </div>
              </div>
            </div>
          )}

          {activeTab === "fish-schools" && <FishSchoolOverview />}
          {activeTab === "governance" && <VotingPanel />}
          {activeTab === "escrow" && <EscrowManager />}
          {activeTab === "reputation" && <FishPointsDisplay />}
        </div>
      </div>
    </div>
  )
}
