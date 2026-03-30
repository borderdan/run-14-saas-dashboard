import { UsersTable } from "@/components/users/UsersTable"
import { columns } from "@/components/users/columns"
import { getUsers } from "@/lib/data"

export default function UsersPage() {
  // Fetch 150 mock users (we use page=1, limit=150 to get all at once for client-side functionality)
  const { users } = getUsers(1, 150)

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">
          Manage your users and their roles.
        </p>
      </div>
      <UsersTable columns={columns} data={users} />
    </div>
  )
}
