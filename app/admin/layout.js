import Link from "next/link"
import { redirect } from "next/navigation"
import { getSession } from "lib/auth"
import { Users, FileText, Mail, Home } from "lucide-react"
import AdminSidebar from "components/AdminSidebar"

export default async function AdminLayout({ children }) {
  const session = await getSession()

  if (!session) {
    console.log("No session found, redirecting to login")
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
    

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
