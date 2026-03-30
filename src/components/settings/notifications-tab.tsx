import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function NotificationsTab() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>
            Choose what you receive via email.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="marketing-emails">Marketing Emails</Label>
              <span className="text-sm text-muted-foreground">Receive emails about new products, features, and more.</span>
            </div>
            <Switch id="marketing-emails" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="security-emails">Security Emails</Label>
              <span className="text-sm text-muted-foreground">Receive emails about your account activity and security.</span>
            </div>
            <Switch id="security-emails" defaultChecked disabled />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="billing-emails">Billing Emails</Label>
              <span className="text-sm text-muted-foreground">Receive emails about invoices, payments, and subscription changes.</span>
            </div>
            <Switch id="billing-emails" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save email preferences</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Integrations Notifications</CardTitle>
          <CardDescription>
            Configure notifications for connected platforms.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="slack-notifications">Slack Integration</Label>
              <span className="text-sm text-muted-foreground">Send notifications to connected Slack channels.</span>
            </div>
            <Switch id="slack-notifications" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="webhook-notifications">Webhooks</Label>
              <span className="text-sm text-muted-foreground">Trigger webhooks on specific events.</span>
            </div>
            <Switch id="webhook-notifications" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save integration preferences</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
