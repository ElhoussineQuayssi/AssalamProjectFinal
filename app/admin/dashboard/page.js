"use client"

import Link from "next/link"
import { getStats, getAdmins, clearSession } from "lib/actions.js"
import { getSession } from "lib/auth.js"
import { Users, FileText, Mail, Eye, ThumbsUp, ArrowUp, ArrowDown, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"



export default function Dashboard() {
  const router = useRouter()
  const [stats, setStats] = useState(null)
  const [admins, setAdmins] = useState([])
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [userRole, setUserRole] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const session = await getSession()
      if (!session) {
        router.push("/admin/login")
        return
      }
      setUserRole(session.role)

      const statsResult = await getStats()
      const adminsResult = await getAdmins()

      if (!statsResult.success || !adminsResult.success) {
        return
      }

      setStats(statsResult)
      setAdmins(adminsResult.data)
    }

    fetchData()
  }, [router])

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const result = await clearSession()
      if (result.success) {
        router.push("/admin/login")
      } else {
        alert("Erreur lors de la déconnexion. Veuillez réessayer.")
      }
    } catch (error) {
      console.error("Logout error:", error)
      alert("Une erreur s'est produite lors de la déconnexion.")
    } finally {
      setIsLoggingOut(false)
    }
  }

  if (!stats || !admins || !userRole) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-gray-500">Chargement des données...</p>
      </div>
    )
  }

  const {
    totalBlogs,
    newBlogsPercent,
    totalMessages,
    newMessagesPercent,
    totalViews,
    viewsChangePercent,
    recentBlogs,
    recentMessages,
  } = stats

  return (
    <div className="flex-1 overflow-auto bg-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Tableau de bord</h1>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md flex items-center ${
              isLoggingOut ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <LogOut className="h-5 w-5 mr-2" />
            {isLoggingOut ? "Déconnexion..." : "Déconnexion"}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {(userRole === "super_admin" || userRole === "content_manager") && (
            <div className="bg-blue-500 text-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm">Total des articles</p>
                  <h3 className="text-4xl font-bold mt-2">{totalBlogs}</h3>
                </div>
                <div className="bg-blue-700 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="h-4 w-4 text-white mr-1" />
                <span className="text-white text-sm font-medium">{newBlogsPercent}%</span>
                <span className="text-white text-sm ml-2">depuis le mois dernier</span>
              </div>
            </div>
          )}

          {(userRole === "super_admin" || userRole === "messages_manager") && (
            <div className="bg-green-500 text-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm">Messages</p>
                  <h3 className="text-4xl font-bold mt-2">{totalMessages}</h3>
                </div>
                <div className="bg-green-700 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowUp className="h-4 w-4 text-white mr-1" />
                <span className="text-white text-sm font-medium">{newMessagesPercent}%</span>
                <span className="text-white text-sm ml-2">depuis le mois dernier</span>
              </div>
            </div>
          )}

          {userRole === "super_admin" && (
            <div className="bg-red-500 text-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm">Vues</p>
                  <h3 className="text-4xl font-bold mt-2">{totalViews}</h3>
                </div>
                <div className="bg-red-700 p-3 rounded-lg">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <ArrowDown className="h-4 w-4 text-white mr-1" />
                <span className="text-white text-sm font-medium">{viewsChangePercent}%</span>
                <span className="text-white text-sm ml-2">depuis le mois dernier</span>
              </div>
            </div>
          )}

          {userRole === "super_admin" && (
            <div className="bg-purple-500 text-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm">Administrateurs</p>
                  <h3 className="text-4xl font-bold mt-2">{admins.length}</h3>
                </div>
                <div className="bg-purple-700 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Recent Activity and Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {(userRole === "super_admin" || userRole === "content_manager") && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">Articles récents</h2>
                <Link href="/admin/blogs" className="text-blue-600 text-sm hover:underline">
                  Voir tous
                </Link>
              </div>

              <div className="space-y-4">
                {recentBlogs.map((blog) => (
                  <div key={blog.id} className="flex items-center border-b border-gray-100 pb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-800">{blog.title}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-500">{blog.date}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="h-4 w-4 mr-1" />
                          {blog.views}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(userRole === "super_admin" || userRole === "messages_manager") && (
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-gray-800">Messages récents</h2>
                <Link href="/admin/messages" className="text-blue-600 text-sm hover:underline">
                  Voir tous
                </Link>
              </div>

              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start border-b border-gray-100 pb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        message.type === "donation"
                          ? "bg-red-100"
                          : message.type === "volunteer"
                          ? "bg-green-100"
                          : "bg-gray-100"
                      }`}
                    >
                      {message.type === "donation" ? (
                        <ThumbsUp className="h-6 w-6 text-red-600" />
                      ) : message.type === "volunteer" ? (
                        <Users className="h-6 w-6 text-green-600" />
                      ) : (
                        <Mail className="h-6 w-6 text-gray-600" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium text-gray-800">{message.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{message.excerpt}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-500">{message.date}</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            message.type === "donation"
                              ? "bg-red-100 text-red-800"
                              : message.type === "volunteer"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {message.type === "donation" ? "Don" : message.type === "volunteer" ? "Bénévole" : "Contact"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
