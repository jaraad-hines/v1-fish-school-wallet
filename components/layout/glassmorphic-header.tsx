"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Bell, Settings, LogOut, Wallet, Home, Building2, TrendingUp } from "lucide-react"

interface GlasmorphicHeaderProps {
  currentPage: "home" | "founder" | "investor" | "wallet" | "model-hub" | "investment-hubs"
  userProfile?: {
    name: string
    role: "founder" | "investor" | "organizer"
    avatar?: string
    badges?: string[]
  }
  onNavigate: (page: string) => void
}

export function GlasmorphicHeader({ currentPage, userProfile, onNavigate }: GlasmorphicHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphic-enhanced shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Fixed Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-lg">Fish School</span>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex items-center space-x-6 overflow-x-auto scrollbar-hide flex-1 mx-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Navigation Tabs */}
            <div className="flex items-center space-x-6 flex-shrink-0">
              <Button
                key="home"
                variant={currentPage === "home" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate("home")}
                className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0"
              >
                <Home className="w-4 h-4" />
                <span>Overview</span>
              </Button>
              <Button
                key="wallet"
                variant={currentPage === "wallet" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate("wallet")}
                className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0"
              >
                <Wallet className="w-4 h-4" />
                <span>Wallet</span>
              </Button>
              <Button
                key="founder"
                variant={currentPage === "founder" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate("founder")}
                className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0"
              >
                <Building2 className="w-4 h-4" />
                <span>Founder Hub</span>
              </Button>
              <Button
                key="investor"
                variant={currentPage === "investor" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate("investor")}
                className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Investor Hub</span>
              </Button>
              <Button
                key="model-hub"
                variant={currentPage === "model-hub" ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate("model-hub")}
                className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0"
              >
                <Building2 className="w-4 h-4" />
                <span>Model Hub</span>
              </Button>
            </div>

            {/* User Profile and Actions */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>

              {userProfile && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-3 px-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{userProfile.name}</span>
                        {userProfile.badges?.map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem onClick={() => onNavigate("settings")}>
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
