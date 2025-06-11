// import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Clock } from "lucide-react"

export default function JardinEnfantsPage() {
  const project = {
    title: "Jardin d&apos;Enfants Rihana As-Salam",
    excerpt: "Environnement éducatif et pédagogique sûr pour les enfants d&apos;âge préscolaire",
    image: "/preschool.jpg",
    categories: ["Éducation", "Enfance", "Développement précoce"],
    startDate: "2013",
    location: "Casablanca-Anfa",
    peopleHelped: "120",
    status: "Actif",
    content: [
      {
        heading: "Notre mission",
        text: "Fournir un environnement éducatif et pédagogique sûr et inspirant pour les enfants d&apos;âge préscolaire, tout en mettant l&apos;accent sur le développement des compétences sociales, cognitives et émotionnelles."
      }
    ],
    objectives: [
      "Développer les compétences linguistiques et mathématiques",
      "Renforcer la coopération et le travail en équipe",
      "Encourager la pensée critique et la créativité",
      "Améliorer la préparation à l'école primaire",
      "Favoriser les relations sociales entre enfants",
      "Découvrir les talents spécifiques des enfants"
    ],
    activities: [
      {
        category: "Activités éducatives",
        items: [
          "Apprentissage des lettres et chiffres",
          "Jeux éducatifs",
          "Lectures d'histoires"
        ]
      },
      {
        category: "Activités sportives",
        items: [
          "Jeux collectifs",
          "Exercices physiques"
        ]
      },
      {
        category: "Activités créatives",
        items: [
          "Dessin et coloriage",
          "Activités manuelles",
          "Musique et théâtre"
        ]
      }
    ],
    team: [
      {
        role: "Enseignantes",
        count: "2",
        description: "Formées en éducation préscolaire"
      },
      {
        role: "Assistante pédagogique",
        count: "1",
        description: "Aide aux activités quotidiennes"
      }
    ],
    gallery: [
      "/preschool-1.jpg",
      "/preschool-2.jpg",
      "/preschool-3.jpg"
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
              <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
              <p className="text-gray-500 text-sm">Année de création</p>
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

          <div className="bg-yellow-50 p-4 rounded-lg flex items-center">
            <Users className="h-10 w-10 text-yellow-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Enfants accueillis</p>
              <p className="font-semibold">{project.peopleHelped}+</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg flex items-center">
            <Clock className="h-10 w-10 text-red-600 mr-4" />
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
          <h2 className="text-2xl font-bold mb-6 text-green-700">À Propos du Jardin d&apos;Enfants</h2>

          <div className="prose prose-lg max-w-none prose-headings:text-green-700">
            {project.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h3 className="text-xl font-bold mb-4">{section.heading}</h3>}
                <p className="mb-4">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Objectives Section */}
          <div className="mt-8 bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-700">Nos Objectifs</h3>
            <ul className="space-y-2">
              {project.objectives.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    {index + 1}
                  </div>
                  <p>{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Activités Pédagogiques</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {project.activities.map((activity, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg mb-4 text-green-700">{activity.category}</h4>
                  <ul className="space-y-2">
                    {activity.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Notre Équipe</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {project.team.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 text-green-600 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="font-bold">{member.count}</span>
                    </div>
                    <h4 className="font-bold text-lg">{member.role}</h4>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Galerie Photos</h3>
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
            <h3 className="text-xl font-bold mb-6 text-center">Soutenez Notre Jardin d&apos;Enfants</h3>
            <p className="text-gray-600 mb-6 text-center">
              Contribuez à offrir une éducation de qualité aux enfants défavorisés
            </p>
            <p>Grâce à l&apos;aide de Rayhana, j&apos;ai pu développer mes compétences</p>
            <p>L&apos;impact du projet sur ma vie a été considérable</p>
            <Link
              href="/contact?type=donation"
              className="block bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-md transition duration-300 font-medium mb-4"
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
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Enfants âgés de 4 à 5 ans</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Enfants en phase préscolaire</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Enfants issus de milieux défavorisés</p>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-xl font-bold mb-4">Nos Installations</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>2 salles de classe équipées</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Espace de jeux sécurisé</p>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 text-green-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p>Matériel pédagogique adapté</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}