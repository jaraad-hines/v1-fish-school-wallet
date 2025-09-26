"use client"

import { useState, useEffect } from "react"
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
import { Bell, Settings, LogOut, Wallet, Home, Building2, Users } from "lucide-react"

interface GlasmorphicHeaderProps {
  currentPage: "home" | "founder" | "investor" | "wallet"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getNavigationItems = () => {
    const baseItems = [
      { id: "home", label: "Overview", icon: Home },
      { id: "wallet", label: "Wallet", icon: Wallet },
    ]

    if (userProfile?.role === "founder") {
      baseItems.push({ id: "founder", label: "Founder Hub", icon: Building2 })
    } else if (userProfile?.role === "investor") {
      baseItems.push({ id: "investor", label: "Investor Hub", icon: Users })
    }

    return baseItems
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glassmorphic shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="font-bold text-lg">Fish School</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {getNavigationItems().map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.id}
                    variant={currentPage === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => onNavigate(item.id)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                )
              })}
            </nav>
          </div>

          {/* User Profile and Actions */}
          <div className="flex items-center space-x-4">
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
    </header>
  )
}
