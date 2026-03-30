import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BillingTab() {
  const usagePercentage = 65

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>
                You are currently on the Pro plan.
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-sm">Pro Plan</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></span>
              <span className="text-sm text-muted-foreground">Billed monthly</span>
            </div>
            <p className="text-sm">Includes up to 10 team members, priority support, and advanced analytics.</p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 border-t px-6 py-4">
          <Button>Manage Plan</Button>
          <Button variant="outline">View Invoices</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Your current usage for this billing period.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">API Requests</span>
              <span>{usagePercentage}% used (6,500 / 10,000)</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: `${usagePercentage}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Usage resets on the 1st of every month.
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4 bg-muted/50">
          <div className="flex w-full items-center justify-between">
            <span className="text-sm text-muted-foreground">Need more limits?</span>
            <Button variant="secondary">Upgrade Plan</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
