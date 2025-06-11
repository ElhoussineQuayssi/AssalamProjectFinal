"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getMessages, deleteMessage, markMessageAsRead } from "lib/actions"
import { Mail, Star, Trash2, Inbox, CheckCircle, Eye } from "lucide-react"

export default function MessagesAdmin() {
  const router = useRouter()
  const [messages, setMessages] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    unread: 0,
    read: 0,
  })

  useEffect(() => {
    async function fetchMessages() {
      const result = await getMessages()
      if (result.success) {
        setMessages(result.data)

        // Calculate stats
        const total = result.data.length
        const unread = result.data.filter((m) => m.status === "unread").length
        const read = total - unread
        setStats({ total, unread, read })
      }
    }
    fetchMessages()
  }, [])

  const handleDelete = async (id) => {
    const result = await deleteMessage(id)
    if (result.success) {
      setMessages(messages.filter((m) => m.id !== id))
      setStats((prev) => ({
        ...prev,
        total: prev.total - 1,
        unread: messages.find((m) => m.id === id)?.status === "unread" ? prev.unread - 1 : prev.unread,
      }))
    }
  }

  const handleMarkAsRead = async (id) => {
    const result = await markMessageAsRead(id)
    if (result.success) {
      setMessages(messages.map((m) => (m.id === id ? { ...m, status: "read" } : m)))
      setStats((prev) => ({
        ...prev,
        unread: prev.unread - 1,
        read: prev.read + 1,
      }))
    }
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
            <div className="bg-blue-100 p-2 rounded">
              <Inbox className="text-blue-600 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Non lus</p>
              <p className="text-2xl font-bold">{stats.unread}</p>
            </div>
            <div className="bg-yellow-100 p-2 rounded">
              <Mail className="text-yellow-600 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-500">Lus</p>
              <p className="text-2xl font-bold">{stats.read}</p>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <CheckCircle className="text-green-600 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-semibold">Expéditeur</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Téléphone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Message</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{message.name}</p>
                    <p className="text-sm text-gray-500">{message.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{message.phone || "N/A"}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      message.type === "donation"
                        ? "bg-green-100 text-green-800"
                        : message.type === "volunteer"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-600 truncate max-w-xs">{message.message}</p>
                </td>
                <td className="px-6 py-4 text-sm">{message.createdAt}</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button
                    className="text-yellow-600 hover:text-yellow-900"
                    onClick={() => handleMarkAsRead(message.id)}
                  >
                    <Star className="h-5 w-5 inline" />
                  </button>
                  <button
                    className="text-blue-600 hover:text-blue-900"
                    onClick={() => router.push(`/admin/messages/${message.id}`)}
                  >
                    <Eye className="h-5 w-5 inline" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(message.id)}
                  >
                    <Trash2 className="h-5 w-5 inline" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
