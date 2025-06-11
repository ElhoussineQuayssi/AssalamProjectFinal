"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Edit, Trash2, Plus, Eye } from "lucide-react"
import { getBlogs } from "lib/actions"

export default function BlogsAdmin() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    async function fetchBlogs() {
      const result = await getBlogs()
      if (result.success) {
        setBlogs(result.data)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Gestion des Articles</h1>
        <Link 
          href="/admin/blogs/new" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouvel Article
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left text-sm font-semibold">Titre</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Catégorie</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Vues</th>
              <th className="px-6 py-3 text-right text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{blog.title}</td>
                <td className="px-6 py-4">{blog.category}</td>
                <td className="px-6 py-4">{blog.createdAt}</td>
                <td className="px-6 py-4">{blog.views || 0}</td>
                <td className="px-6 py-4 text-right space-x-3">
                  <Link href={`/admin/blogs/${blog.id}`} className="text-gray-600 hover:text-gray-900">
                    <Eye className="h-5 w-5 inline" />
                  </Link>
                  <Link href={`/admin/blogs/${blog.id}/edit`} className="text-blue-600 hover:text-blue-900">
                    <Edit className="h-5 w-5 inline" />
                  </Link>
                  <button className="text-red-600 hover:text-red-900">
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
