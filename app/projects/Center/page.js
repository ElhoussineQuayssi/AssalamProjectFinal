"use client"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function CentreHimayaPage() {
  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const project = {
    title: "Centre Himaya",
    excerpt: "Centre pluridisciplinaire de soutien aux femmes et enfants en situation difficile",
    image: "/women-center.jpg",
    categories: ["Femmes", "Enfants", "Soutien social"],
    startDate: "Février 2022",
    location: "Casablanca Anfa",
    peopleHelped: "500+",
    status: "Actif",
    content: [
      {
        heading: "Objectif général",
        text: "Développer les capacités personnelles et les compétences des femmes et des filles victimes de violences sous toutes leurs formes, ainsi que des femmes et des enfants en situation difficile."
      },
      {
        heading: "Notre approche",
        text: "Nous offrons un accompagnement holistique incluant soutien psychologique, conseil juridique, formation professionnelle et médiation familiale pour permettre une réintégration socio-économique complète."
      }
    ],
    objectives: [
      "Garantir des services d&apos;accueil, d&apos;écoute et d&apos;orientation",
      "Offrir des consultations psychologiques et juridiques",
      "Assurer une formation professionnelle adaptée",
      "Sensibiliser sur les droits des femmes",
      "Faciliter la réintégration socio-économique",
      "Lutter contre le décrochage scolaire"
    ],
    services: [
      {
        name: "Accueil",
        description: "Service d'accueil en continu de 9h00 à 16h30 avec orientation par des assistantes sociales"
      },
      {
        name: "Écoute",
        description: "Espace sécurisé pour exprimer les problèmes et attentes avec suivi individualisé"
      },
      {
        name: "Soutien psychologique",
        description: "Séances hebdomadaires avec des psychologues professionnels"
      },
      {
        name: "Consultations juridiques",
        description: "Conseils juridiques deux fois par mois par une avocate spécialisée"
      },
      {
        name: "Formations",
        description: "Développement personnel et formations professionnelles adaptées"
      }
    ],
    team: [
      "Coordinatrice",
      "Assistantes sociales",
      "Avocate",
      "Psychologues",
      "Formateurs spécialisés"
    ],
    gallery: [
      "/centre-himaya-1.jpg",
      "/centre-himaya-2.jpg",
      "/centre-himaya-3.jpg"
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
              <span key={index} className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
              <p className="text-gray-500 text-sm">Date de lancement</p>
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
          <h2 className="text-2xl font-bold mb-6 text-purple-700">À Propos du Centre</h2>

          <div className="prose prose-lg max-w-none prose-headings:text-purple-700">
            {project.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h3 className="text-xl font-bold mb-4">{section.heading}</h3>}
                <p className="mb-4">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Objectives Section */}
          <div className="mt-8 bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-purple-700">Objectifs Spécifiques</h3>
            <ul className="space-y-2">
              {project.objectives.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-purple-100 text-purple-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    {index + 1}
                  </div>
                  <p>{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-purple-700">Nos Services</h3>
            <div className="space-y-4">
              {project.services.map((service, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className="text-lg font-medium text-left">{service.name}</h4>
                    {activeAccordion === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  <div
                    className={`px-4 overflow-hidden transition-all duration-300 ${
                      activeAccordion === index ? "max-h-96 py-4" : "max-h-0 py-0"
                    }`}
                  >
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-purple-700">Notre Équipe</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.team.map((member, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    <div className="bg-purple-100 text-purple-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium">{member}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-purple-700">Galerie Photos</h3>
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
            <h3 className="text-xl font-bold mb-6 text-center">Soutenez le Centre</h3>
            <p className="text-gray-600 mb-6 text-center">
              Votre aide permet d&apos;offrir un meilleur avenir aux femmes et enfants en difficulté
            </p>
            <Link
              href="/contact?type=donation"
              className="block bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-md transition duration-300 font-medium mb-4"
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
                <div className="bg-purple-100 text-purple-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Femmes et filles victimes de violence</p>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Femmes et enfants en situation difficile</p>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Veuves et orphelins</p>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Familles en situation de précarité</p>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 text-purple-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>En tant que fille d&apos;une famille modeste, je n&apos;aurais jamais pu avoir accès à toutes ces opportunités sans l&apos;aide du centre.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}