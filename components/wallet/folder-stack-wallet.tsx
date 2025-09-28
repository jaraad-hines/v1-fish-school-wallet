"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wallet, Building2, Users, FileText } from "lucide-react"

interface WalletEntity {
  id: string
  type: "investor" | "business" | "platform" | "document"
  name: string
  handle?: string
  balance?: string
  status: "active" | "pending" | "verified"
  metadata?: Record<string, any>
}

interface FolderStackWalletProps {
  entities: WalletEntity[]
  onEntityClick?: (entity: WalletEntity) => void
}

export function FolderStackWallet({ entities, onEntityClick }: FolderStackWalletProps) {
  const getEntityIcon = (type: string) => {
    switch (type) {
      case "investor":
        return Users
      case "business":
        return Building2
      case "platform":
        return Wallet
      case "document":
        return FileText
      default:
        return Wallet
    }
  }

  const getEntityColor = (type: string) => {
    switch (type) {
      case "investor":
        return "bg-blue-500/20 border-blue-300/30"
      case "business":
        return "bg-green-500/20 border-green-300/30"
      case "platform":
        return "bg-purple-500/20 border-purple-300/30"
      case "document":
        return "bg-orange-500/20 border-orange-300/30"
      default:
        return "bg-gray-500/20 border-gray-300/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Wallet Entities</h2>
        <p className="text-muted-foreground">Your connected profiles, businesses, and documents</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entities.map((entity) => {
          const Icon = getEntityIcon(entity.type)
          return (
            <Card
              key={entity.id}
              className={`folder-stack cursor-pointer transition-all duration-300 hover:scale-105 ${getEntityColor(entity.type)}`}
              onClick={() => onEntityClick?.(entity)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon className="w-6 h-6" />
                  <Badge variant={entity.status === "verified" ? "default" : "secondary"}>{entity.status}</Badge>
                </div>
                <CardTitle className="text-lg">{entity.name}</CardTitle>
                {entity.handle && <p className="text-sm text-muted-foreground">@{entity.handle}</p>}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {entity.balance && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Balance</span>
                      <span className="font-medium">{entity.balance}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type</span>
                    <span className="font-medium capitalize">{entity.type}</span>
                  </div>
                  {entity.metadata?.deals && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Active Deals</span>
                      <span className="font-medium">{entity.metadata.deals}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="text-center">
        <Button variant="outline" className="glassmorphic bg-transparent">
          <Building2 className="w-4 h-4 mr-2" />
          Add New Entity
        </Button>
      </div>
    </div>
  )
}
