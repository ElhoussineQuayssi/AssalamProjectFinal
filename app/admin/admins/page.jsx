"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getAdmins, deleteAdmin } from "lib/actions"
import { Users, AlertTriangle, Edit, Trash2 } from "lucide-react"

export default function AdminsPage() {
  const router = useRouter()
  const [admins, setAdmins] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchAdmins() {
      try {
        const result = await getAdmins()
        if (result.success) {
          setAdmins(result.data)
        } else {
          setError(result.message || "Erreur lors de la récupération des administrateurs.")
        }
      } catch {
        setError("Une erreur s'est produite. Veuillez réessayer.")
      }
    }
    fetchAdmins()
  }, [])

  const handleDelete = async (id, role) => {
    const superAdminCount = admins.filter((admin) => admin.role === "super_admin").length

    if (role === "super_admin" && superAdminCount <= 1) {
      alert("Vous ne pouvez pas supprimer le dernier super administrateur.")
      return
    }

    if (confirm("Êtes-vous sûr de vouloir supprimer cet administrateur ?")) {
      try {
        const result = await deleteAdmin(id)
        if (result.success) {
          setAdmins(admins.filter((admin) => admin.id !== id))
        } else {
          alert(result.message || "Erreur lors de la suppression de l'administrateur.")
        }
      } catch {
        alert("Une erreur s'est produite. Veuillez réessayer.")
      }
    }
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des administrateurs</h1>
        <button
          onClick={() => router.push("/admin/admins/new")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
        >
          Ajouter un administrateur
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 flex items-start">
          <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">Liste des administrateurs</h2>
        <div className="space-y-4">
          {admins.map((admin) => (
            <div key={admin.id} className="flex items-center border-b border-gray-100 pb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{admin.name}</h3>
                <p className="text-sm text-gray-500">{admin.email}</p>
                <p className="text-sm text-gray-500">Rôle: {admin.role}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => router.push(`/admin/admins/${admin.id}/edit`)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-md flex items-center"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(admin.id, admin.role)}
                  className="bg-red-100 hover:bg-red-200 text-red-700 font-medium py-2 px-4 rounded-md flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
