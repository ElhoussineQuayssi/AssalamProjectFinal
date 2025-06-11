import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "components/ui/card"
import { Button } from "components/ui/button"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Rayhana Assalam",
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

  return (
    <div className="container mx-auto px-4 py-16 space-y-16">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Nos Projets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez nos initiatives qui transforment des vies à travers le Maroc.
        </p>
      </div>

      {/* Main Projects Section */}
      <section className="bg-blue-50 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Nos Projets Principaux</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{project.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="p-6">
                <Button asChild variant="link">
                  <Link href={project.link}>En savoir plus</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Photo and Text Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-green-50 p-8 rounded-lg shadow">
        <div className="relative h-80">
          <Image
            src="/images/community.jpg"
            alt="Community Impact"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Impact Communautaire</h2>
          <p className="text-gray-700">
            Nos projets ne se limitent pas à fournir des ressources, mais visent également à renforcer les communautés
            locales. Grâce à des initiatives collaboratives, nous créons des opportunités durables pour les générations
            futures.
          </p>
        </div>
      </section>

      {/* Transforming Lives Section */}
      <section className="bg-blue-50 p-8 rounded-lg shadow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Transformer des Vies, Construire des Avenirs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chez la Fondation Assalam pour le Développement Social Casablanca Anfa, nous croyons en un monde où chaque individu a accès aux ressources essentielles pour s’épanouir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Forage de Puits : L’Eau, Source de Vie</h3>
            <p className="text-gray-700 mb-4">
              Objectif : Briser la barrière de l’inaccessibilité à l’eau potable dans les zones rurales isolées.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Études géologiques approfondies pour localiser les nappes phréatiques.</li>
              <li>Construction de puits équipés de systèmes de pompage modernes.</li>
              <li>Formation des habitants pour assurer l’entretien et la pérennité des installations.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Construction d’Écoles : L’Éducation, un Droit pour Tous</h3>
            <p className="text-gray-700 mb-4">
              Objectif : Offrir aux enfants des zones rurales un accès à une éducation de qualité.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Écoles primaires modernes, équipées en matériel pédagogique adapté.</li>
              <li>Programmes de sensibilisation pour encourager la scolarisation, en particulier des filles.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Photo and Text Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-green-50 p-8 rounded-lg shadow">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-green-700">Un Village Autosuffisant</h2>
          <p className="text-gray-700">
            Le premier village orange au Maroc est un modèle innovant de développement communautaire. Avec des
            infrastructures modernes et des centres éducatifs, ce projet vise à autonomiser les habitants des zones
            rurales.
          </p>
        </div>
        <div className="relative h-80">
          <Image
            src="/images/village.jpg"
            alt="Village Autosuffisant"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-600 text-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">Rejoignez-Nous dans Cette Aventure Humanitaire</h2>
        <p className="text-lg mb-6">
          Ensemble, nous pouvons transformer des vies, renforcer des communautés et apporter de l’espoir là où il est le plus nécessaire.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="secondary">
            <Link href="/contact?type=donation">Faire un Don</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact?type=volunteer">Devenir Bénévole</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
