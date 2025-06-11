"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { saveMessage } from "lib/actions"
import { Check, AlertTriangle, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "contact"

  const [formState, setFormState] = useState({
    status: "idle", // idle, submitting, success, error
    message: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormState({ status: "submitting", message: "" })

    const formData = new FormData(event.target)
    formData.append("type", type)

    try {
      const result = await saveMessage(formData)
      if (result.success) {
        setFormState({
          status: "success",
          message: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
        })
        event.target.reset()
      } else {
        setFormState({
          ...formState,
          status: "error",
          message: result.message || "Une erreur s'est produite. Veuillez réessayer.",
        })
      }
    } catch {
      setFormState({
        ...formState,
        status: "error",
        message: "Une erreur s'est produite. Veuillez réessayer.",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contactez-Nous</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {type === "donation"
            ? "Soutenez nos projets par un don et aidez-nous à faire une différence"
            : type === "volunteer"
              ? "Rejoignez notre équipe de bénévoles et participez à nos actions"
              : "Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-8">
          {/* Form Status Message */}
          {formState.status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 flex items-start">
              <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p>{formState.message}</p>
            </div>
          )}

          {formState.status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6 flex items-start">
              <AlertTriangle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
              <p>{formState.message}</p>
            </div>
          )}

          {/* Form Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            <a
              href="/contact"
              className={`px-4 py-2 text-sm font-medium ${type === "contact" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            >
              Contact Général
            </a>
            <a
              href="/contact?type=donation"
              className={`px-4 py-2 text-sm font-medium ${type === "donation" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            >
              Faire un Don
            </a>
            <a
              href="/contact?type=volunteer"
              className={`px-4 py-2 text-sm font-medium ${type === "volunteer" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            >
              Devenir Bénévole
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                  Nom *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {type === "donation" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="amount">
                  Montant du don (MAD) *
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  min="10"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {type === "volunteer" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="skills">
                  Compétences / Domaines d&apos;intérêt *
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ex: Enseignement, Médecine, Informatique..."
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formState.status === "submitting"}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 disabled:opacity-70"
            >
              {formState.status === "submitting"
                ? "Envoi en cours..."
                : type === "donation"
                  ? "Envoyer ma demande de don"
                  : type === "volunteer"
                    ? "Envoyer ma candidature"
                    : "Envoyer mon message"}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-blue-50 rounded-xl p-8 mb-6">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Nos Coordonnées</h3>

            <div className="space-y-4">
              <div>
                <p className="font-medium">Adresse:</p>
                <p className="text-gray-600">123 Rue des Oliviers, Quartier Hassan, Rabat, Maroc</p>
              </div>

              <div>
                <p className="font-medium">Email:</p>
                <a href="mailto:contact@fondation-assalam.org" className="text-blue-600 hover:underline">
                  contact@fondation-assalam.org
                </a>
              </div>

              <div>
                <p className="font-medium">Téléphone:</p>
                <a href="tel:+212522334455" className="text-blue-600 hover:underline">
                  +212 5 22 33 44 55
                </a>
              </div>

              <div>
                <p className="font-medium">Heures d&apos;ouverture:</p>
                <p className="text-gray-600">Lundi - Vendredi: 9h00 - 17h00</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-80 relative">
            {/* Placeholder for Google Map - In a real project, replace with actual Google Maps embed */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Carte Google Maps ici</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-rose-600 text-white p-2 rounded-full hover:bg-rose-700">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
