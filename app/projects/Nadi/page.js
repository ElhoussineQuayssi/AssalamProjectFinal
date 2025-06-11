"use client"

export default function NadiAssalamPage() {
  const project = {
    title: "Nadi Assalam",
    excerpt: "Un avenir cousu d’espoir",
    image: "/projects/nadi.jpg",
    categories: ["Formation", "Autonomisation", "Couture"],
    duration: "9 mois",
    content: [
      {
        heading: "Introduction",
        text: "Nadi Assalam est un centre de formation dédié à l’apprentissage de la couture traditionnelle et moderne, conçu pour redonner espoir et opportunités aux femmes veuves ou en situation précaire. Ce projet offre bien plus qu’une formation : il permet à ces femmes de se réinventer, de retrouver une autonomie économique et de devenir actrices de leur propre avenir.",
      },
      {
        heading: "Mission et objectifs",
        text: "Transmettre un savoir-faire en couture, mêlant traditions marocaines et techniques modernes. Favoriser l’autonomisation des femmes en difficulté grâce à une formation professionnalisante. Contribuer à l’épanouissement personnel et professionnel des participantes.",
      },
      {
        heading: "Durée et déroulement de la formation",
        text: "La formation au sein de Nadi Assalam s’étale sur une période de 9 mois, pendant lesquels les participantes apprennent : Les techniques de couture traditionnelle marocaine (caftans, djellabas, takchitas, etc.). Les bases et les avancées de la couture moderne (vêtements prêt-à-porter, accessoires, etc.). Des notions de design, de gestion et d’entrepreneuriat pour monter leur propre activité.",
      },
      {
        heading: "Certification et reconnaissance",
        text: "À l’issue de la formation, un examen supervisé par l’Entraide Nationale est organisé. Les participantes qui réussissent obtiennent un diplôme officiel reconnu, ouvrant les portes d’un avenir prometteur dans le domaine de la couture.",
      },
      {
        heading: "Après la formation : Un tremplin pour l’autonomie",
        text: "Le diplôme en main, les femmes formées par Nadi Assalam peuvent se regrouper en coopératives pour produire et vendre des créations artisanales et modernes. Elles peuvent également lancer leurs propres projets depuis leur domicile, en proposant des services de couture adaptés aux besoins de leur communauté.",
      },
      {
        heading: "Impact social et économique",
        text: "Le projet Nadi Assalam a un impact significatif : Il lutte contre la précarité en offrant aux femmes des opportunités concrètes de revenus. Il renforce la solidarité au sein des communautés en encourageant les collaborations locales. Il valorise le patrimoine vestimentaire marocain tout en intégrant des approches modernes.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="relative h-96 rounded-xl overflow-hidden mb-12">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.categories.map((category, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-white/90 text-xl max-w-3xl">{project.excerpt}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-12">
        {project.content.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">{section.heading}</h2>
            <p className="text-gray-700">{section.text}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Soutenez Nadi Assalam</h2>
        <p className="text-center mb-6">
          Ensemble, soutenons ces femmes dans leur cheminement vers l’indépendance et l’épanouissement !
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/contact?type=donation"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition"
          >
            Faire un Don
          </a>
          <a
            href="/contact?type=volunteer"
            className="bg-white hover:bg-gray-100 text-blue-600 px-6 py-3 rounded-md transition"
          >
            Devenir Bénévole
          </a>
        </div>
      </section>
    </div>
  )
}
