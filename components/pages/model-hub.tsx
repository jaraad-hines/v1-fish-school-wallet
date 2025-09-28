"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  FileText,
  Shield,
  Zap,
  TrendingUp,
  Database,
  Lock,
  CheckCircle,
  AlertCircle,
  Clock,
  Hash,
} from "lucide-react"

interface ModelHubProps {
  onNavigate?: (page: string) => void
}

export function ModelHub({ onNavigate }: ModelHubProps) {
  const [activeModel, setActiveModel] = useState<string | null>(null)
  const [documentType, setDocumentType] = useState("")
  const [inputText, setInputText] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [cryptoImprint, setCryptoImprint] = useState<any>(null)

  const models = [
    {
      id: "document-generator",
      name: "Document Generator",
      description: "Generate legal documents with cryptographic verification",
      icon: FileText,
      status: "active",
      usage: 85,
      capabilities: ["Escrow Lifecycle", "Milestone SAFE", "Investment Agreements"],
    },
    {
      id: "market-fit-analyzer",
      name: "Product Market Fit Analyzer",
      description: "Analyze usage patterns and market validation",
      icon: TrendingUp,
      status: "active",
      usage: 72,
      capabilities: ["Usage Tracking", "Value Assessment", "Growth Metrics"],
    },
    {
      id: "blockchain-imprinter",
      name: "Blockchain Imprinter",
      description: "Create cryptographic imprints for all interactions",
      icon: Shield,
      status: "active",
      usage: 95,
      capabilities: ["Hash Generation", "Digital Signatures", "On-chain Anchoring"],
    },
  ]

  const recentImprints = [
    {
      id: "1",
      action: "Document Created",
      type: "Milestone SAFE",
      commit: "0xabc123...",
      timestamp: "2 minutes ago",
      status: "verified",
    },
    {
      id: "2",
      action: "Deal Signed",
      type: "Escrow Agreement",
      commit: "0xdef456...",
      timestamp: "15 minutes ago",
      status: "verified",
    },
    {
      id: "3",
      action: "Profile Created",
      type: "Investor Profile",
      commit: "0x789ghi...",
      timestamp: "1 hour ago",
      status: "pending",
    },
  ]

  const handleModelProcess = async () => {
    if (!inputText || !documentType) return

    setIsProcessing(true)

    // Simulate model processing
    setTimeout(() => {
      const mockImprint = {
        commit: `0x${Math.random().toString(16).substr(2, 8)}...`,
        modelId: activeModel,
        modelVersion: "v2025.1.0",
        inputDigest: `sha256:${Math.random().toString(16).substr(2, 8)}...`,
        outputDigest: `sha256:${Math.random().toString(16).substr(2, 8)}...`,
        timestamp: new Date().toISOString(),
        signature: `ed25519:${Math.random().toString(16).substr(2, 16)}...`,
        chainTx: `0x${Math.random().toString(16).substr(2, 16)}...`,
      }
      setCryptoImprint(mockImprint)
      setIsProcessing(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-300/30">
          <Brain className="w-5 h-5 text-purple-600" />
          <span className="font-medium text-purple-700">Model Hub</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          AI-Powered Blockchain Models
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform your business operations with LLM-powered models that create cryptographic imprints for every
          interaction, ensuring transparency and verifiable provenance.
        </p>
      </div>

      {/* Model Cards with Folder Stacking Effect */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((model) => {
          const Icon = model.icon
          return (
            <Card
              key={model.id}
              className={`folder-stack cursor-pointer transition-all duration-300 hover:scale-105 ${
                activeModel === model.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveModel(model.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Icon className="w-8 h-8 text-primary" />
                  <Badge variant={model.status === "active" ? "default" : "secondary"}>{model.status}</Badge>
                </div>
                <CardTitle className="text-lg">{model.name}</CardTitle>
                <CardDescription>{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Usage</span>
                    <span>{model.usage}%</span>
                  </div>
                  <Progress value={model.usage} className="h-2" />
                  <div className="flex flex-wrap gap-1">
                    {model.capabilities.map((cap) => (
                      <Badge key={cap} variant="outline" className="text-xs">
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Interactive Model Interface */}
      {activeModel && (
        <Card className="glassmorphic-enhanced">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5" />
              <span>Model Interface</span>
            </CardTitle>
            <CardDescription>
              Interact with the selected model to generate documents and create cryptographic imprints
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="generate" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="generate">Generate</TabsTrigger>
                <TabsTrigger value="verify">Verify</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="generate" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Document Type</label>
                      <Select value={documentType} onValueChange={setDocumentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select document type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="escrow-lifecycle">Escrow Lifecycle Agreement</SelectItem>
                          <SelectItem value="milestone-safe">Milestone SAFE</SelectItem>
                          <SelectItem value="investment-agreement">Investment Agreement</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Input Parameters</label>
                      <Textarea
                        placeholder="Describe your requirements..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        className="min-h-32"
                      />
                    </div>

                    <Button
                      onClick={handleModelProcess}
                      disabled={!inputText || !documentType || isProcessing}
                      className="w-full"
                    >
                      {isProcessing ? (
                        <>
                          <Clock className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Brain className="w-4 h-4 mr-2" />
                          Generate & Imprint
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Cryptographic Imprint Display */}
                  {cryptoImprint && (
                    <Card className="crypto-imprint">
                      <CardHeader>
                        <CardTitle className="text-sm flex items-center space-x-2">
                          <Hash className="w-4 h-4" />
                          <span>Cryptographic Imprint</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-xs font-mono">
                        <div>
                          <span className="text-muted-foreground">Commit:</span>
                          <div className="break-all">{cryptoImprint.commit}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Model:</span>
                          <div>
                            {cryptoImprint.modelId} ({cryptoImprint.modelVersion})
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Chain Tx:</span>
                          <div className="break-all">{cryptoImprint.chainTx}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Signature:</span>
                          <div className="break-all">{cryptoImprint.signature}</div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="verify" className="space-y-4">
                <div className="text-center py-8">
                  <Shield className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Verification Interface</h3>
                  <p className="text-muted-foreground">Verify the authenticity and integrity of generated documents</p>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <div className="text-center py-8">
                  <Database className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Usage Analytics</h3>
                  <p className="text-muted-foreground">Track model performance and usage patterns</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {/* Recent Imprints */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="w-5 h-5" />
            <span>Recent Cryptographic Imprints</span>
          </CardTitle>
          <CardDescription>Latest blockchain-anchored interactions and their verification status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentImprints.map((imprint) => (
              <div key={imprint.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {imprint.status === "verified" ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                  )}
                  <div>
                    <div className="font-medium">{imprint.action}</div>
                    <div className="text-sm text-muted-foreground">{imprint.type}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm">{imprint.commit}</div>
                  <div className="text-xs text-muted-foreground">{imprint.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
