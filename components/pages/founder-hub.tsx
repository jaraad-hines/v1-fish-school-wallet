"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import {
  Plus,
  FileText,
  DollarSign,
  Target,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Eye,
  Download,
  Send,
} from "lucide-react"

export function FounderHub() {
  const [activeDeals] = useState([
    {
      id: 1,
      name: "Raay AI Platform",
      type: "SAFE",
      cap: "$10M",
      raised: "$750K",
      target: "$1M",
      progress: 75,
      investors: 12,
      status: "active",
      milestones: [
        { name: "10 Beta Customers", status: "completed" },
        { name: "Ship v1 Site", status: "completed" },
        { name: "$10k MRR", status: "in-progress" },
        { name: "3 Pilot Logos", status: "pending" },
      ],
    },
  ])

  const [dealBuilderStep, setDealBuilderStep] = useState(0)
  const [dealType, setDealType] = useState("")
  const [dealForm, setDealForm] = useState({
    // Basic Terms
    instrumentType: "",
    valuationCap: "",
    discount: "",
    maturity: "",
    targetRaise: "",
    minimumRaise: "",

    // Milestone Configuration
    milestones: [
      { trigger: "ARR", value: "1000000", cap: "12000000", description: "ARR ≥ $1M" },
      { trigger: "ARR", value: "3000000", cap: "15000000", description: "ARR ≥ $3M" },
      { trigger: "Schools", value: "250", cap: "20000000", description: "250 Schools formed" },
      { trigger: "ARR", value: "10000000", cap: "30000000", description: "ARR ≥ $10M" },
    ],

    // Escrow Settings
    enableEscrow: false,
    escrowConditions: [],
    releaseConditions: "minimum_raise",

    // Company Details
    companyName: "",
    companyDescription: "",
    useOfFunds: "",
  })

  const dealBuilderSteps = [
    "Instrument Type",
    "Basic Terms",
    "Milestone Setup",
    "Escrow Configuration",
    "Review & Generate",
  ]

  const handleDealTypeSelect = (type: string) => {
    setDealType(type)
    setDealForm((prev) => ({ ...prev, instrumentType: type }))
    setDealBuilderStep(1)
  }

  const handleFormUpdate = (field: string, value: any) => {
    setDealForm((prev) => ({ ...prev, [field]: value }))
  }

  const addMilestone = () => {
    setDealForm((prev) => ({
      ...prev,
      milestones: [...prev.milestones, { trigger: "ARR", value: "", cap: "", description: "" }],
    }))
  }

  const updateMilestone = (index: number, field: string, value: string) => {
    setDealForm((prev) => ({
      ...prev,
      milestones: prev.milestones.map((milestone, i) => (i === index ? { ...milestone, [field]: value } : milestone)),
    }))
  }

  const removeMilestone = (index: number) => {
    setDealForm((prev) => ({
      ...prev,
      milestones: prev.milestones.filter((_, i) => i !== index),
    }))
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Founder Hub</h1>
          <p className="text-muted-foreground">Manage your fundraising, track milestones, and engage with investors</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create New Deal
        </Button>
      </div>

      <Tabs defaultValue="deals" className="space-y-6">
        <TabsList>
          <TabsTrigger value="deals">Active Deals</TabsTrigger>
          <TabsTrigger value="create">Deal Builder</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* ... existing deals tab content ... */}
        <TabsContent value="deals" className="space-y-6">
          {activeDeals.map((deal) => (
            <Card key={deal.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <span>{deal.name}</span>
                      <Badge variant="secondary">{deal.type}</Badge>
                    </CardTitle>
                    <CardDescription>
                      Valuation Cap: {deal.cap} • {deal.investors} Investors
                    </CardDescription>
                  </div>
                  <Badge variant={deal.status === "active" ? "default" : "secondary"}>{deal.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Funding Progress */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Funding Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {deal.raised} / {deal.target}
                    </span>
                  </div>
                  <Progress value={deal.progress} className="h-2" />
                </div>

                {/* Milestones */}
                <div>
                  <h4 className="font-medium mb-3">Milestones</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {deal.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        {milestone.status === "completed" && <CheckCircle className="w-4 h-4 text-green-500" />}
                        {milestone.status === "in-progress" && <Clock className="w-4 h-4 text-yellow-500" />}
                        {milestone.status === "pending" && <AlertCircle className="w-4 h-4 text-gray-400" />}
                        <span
                          className={`text-sm ${
                            milestone.status === "completed"
                              ? "text-green-700"
                              : milestone.status === "in-progress"
                                ? "text-yellow-700"
                                : "text-muted-foreground"
                          }`}
                        >
                          {milestone.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    View Documents
                  </Button>
                  <Button variant="outline" size="sm">
                    <Users className="w-4 h-4 mr-2" />
                    Manage Investors
                  </Button>
                  <Button variant="outline" size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Update Milestones
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Deal Builder</CardTitle>
                  <CardDescription>Create a new funding instrument with milestone-based escrow</CardDescription>
                </div>
                {dealBuilderStep > 0 && (
                  <Button variant="outline" onClick={() => setDealBuilderStep(Math.max(0, dealBuilderStep - 1))}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                )}
              </div>

              {/* Progress Indicator */}
              {dealBuilderStep > 0 && (
                <div className="mt-4">
                  <div className="flex items-center space-x-2 mb-2">
                    {dealBuilderSteps.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                            index <= dealBuilderStep
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {index + 1}
                        </div>
                        {index < dealBuilderSteps.length - 1 && (
                          <div className={`w-12 h-0.5 ${index < dealBuilderStep ? "bg-primary" : "bg-muted"}`} />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Step {dealBuilderStep + 1}: {dealBuilderSteps[dealBuilderStep]}
                  </p>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {/* Step 0: Instrument Type Selection */}
              {dealBuilderStep === 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleDealTypeSelect("SAFE")}
                  >
                    <CardContent className="p-6 text-center">
                      <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">SAFE Agreement</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Simple Agreement for Future Equity with milestone triggers
                      </p>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Create SAFE</Button>
                    </CardContent>
                  </Card>
                  <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleDealTypeSelect("Note")}
                  >
                    <CardContent className="p-6 text-center">
                      <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">Convertible Note</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Traditional note with interest and conversion terms
                      </p>
                      <Button className="w-full bg-green-600 hover:bg-green-700">Create Note</Button>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Step 1: Basic Terms */}
              {dealBuilderStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Basic Terms - {dealType} Agreement</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="companyName">Company Name</Label>
                          <Input
                            id="companyName"
                            placeholder="e.g., Raay, Inc."
                            value={dealForm.companyName}
                            onChange={(e) => handleFormUpdate("companyName", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="valuationCap">Valuation Cap</Label>
                          <Input
                            id="valuationCap"
                            placeholder="e.g., $10,000,000"
                            value={dealForm.valuationCap}
                            onChange={(e) => handleFormUpdate("valuationCap", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="discount">Discount Rate (%)</Label>
                          <Input
                            id="discount"
                            placeholder="e.g., 20"
                            value={dealForm.discount}
                            onChange={(e) => handleFormUpdate("discount", e.target.value)}
                          />
                        </div>
                        {dealType === "Note" && (
                          <div>
                            <Label htmlFor="maturity">Maturity (months)</Label>
                            <Input
                              id="maturity"
                              placeholder="e.g., 24"
                              value={dealForm.maturity}
                              onChange={(e) => handleFormUpdate("maturity", e.target.value)}
                            />
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="targetRaise">Target Raise</Label>
                          <Input
                            id="targetRaise"
                            placeholder="e.g., $1,000,000"
                            value={dealForm.targetRaise}
                            onChange={(e) => handleFormUpdate("targetRaise", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="minimumRaise">Minimum Raise</Label>
                          <Input
                            id="minimumRaise"
                            placeholder="e.g., $500,000"
                            value={dealForm.minimumRaise}
                            onChange={(e) => handleFormUpdate("minimumRaise", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="useOfFunds">Use of Funds</Label>
                          <Textarea
                            id="useOfFunds"
                            placeholder="Describe how funds will be used..."
                            value={dealForm.useOfFunds}
                            onChange={(e) => handleFormUpdate("useOfFunds", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={() => setDealBuilderStep(2)}>
                      Next: Milestone Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Milestone Setup */}
              {dealBuilderStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Milestone Configuration</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Define milestone triggers that adjust the valuation cap as your company grows
                    </p>

                    <div className="space-y-4">
                      {dealForm.milestones.map((milestone, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="grid md:grid-cols-4 gap-4 items-end">
                              <div>
                                <Label>Trigger Type</Label>
                                <Select
                                  value={milestone.trigger}
                                  onValueChange={(value) => updateMilestone(index, "trigger", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="ARR">Annual Recurring Revenue</SelectItem>
                                    <SelectItem value="Schools">Schools Formed</SelectItem>
                                    <SelectItem value="Users">Active Users</SelectItem>
                                    <SelectItem value="Revenue">Total Revenue</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label>Target Value</Label>
                                <Input
                                  placeholder="e.g., 1000000"
                                  value={milestone.value}
                                  onChange={(e) => updateMilestone(index, "value", e.target.value)}
                                />
                              </div>
                              <div>
                                <Label>Adjusted Cap</Label>
                                <Input
                                  placeholder="e.g., $12,000,000"
                                  value={milestone.cap}
                                  onChange={(e) => updateMilestone(index, "cap", e.target.value)}
                                />
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm" onClick={() => removeMilestone(index)}>
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}

                      <Button variant="outline" onClick={addMilestone}>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Milestone
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setDealBuilderStep(1)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={() => setDealBuilderStep(3)}>
                      Next: Escrow Setup
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Escrow Configuration */}
              {dealBuilderStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Escrow Configuration</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="enableEscrow"
                          checked={dealForm.enableEscrow}
                          onCheckedChange={(checked) => handleFormUpdate("enableEscrow", checked)}
                        />
                        <Label htmlFor="enableEscrow">Enable Escrow Protection</Label>
                      </div>

                      {dealForm.enableEscrow && (
                        <div className="space-y-4 p-4 border rounded-lg">
                          <div>
                            <Label>Release Conditions</Label>
                            <Select
                              value={dealForm.releaseConditions}
                              onValueChange={(value) => handleFormUpdate("releaseConditions", value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="minimum_raise">Minimum Raise Met</SelectItem>
                                <SelectItem value="milestone">Milestone Achievement</SelectItem>
                                <SelectItem value="board_approval">Board Approval</SelectItem>
                                <SelectItem value="time_based">Time-Based Release</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <Label>Escrow Agent</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select escrow agent" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="fish_school">Fish School Escrow</SelectItem>
                                  <SelectItem value="third_party">Third Party Agent</SelectItem>
                                  <SelectItem value="smart_contract">Smart Contract</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label>Release Timeline (days)</Label>
                              <Input placeholder="e.g., 90" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setDealBuilderStep(2)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <Button onClick={() => setDealBuilderStep(4)}>
                      Next: Review
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Generate */}
              {dealBuilderStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Review & Generate Documents</h3>

                    {/* Deal Summary */}
                    <Card className="mb-6">
                      <CardHeader>
                        <CardTitle className="text-base">Deal Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Instrument:</strong> {dealForm.instrumentType}
                          </div>
                          <div>
                            <strong>Company:</strong> {dealForm.companyName}
                          </div>
                          <div>
                            <strong>Valuation Cap:</strong> {dealForm.valuationCap}
                          </div>
                          <div>
                            <strong>Discount:</strong> {dealForm.discount}%
                          </div>
                          <div>
                            <strong>Target Raise:</strong> {dealForm.targetRaise}
                          </div>
                          <div>
                            <strong>Minimum Raise:</strong> {dealForm.minimumRaise}
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <strong className="text-sm">Milestones:</strong>
                          <div className="mt-2 space-y-1">
                            {dealForm.milestones.map((milestone, index) => (
                              <div key={index} className="text-sm text-muted-foreground">
                                • {milestone.trigger} ≥ {milestone.value} → Cap: {milestone.cap}
                              </div>
                            ))}
                          </div>
                        </div>

                        {dealForm.enableEscrow && (
                          <>
                            <Separator />
                            <div className="text-sm">
                              <strong>Escrow:</strong> Enabled with {dealForm.releaseConditions.replace("_", " ")}{" "}
                              release conditions
                            </div>
                          </>
                        )}
                      </CardContent>
                    </Card>

                    {/* Document Generation */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h4 className="font-medium mb-2">{dealForm.instrumentType} Agreement</h4>
                          <p className="text-xs text-muted-foreground mb-3">Base investment document</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-4 text-center">
                          <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h4 className="font-medium mb-2">Milestone Addendum</h4>
                          <p className="text-xs text-muted-foreground mb-3">Milestone-based adjustments</p>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </CardContent>
                      </Card>

                      {dealForm.enableEscrow && (
                        <Card>
                          <CardContent className="p-4 text-center">
                            <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                            <h4 className="font-medium mb-2">Escrow Agreement</h4>
                            <p className="text-xs text-muted-foreground mb-3">Fund protection terms</p>
                            <Button size="sm" variant="outline" className="w-full bg-transparent">
                              <Eye className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setDealBuilderStep(3)}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                    <div className="space-x-3">
                      <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Download Package
                      </Button>
                      <Button>
                        <Send className="w-4 h-4 mr-2" />
                        Publish to Investors
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ... existing governance and analytics tabs ... */}
        <TabsContent value="governance">
          <Card>
            <CardHeader>
              <CardTitle>Governance & Compliance</CardTitle>
              <CardDescription>Manage entity formation, compliance, and investor relations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Governance Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Entity management, board resolutions, and compliance tracking
                </p>
                <Button>Set Up Governance</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics & Reporting</CardTitle>
              <CardDescription>Track performance, investor engagement, and milestone progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">Advanced analytics and reporting tools</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
