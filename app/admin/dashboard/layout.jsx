import Link from "next/link"
import { redirect } from "next/navigation"
import { getSession } from "lib/auth"
import { Users, FileText, Mail, Home } from "lucide-react"

export default async function AdminLayout({ children }) {
  const session = await getSession()

  if (!session) {
    console.log("No session found, redirecting to login")
    redirect("/admin/login")
  }

  const userRole = session?.role || "guest"
  console.log(userRole)
  // Role-based nav items
  const navItems = [
    {
      name: "Tableau de bord",
      href: "/admin/dashboard",
      icon: <Home className="h-5 w-5 mr-2" />,
      roles: ["super_admin", "content_manager", "messages_manager"],
    },
    {
      name: "Articles",
      href: "/admin/blogs",
      icon: <FileText className="h-5 w-5 mr-2" />,
      roles: ["super_admin", "content_manager"],
    },
    {
      name: "Messages",
      href: "/admin/messages",
      icon: <Mail className="h-5 w-5 mr-2" />,
      roles: ["super_admin", "messages_manager"],
    },
    {
      name: "Administrateurs",
      href: "/admin/admins",
      icon: <Users className="h-5 w-5 mr-2" />,
      roles: ["super_admin"],
    },
  ]

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter((item) =>
    item.roles.includes(userRole)
  )

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <ul className="space-y-2">
            {filteredNavItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
            <br />
            <br />
            <br />
            <li>
              <Link
                href="/"
                className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-300 rounded-md"
              >
                <Home className="h-5 w-5 mr-2" />
                Retour à l&apos;accueil
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
