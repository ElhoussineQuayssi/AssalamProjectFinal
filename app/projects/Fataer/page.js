"use client"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Clock } from "lucide-react"

export default function FataerAlBarakaPage() {
  const project = {
    title: "Fataer Al Baraka",
    excerpt: "Centre de formation en pâtisserie marocaine pour femmes en situation précaire",
    image: "/pastry-center.jpg",
    categories: ["Formation", "Autonomisation", "Cuisine"],
    startDate: "2018",
    location: "Casablanca",
    peopleHelped: "60",
    status: "Actif",
    content: [
      {
        heading: "Notre mission",
        text: "Offrir un tremplin vers l'autonomie et l'épanouissement personnel pour des femmes en situation précaire à travers la maîtrise de l'art de la pâtisserie marocaine traditionnelle."
      }
    ],
    objectives: [
      "Offrir une formation professionnelle de qualité",
      "Contribuer à l'autonomisation économique",
      "Préserver le patrimoine culinaire marocain",
      "Développer des compétences entrepreneuriales"
    ],
    program: {
      duration: "9 mois",
      modules: [
        "Techniques de base et avancées de pâtisserie",
        "Spécialités régionales marocaines",
        "Hygiène et sécurité alimentaire",
        "Gestion d'entreprise et marketing"
      ],
      certification: "Diplôme reconnu par l'Entraide Nationale"
    },
    outcomes: [
      "Création de coopératives culinaires",
      "Lancement de micro-entreprises à domicile",
      "Participation à des foires et événements gastronomiques",
      "Insertion professionnelle dans des établissements hôteliers"
    ],
    gallery: [
      "/pastry-1.jpg",
      "/pastry-2.jpg",
      "/pastry-3.jpg"
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
              <span key={index} className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
              <p className="text-gray-500 text-sm">Localisation</p>
              <p className="font-semibold">{project.location}</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg flex items-center">
            <Users className="h-10 w-10 text-red-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Femmes formées</p>
              <p className="font-semibold">{project.peopleHelped}+</p>
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
          <h2 className="text-2xl font-bold mb-6 text-red-700">À Propos du Centre</h2>

          <div className="prose prose-lg max-w-none prose-headings:text-red-700">
            {project.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h3 className="text-xl font-bold mb-4">{section.heading}</h3>}
                <p className="mb-4">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Objectives Section */}
          <div className="mt-8 bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-red-700">Nos Objectifs</h3>
            <ul className="space-y-2">
              {project.objectives.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    {index + 1}
                  </div>
                  <p>{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-red-700">Programme de Formation</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">Modules enseignés</h4>
                  <ul className="space-y-2">
                    {project.program.modules.map((module, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p>{module}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Durée</h4>
                    <p className="text-gray-600">{project.program.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Certification</h4>
                    <p className="text-gray-600">{project.program.certification}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-red-700">Résultats et Débouchés</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-red-100 text-red-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <p className="font-medium">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-red-700">Galerie Photos</h3>
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
            <h3 className="text-xl font-bold mb-6 text-center">Soutenez Notre Centre</h3>
            <p className="text-gray-600 mb-6 text-center">
              Aidez-nous à offrir plus d'opportunités aux femmes en situation précaire
            </p>
            <Link
              href="/contact?type=donation"
              className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-md transition duration-300 font-medium mb-4"
            >
              Faire un Don
            </Link>
            <Link
              href="/contact?type=volunteer"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-md transition duration-300 font-medium"
            >
              Devenir Bénévole
            </Link>
          </div>

          {/* Target Audience */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Public Cible</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Femmes en situation précaire</p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Veuves</p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Femmes vulnérables</p>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-xl font-bold mb-4">Impact Social</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Lutte contre la précarité</p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Valorisation du patrimoine culinaire</p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 text-red-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Renforcement de la solidarité communautaire</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}