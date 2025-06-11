import Image from "next/image"
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
} from "components/ui/timeline"

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">À Propos de Nous</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez l'histoire, la mission et les valeurs de la Fondation Assalam
        </p>
      </div>

      {/* Notre Histoire */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Histoire de la fondation"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent rounded-lg"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-700">Notre Histoire</h2>
            <p className="text-gray-700 mb-4">
              La Fondation Assalam a été créée en 2010 avec une vision claire : améliorer les conditions de vie des
              communautés les plus défavorisées au Maroc. Notre fondateur, inspiré par les valeurs de solidarité et
              d'entraide, a commencé par de petites initiatives locales qui se sont progressivement transformées en
              projets d'envergure nationale.
            </p>
            <p className="text-gray-700">
              Au fil des années, notre engagement s'est renforcé et nos domaines d'intervention se sont diversifiés,
              allant de l'éducation à la santé, en passant par le développement durable et la promotion de l'artisanat
              marocain.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les étapes clés qui ont marqué le parcours de la Fondation Assalam.
            </p>
          </div>

          <Timeline>
            {[
              { year: "2010", event: "Création de la Fondation Assalam avec des initiatives locales." },
              { year: "2015", event: "Lancement des premiers projets nationaux dans l'éducation et la santé." },
              { year: "2018", event: "Ouverture de centres communautaires pour autonomiser les femmes." },
              { year: "2023", event: "Impact sur plus de 10,000 bénéficiaires à travers le Maroc." },
            ].map((item, index) => (
              <TimelineItem key={index}>
                <TimelineTime>{item.year}</TimelineTime>
                <TimelineContent>
                  <TimelineTitle>{item.event}</TimelineTitle>
                  <TimelineDescription>
                    {index === 0
                      ? "Début de notre mission avec des initiatives locales."
                      : index === 1
                      ? "Expansion vers des projets nationaux."
                      : index === 2
                      ? "Focus sur l'autonomisation des femmes."
                      : "Un impact significatif sur les communautés."}
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>

      {/* Notre Mission et Vision */}
      <section className="mb-20 py-16 bg-gray-50 rounded-xl">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Mission et Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-blue-600 text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Notre Mission</h3>
              <p className="text-gray-700">
                La mission de la Fondation Assalam est d'œuvrer pour l'amélioration des conditions de vie des
                populations défavorisées au Maroc, à travers des projets dans les domaines de l'éducation, la santé, le
                développement durable et l'autonomisation économique.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-green-600 text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Notre Vision</h3>
              <p className="text-gray-700">
                Nous aspirons à construire un Maroc où chaque citoyen a accès à l'éducation, aux soins de santé, et aux
                opportunités économiques. Un Maroc où le développement est durable et respectueux de l'environnement, et
                où la richesse culturelle est préservée et valorisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Grâce à votre soutien, nous avons pu transformer des vies et bâtir un avenir meilleur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "10,000+", description: "Bénéficiaires aidés à travers nos projets." },
              { title: "50+", description: "Projets réalisés dans les domaines de l'éducation, la santé et l'autonomisation." },
              { title: "20+", description: "Partenariats avec des organisations locales et internationales." },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-4xl font-bold text-blue-600 mb-4">{stat.title}</h3>
                <p className="text-gray-700">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Nos Valeurs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Solidarité",
              description: "Nous croyons fermement à l'entraide et au soutien mutuel pour avancer ensemble.",
            },
            {
              title: "Intégrité",
              description: "Nous agissons avec honnêteté et transparence dans toutes nos actions et décisions.",
            },
            {
              title: "Respect",
              description: "Nous respectons la dignité et la diversité de chaque personne et communauté.",
            },
            {
              title: "Innovation",
              description: "Nous recherchons constamment des solutions créatives pour répondre aux défis.",
            },
            {
              title: "Durabilité",
              description:
                "Nous nous engageons à créer un impact positif et durable sur les communautés et l'environnement.",
            },
            { title: "Excellence", description: "Nous visons l'excellence dans tous nos projets et initiatives." },
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-blue-700">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec des partenaires de confiance pour maximiser notre impact.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["partner1.png", "partner2.png", "partner3.png", "partner4.png"].map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={`/partners/${partner}`}
                  alt={`Partenaire ${index + 1}`}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Notre Équipe</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="h-64 relative">
                <Image
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Membre de l'équipe ${id}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">Nom Prénom</h3>
                <p className="text-blue-600">Titre / Fonction</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
