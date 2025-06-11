"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { login } from "lib/actions"
import { getSession } from "lib/auth"
import { AlertTriangle } from "lucide-react"

export default function AdminLogin() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingSession, setIsCheckingSession] = useState(true) // Add a loading state for session check

  useEffect(() => {
    let isMounted = true // Prevent state updates if the component unmounts
    async function checkSession() {
      try {
        const session = await getSession()
        if (session && isMounted) {
          router.push("/admin/dashboard") // Redirect if already logged in
        } else if (isMounted) {
          setIsCheckingSession(false) // Allow the login page to render
        }
      } catch (error) {
        console.error("Error checking session:", error)
        if (isMounted) setIsCheckingSession(false)
      }
    }
    checkSession()
    return () => {
      isMounted = false
    }
  }, [router])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError("")
    setIsLoading(true)

    const formData = new FormData(event.target)
    const email = formData.get("email")
    const password = formData.get("password")

    try {
      const result = await login(email, password)
      if (result.success) {
        router.refresh()
        router.push("/admin/dashboard")
      } else {
        setError(result.message || "Identifiants incorrects.")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isCheckingSession) {
    return <div className="flex justify-center items-center min-h-screen">Chargement...</div> // Show a loading state
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 relative mb-4">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Administration</h2>
          <p className="mt-2 text-sm text-gray-600">
            Connectez-vous à votre espace administrateur
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 flex items-start">
            <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
