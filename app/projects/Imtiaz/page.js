"use client"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function ProjectPage() {
  const [activeAccordion, setActiveAccordion] = useState(null)
  const [expandedTestimonial, setExpandedTestimonial] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const toggleTestimonial = (index) => {
    setExpandedTestimonial(expandedTestimonial === index ? null : index)
  }

  const project = {
    title: "Projet Imtiaz",
    excerpt: "Parrainage des étudiants brillants issus de milieux défavorisés",
    image: "/education-project.jpg",
    categories: ["Éducation", "Mentorat", "Développement personnel"],
    startDate: "Janvier 2020",
    location: "Maroc",
    peopleHelped: "150",
    status: "Actif",
    content: [
      {
        heading: "Objectif général du projet",
        text: "Le projet Imtiaz a pour mission d'accompagner les étudiants les plus brillants vivant en situation difficile ou issus de milieux défavorisés de manière générale jusqu'à leur insertion professionnelle. L'objectif principal étant d'insuffler un esprit d'appartenance et d'initiative en eux et les activer dans la réforme et le développement."
      },
      {
        heading: "Notre vision",
        text: "Nous visons à travers les différentes formations du projet d'élaborer le leader de demain : Un leader missionnaire engagé avec une bonne moralité, l'excellence académique, une bonne santé et une efficacité au sein de la famille et de la société."
      }
    ],
    goals: [
      "Développer le niveau éducatif et l'aspect éthique des jeunes",
      "Œuvrer pour leur inculquer les plus hautes valeurs humaines",
      "Développer les compétences éducatives, comportementales et relationnelles",
      "Enseigner des compétences pour interagir avec soi-même et avec les autres",
      "Autonomiser les jeunes à travers le coaching et des conseils individuels",
      "Aider dans l'acquisition des besoins nécessaires des étudiants"
    ],
    timeline: [
      {
        year: "2020",
        events: [
          "Lancement du projet avec 20 étudiants",
          "Première session de formation en développement personnel",
          "Partenariat avec 3 universités"
        ]
      },
      {
        year: "2021",
        events: [
          "Extension à 50 bénéficiaires",
          "Mise en place du programme de mentorat",
          "Premières insertions professionnelles"
        ]
      },
      {
        year: "2022",
        events: [
          "Atteinte de 100 bénéficiaires",
          "Création du programme de bourses d'excellence",
          "Ouverture du centre de ressources pédagogiques"
        ]
      },
      {
        year: "2023",
        events: [
          "150 étudiants accompagnés",
          "Lancement de la plateforme d'e-learning",
          "Premier forum emploi dédié aux bénéficiaires"
        ]
      }
    ],
    faqs: [
      {
        question: "Comment postuler au programme Imtiaz?",
        answer: "Les candidatures s'effectuent via notre plateforme en ligne pendant les périodes d'ouverture des candidatures (généralement entre septembre et novembre). Les candidats doivent soumettre leur dossier académique, une lettre de motivation et des informations sur leur situation sociale."
      },
      {
        question: "Quels types de soutien sont fournis?",
        answer: "Le programme offre un soutien financier (bourse mensuelle), un accompagnement académique (tutorat, ressources pédagogiques), un développement personnel (formations, coaching) et une aide à l'insertion professionnelle (stages, réseautage)."
      },
      {
        question: "Y a-t-il un engagement après les études?",
        answer: "Nous encourageons les bénéficiaires à devenir à leur tour mentors pour les nouvelles générations, mais il n'y a pas d'obligation contractuelle. Notre philosophie est basée sur la volonté de redonner à la communauté."
      }
    ],
    testimonials: [
      {
        name: "Karim El Mansouri",
        role: "Bénéficiaire 2021",
        content: "Le projet Imtiaz a complètement transformé ma vie universitaire. Grâce à la bourse mensuelle, j'ai pu me concentrer sur mes études sans avoir à travailler à côté. Les formations en développement personnel m'ont aidé à avoir confiance en moi et à décrocher un stage dans une grande entreprise.",
        shortContent: "Le projet Imtiaz a complètement transformé ma vie universitaire..."
      },
      {
        name: "Amina Belahcen",
        role: "Bénéficiaire 2022",
        content: "En tant que fille d'une famille modeste, je n'aurais jamais pu avoir accès à toutes ces opportunités sans Imtiaz. Le mentorat m'a guidée dans mes choix de carrière, et aujourd'hui je prépare un master en ingénierie financière avec l'aide du programme.",
        shortContent: "En tant que fille d'une famille modeste, je n'aurais jamais pu avoir accès..."
      }
    ],
    gallery: [
      "/education-1.jpg",
      "/education-2.jpg",
      "/education-3.jpg",
      "/education-4.jpg"
    ],
    relatedProjects: [
      {
        title: "Projet Education Pour Tous",
        excerpt: "Programme de bourses pour les étudiants en situation précaire",
        image: "/related-education.jpg",
        slug: "education-pour-tous"
      },
      {
        title: "Projet Horizon",
        excerpt: "Formation professionnelle pour les jeunes diplômés",
        image: "/related-horizon.jpg",
        slug: "horizon"
      }
    ]
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="relative h-96 rounded-xl overflow-hidden mb-12">
        <Image
          src={project.image || `/placeholder.svg?height=800&width=1200`}
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
              <p className="text-gray-500 text-sm">Date de lancement</p>
              <p className="font-semibold">{project.startDate}</p>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg flex items-center">
            <MapPin className="h-10 w-10 text-green-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Région</p>
              <p className="font-semibold">{project.location}</p>
            </div>
          </div>

          <div className="bg-red-50 p-4 rounded-lg flex items-center">
            <Users className="h-10 w-10 text-red-600 mr-4" />
            <div>
              <p className="text-gray-500 text-sm">Bénéficiaires</p>
              <p className="font-semibold">{project.peopleHelped}+ personnes</p>
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
          <h2 className="text-2xl font-bold mb-6 text-blue-700">À Propos du Projet</h2>

          <div className="prose prose-lg max-w-none prose-headings:text-blue-700 prose-a:text-blue-600">
            {project.content.map((section, index) => (
              <div key={index} className="mb-8">
                {section.heading && <h3 className="text-xl font-bold mb-4">{section.heading}</h3>}
                <p className="mb-4">{section.text}</p>
              </div>
            ))}
          </div>

          {/* Goals Section */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Objectifs du Projet</h3>
            <ul className="space-y-2">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    {index + 1}
                  </div>
                  <p>{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Notre Parcours</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
              
              {project.timeline.map((item, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  {/* Year marker */}
                  <div className="absolute left-4 h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  
                  {/* Events */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <ul className="space-y-2">
                      {item.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start">
                          <div className="bg-blue-100 text-blue-600 rounded-full h-5 w-5 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p>{event}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitments Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Nos Engagements</h3>
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    ✓
                  </div>
                  <p>Bourse mensuelle pour subvenir aux besoins minimaux des étudiants</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    ✓
                  </div>
                  <p>Accompagnement pour l'accès au logement en cas de problèmes majeurs</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    ✓
                  </div>
                  <p>Équipement informatique selon les disponibilités</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    ✓
                  </div>
                  <p>Coaching et accompagnement psychologique par un professionnel</p>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section with Accordions */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Questions Fréquentes</h3>
            <div className="space-y-4">
              {project.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className="text-lg font-medium text-left">{faq.question}</h4>
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
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Témoignages</h3>
            <div className="space-y-6">
              {project.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 mb-3">{testimonial.role}</p>
                      <p className="text-gray-600">
                        {expandedTestimonial === index ? testimonial.content : testimonial.shortContent}
                      </p>
                      <button
                        onClick={() => toggleTestimonial(index)}
                        className="text-blue-600 text-sm mt-2 hover:underline focus:outline-none"
                      >
                        {expandedTestimonial === index ? "Voir moins" : "Lire la suite"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">Galerie Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image || `/placeholder.svg?height=300&width=300`}
                    alt={`Image ${index + 1} du projet ${project.title}`}
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
            <h3 className="text-xl font-bold mb-6 text-center">Soutenez ce Projet</h3>
            <p className="text-gray-600 mb-6 text-center">
              Votre contribution aide à améliorer les conditions éducatives des étudiants brillants
            </p>
            <Link
              href="/contact?type=donation"
              className="block bg-red-500 hover:bg-red-600 text-white text-center py-3 rounded-md transition duration-300 font-medium mb-4"
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

          {/* Eligibility Criteria */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Critères d'éligibilité</h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-700 mb-2">Critère académique</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Excellence académique (notes élevées)</li>
                  <li>Filière d'étude pertinente</li>
                  <li>Projet de vie clair et motivé</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-700 mb-2">Critère social</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Orphelins ou issus de structures de protection sociale</li>
                  <li>Étudiants démunis en situation d'handicap</li>
                  <li>Étudiants en situations difficiles (pauvreté, exclusion sociale, etc.)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 className="text-xl font-bold mb-4">Projets Similaires</h3>
            <div className="space-y-4">
              {project.relatedProjects?.map((relatedProject, index) => (
                <Link href={`/projects/${relatedProject.slug}`} key={index} className="block">
                  <div className="flex gap-4 hover:bg-gray-50 p-2 rounded-lg -mx-2 transition-colors">
                    <div className="w-20 h-20 flex-shrink-0 relative rounded-md overflow-hidden">
                      <Image
                        src={relatedProject.image || `/placeholder.svg?height=100&width=100`}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700">{relatedProject.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{relatedProject.excerpt}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}