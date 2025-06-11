"use client"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Clock, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function KafalaPage() {
  const [activeSponsorship, setActiveSponsorship] = useState(null)

  const toggleSponsorship = (index) => {
    setActiveSponsorship(activeSponsorship === index ? null : index)
  }

  const project = {
    title: "Projet Kafala",
    excerpt: "Programme de parrainage d'orphelins pour leur offrir une protection globale",
    image: "/orphan-care.jpg",
    categories: ["Enfance", "Parrainage", "Protection sociale"],
    startDate: "2015",
    location: "Maroc",
    peopleHelped: "300+",
    status: "Actif",
    content: [
      {
        heading: "Notre mission",
        text: "Offrir une protection globale aux orphelins au sein de leurs familles à travers un système de parrainage complet couvrant leurs besoins essentiels et leur développement personnel."
      }
    ],
    objectives: [
      "Fournir une assistance sociale, éducative et médicale",
      "Permettre aux orphelins de s'épanouir dans leur environnement familial",
      "Lutter contre le décrochage scolaire",
      "Garantir l'égalité des chances"
    ],
    sponsorships: [
      {
        type: "Parrainage global",
        description: "Couvre tous les besoins de base et besoins ponctuels de l'orphelin",
        amount: "500 Dhs/mois"
      },
      {
        type: "Parrainage de base",
        description: "Couvre les besoins essentiels (nourriture, éducation, santé)",
        amount: "300 Dhs/mois"
      },
      {
        type: "Parrainage scolaire",
        description: "Permet la scolarisation dans une école privée",
        amount: "Variable"
      },
      {
        type: "Parrainage familial",
        description: "Pour les familles avec 2 orphelins ou plus",
        amount: "700 Dhs/mois"
      }
    ],
    seasonalProjects: [
      {
        name: "Rentrée scolaire",
        description: "Distribution de cartables et fournitures scolaires"
      },
      {
        name: "Eid Al Adha",
        description: "Achat de moutons pour les familles nécessiteuses"
      },
      {
        name: "Eid Al Fitr",
        description: "Achat de vêtements neufs pour les enfants"
      },
      {
        name: "Camp d&apos;été",
        description: "Activités récréatives et éducatives sur 10 jours"
      },
      {
        name: "Panier du Ramadan",
        description: "Panier alimentaire de base (500 Dhs)"
      }
    ],
    gallery: [
      "/kafala-1.jpg",
      "/kafala-2.jpg",
      "/kafala-3.jpg"
    ]
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="relative h-96 rounded-xl overflow-hidden mb-12">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories?.map((category, index) => (
              <span key={index} className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-white/90 text-xl max-w-3xl">{project.excerpt}</p>
        </div>
      </section>

      {/* Project Info */}
      <section className="mb-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg flex items-center">
            <CalendarDays className="h-10 w-10 text-blue-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Année de lancement</p>
              <p className="font-semibold">{project.startDate}</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg flex items-center">
            <MapPin className="h-10 w-10 text-green-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Zone d&apos;intervention</p>
              <p className="font-semibold">{project.location}</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg flex items-center">
            <Users className="h-10 w-10 text-red-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Bénéficiaires</p>
              <p className="font-semibold">{project.peopleHelped}</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg flex items-center">
            <Clock className="h-10 w-10 text-purple-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Statut</p>
              <p className="font-semibold">{project.status}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-orange-700">À Propos du Programme</h2>

          <div className="prose prose-lg max-w-none prose-headings:text-orange-700">
            {project.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h3 className="text-xl font-bold mb-4">{section.heading}</h3>}
                <p className="mb-4">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Objectives Section */}
          <div className="mt-8 bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-orange-700">Objectifs du Programme</h3>
            <ul className="space-y-2">
              {project.objectives.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-orange-100 text-orange-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    {index + 1}
                  </div>
                  <p>{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsorship Types */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-orange-700">Formules de Parrainage</h3>
            <div className="space-y-4">
              {project.sponsorships.map((sponsorship, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleSponsorship(index)}
                  >
                    <div>
                      <h4 className="text-lg font-medium text-left">{sponsorship.type}</h4>
                      <p className="text-sm text-orange-600 mt-1">{sponsorship.amount}</p>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${activeSponsorship === index ? 'transform rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`px-4 overflow-hidden transition-all duration-300 ${
                      activeSponsorship === index ? "max-h-96 py-4" : "max-h-0 py-0"
                    }`}
                  >
                    <p className="text-gray-600">{sponsorship.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seasonal Projects */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-orange-700">Projets Annexes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.seasonalProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 text-orange-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-bold text-lg">{project.name}</h4>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-orange-700">Galerie Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Image ${index + 1} du ${project.title}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Support CTA */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 sticky top-6">
            <h3 className="text-xl font-bold mb-6 text-center">Parrainez un Orphelin</h3>
            <p className="text-gray-600 mb-6 text-center">
              Changez une vie en offrant votre soutien à un enfant dans le besoin
            </p>
            <p>En tant qu&apos;enfant parrainé, j&apos;ai pu poursuivre mes études</p>
            <Link
              href="/contact?type=sponsorship"
              className="block bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-md transition duration-300 font-medium mb-4"
            >
              Devenir Parrain
            </Link>
            <Link
              href="/contact?type=donation"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md transition duration-300 font-medium"
            >
              Faire un Don
            </Link>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Avantages du Parrainage</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Suivi régulier de l&apos;enfant parrainé</p>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Rapports semestriels sur l&apos;évolution de l&apos;enfant</p>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Possibilité de correspondance avec l&apos;enfant</p>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Reçu fiscal pour déduction d&apos;impôts</p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-xl font-bold mb-4">Critères d&apos;Éligibilité</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Enfants orphelins d&apos;un ou deux parents</p>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Familles vivant sous le seuil de pauvreté</p>
              </div>
              <div className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Enfants scolarisés ou en âge de l&apos;être</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}