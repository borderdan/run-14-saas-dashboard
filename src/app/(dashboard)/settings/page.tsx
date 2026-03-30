import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GeneralTab } from "@/components/settings/general-tab"
import { TeamTab } from "@/components/settings/team-tab"
import { BillingTab } from "@/components/settings/billing-tab"
import { NotificationsTab } from "@/components/settings/notifications-tab"
import { ApiTab } from "@/components/settings/api-tab"

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Tabs defaultValue="general" orientation="horizontal" className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto flex flex-row">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="space-y-4">
          <GeneralTab />
        </TabsContent>
        <TabsContent value="team" className="space-y-4">
          <TeamTab />
        </TabsContent>
        <TabsContent value="billing" className="space-y-4">
          <BillingTab />
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <NotificationsTab />
        </TabsContent>
        <TabsContent value="api" className="space-y-4">
          <ApiTab />
        </TabsContent>
      </Tabs>
    </div>
  )
}
