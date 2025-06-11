import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Navbar from "components/Navbar"
import Footer from "components/Footer"
import { getBlogs } from "lib/actions"

export default async function Home() {
  const projects = [
    {
      title: "Rayhana assalam",
      excerpt: "Programme de soutien pour les femmes en difficulté.",
      image: "/projects/rayhana.jpg",
      link: "/projects/Rayhana",
    },
    {
      title: "Kafala",
      excerpt: "Programme de parrainage pour les orphelins.",
      image: "/projects/kafala.jpg",
      link: "/projects/Kafala",
    },
    {
      title: "Imtiaz",
      excerpt: "Parrainage des étudiants brillants issus de milieux défavorisés.",
      image: "/projects/imtiaz.jpg",
      link: "/projects/Imtiaz",
    },
    {
      title: "Fataer Al Baraka",
      excerpt: "Centre de formation en pâtisserie marocaine pour femmes.",
      image: "/projects/fataer.jpg",
      link: "/projects/Fataer",
    },
    {
      title: "Centre Himaya",
      excerpt: "Centre pluridisciplinaire de soutien aux femmes et enfants.",
      image: "/projects/center.jpg",
      link: "/projects/Center",
    },
    {
      title: "Nadi Assalam",
      excerpt: "Un avenir cousu d’espoir.",
      image: "/projects/nadi.jpg",
      link: "/projects/Nadi",
    },
  ]

  // Fetch blogs from the database
  const result = await getBlogs()
  const blogs = result.success ? result.data.slice(0, 3) : []

  return (
    <>
      <Navbar />
      <div className="mx-auto px-4 w-full">
        
        {/* Hero Section */}
        <section className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80 z-0"></div>
          <div className="absolute inset-0 bg-[url('/images/morocco-pattern.svg')] opacity-10 z-0"></div>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-red-500">Assalam</span> - Ensemble pour un avenir meilleur
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Une fondation marocaine dédiée à l&apos;amélioration des conditions de vie, à l&apos;éducation et au développement
              durable au Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md transition duration-300 font-medium flex items-center justify-center"
              >
                Nos Projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-white/90 text-blue-900 px-8 py-3 rounded-md transition duration-300 font-medium"
              >
                Faire un Don
              </Link>
            </div>
          </div>
        </section>

        {/* Aperçu des Projets */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Projets Principaux</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos initiatives principales qui transforment des vies à travers le Maroc
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.excerpt}</p>
                  <Link
                    href={project.link}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Blog */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Actualités & Blog</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Restez informé de nos dernières activités et nouvelles</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 relative">
                    <Image
                      src={blog.image || `/placeholder.svg?height=400&width=600`}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-green-600 font-medium">{blog.category}</span>
                    <h3 className="text-xl font-semibold mb-2 mt-1">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        Lire <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/blogs"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Voir tous les articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ce que disent les personnes que nous avons aidées</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
                  <Image src={`/testimonials/person1.jpg`} alt="Amina El Mansouri" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Amina El Mansouri</h4>
                  <p className="text-gray-600 text-sm">Bénéficiaire du projet Rayhana</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Grâce au projet Rayhana, j&apos;ai pu retrouver ma dignité et subvenir aux besoins de mes enfants. Je suis
                infiniment reconnaissante pour cette opportunité.&rdquo;
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden relative">
                  <Image src={`/testimonials/person2.jpg`} alt="Karim Benali" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">Karim Benali</h4>
                  <p className="text-gray-600 text-sm">Bénéficiaire du projet Imtiaz</p>
                </div>
              </div>
              <p className="text-gray-600">
                Grâce au projet Imtiaz, j&apos;ai pu retrouver ma dignité.
              </p>
            </div>
          </div>
        </section>

        {/* Appel à l'action */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative">
          <div className="absolute inset-0 bg-[url('/images/morocco-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Rejoignez notre mission</h2>
              <p className="text-lg mb-8">
                Ensemble, nous pouvons transformer des vies et bâtir un avenir meilleur. Soutenez nos projets en faisant un don
                ou en devenant bénévole.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?type=donation"
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition duration-300 font-medium"
                >
                  Faire un Don
                </Link>
                <Link
                  href="/contact?type=volunteer"
                  className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-md transition duration-300 font-medium"
                >
                  Devenir Bénévole
                </Link>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      <Footer />
    </>
  )
}
