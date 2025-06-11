"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Newspaper, MessageSquare, Users, LayoutDashboard, LogOut } from "lucide-react"

export default function AdminSidebar({ user }) {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Tableau de Bord",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      permission: ["super_admin", "content_manager", "message_manager"],
    },
    {
      name: "Articles",
      href: "/admin/blogs",
      icon: <Newspaper className="h-5 w-5" />,
      permission: ["super_admin", "content_manager"],
    },
    {
      name: "Messages",
      href: "/admin/messages",
      icon: <MessageSquare className="h-5 w-5" />,
      permission: ["super_admin", "message_manager"],
    },
    {
      name: "Utilisateurs",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
      permission: ["super_admin"],
    },
  ]

  // Filter nav items based on user role with updated logic
  const filteredNavItems = navItems.filter((item) => {
    if (user?.role === "content_manager") {
      // content_manager: show only dashboard and articles
      return item.name === "Tableau de Bord" || item.name === "Articles"
    } else if (user?.role === "message_manager") {
      // message_manager: show only messages
      return item.name === "Messages"
    } else if (user?.role === "super_admin") {
      // super_admin: show all
      return true
    }
    // default: no access
    return false
  })

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/admin/dashboard" className="text-xl font-bold">
          Admin Assalam
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {filteredNavItems.map((item) => {
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-blue-700 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User info & logout */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center mr-3">
            <span className="font-medium">{user?.name ? user.name.charAt(0) : "A"}</span>
          </div>
          <div>
            <div className="font-medium">{user?.name || "Admin"}</div>
            <div className="text-xs text-gray-400">{user?.email || ""}</div>
          </div>
        </div>
        <a
          href="/api/auth/logout"
          className="w-full flex items-center px-4 py-2 text-sm rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4 mr-2" />
          <span>Déconnexion</span>
        </a>
      </div>
    </div>
  )
}
