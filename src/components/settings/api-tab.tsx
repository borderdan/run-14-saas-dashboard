"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, CheckCircle2 } from "lucide-react"
import { Label } from "@/components/ui/label"

export function ApiTab() {
  const [copied, setCopied] = useState(false)
  const apiKey = "sk_test_1234567890abcdef1234567890abcdef"

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            Manage your API keys to authenticate requests.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="api-key">Secret Key</Label>
            <div className="flex max-w-md items-center space-x-2">
              <Input
                id="api-key"
                value={apiKey}
                readOnly
                type="password"
                className="font-mono dark:bg-muted/50 dark:border-muted-foreground/20"
              />
              <Button size="icon" variant="outline" onClick={handleCopy}>
                {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy API Key</span>
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Do not share your API key with anyone or expose it in the browser or other client-side code. In order to protect the security of your account, we may also automatically disable any API keys that we&apos;ve found have leaked publicly.
          </p>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button variant="outline">Roll Key</Button>
          <Button>Generate New Key</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Usage Stats</CardTitle>
          <CardDescription>
            Monitor your API requests over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Total Requests</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <div className="p-0">
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Average Latency</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
              </div>
              <div className="p-0">
                <div className="text-2xl font-bold">45ms</div>
                <p className="text-xs text-muted-foreground">-5ms from last month</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Error Rate</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>
              </div>
              <div className="p-0">
                <div className="text-2xl font-bold">0.12%</div>
                <p className="text-xs text-muted-foreground">+0.01% from last month</p>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">Active Endpoints</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="p-0">
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 new since last week</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
