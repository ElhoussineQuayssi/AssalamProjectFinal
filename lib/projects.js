// Données statiques pour les projets

export function getProjects() {
  const mainProjects = [
    {
      id: 1,
      title: "Éducation pour Tous",
      slug: "education",
      excerpt: "Un programme qui vise à améliorer l'accès à l'éducation pour les enfants dans les zones rurales.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Éducation",
      categories: ["Éducation", "Développement"],
      location: "Plusieurs régions",
      peopleHelped: 5000,
      startDate: "Janvier 2018",
      status: "En cours",
    },
    {
      id: 2,
      title: "Accès aux Soins",
      slug: "health",
      excerpt: "Initiative pour améliorer l'accès aux soins de santé dans les zones isolées du Maroc.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Santé",
      categories: ["Santé", "Solidarité"],
      location: "Atlas et Rif",
      peopleHelped: 3200,
      startDate: "Mars 2019",
      status: "En cours",
    },
    {
      id: 3,
      title: "Protection de l'Environnement",
      slug: "environment",
      excerpt: "Des actions concrètes pour préserver l'environnement et lutter contre la désertification.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Environnement",
      categories: ["Environnement", "Développement Durable"],
      location: "Sud du Maroc",
      peopleHelped: 1800,
      startDate: "Juin 2020",
      status: "En cours",
    },
    {
      id: 4,
      title: "Patrimoine Culturel",
      slug: "culture",
      excerpt: "Préservation et promotion du riche patrimoine culturel et artisanal marocain.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Culture",
      categories: ["Culture", "Patrimoine"],
      location: "Fès et Marrakech",
      peopleHelped: 950,
      startDate: "Septembre 2019",
      status: "En cours",
    },
    {
      id: 5,
      title: "Autonomisation des Femmes",
      slug: "women",
      excerpt: "Soutien aux femmes rurales à travers la formation et les activités génératrices de revenus.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Social",
      categories: ["Social", "Économie", "Femmes"],
      location: "Régions rurales",
      peopleHelped: 1200,
      startDate: "Février 2017",
      status: "En cours",
    },
    {
      id: 6,
      title: "Jeunesse et Innovation",
      slug: "youth",
      excerpt: "Encourager l'innovation et l'entrepreneuriat chez les jeunes marocains.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Éducation",
      categories: ["Éducation", "Innovation", "Jeunesse"],
      location: "Casablanca et Rabat",
      peopleHelped: 2500,
      startDate: "Octobre 2018",
      status: "En cours",
    },
  ]

  const smallProjects = [
    {
      id: 7,
      title: "Caravanes Médicales",
      description:
        "Organisation de caravanes médicales périodiques dans les villages reculés pour offrir des consultations gratuites.",
      image: "/placeholder.svg?height=300&width=300",
      category: "Santé",
      location: "Montagnes du Rif",
      peopleHelped: 750,
    },
    {
      id: 8,
      title: "Bibliothèques Rurales",
      description: "Création de petites bibliothèques dans les écoles rurales pour encourager la lecture.",
      image: "/placeholder.svg?height=300&width=300",
      category: "Éducation",
      location: "Région de Souss",
      peopleHelped: 1200,
    },
    {
      id: 9,
      title: "Ateliers de Sensibilisation Environnementale",
      description: "Organisation d'ateliers pour sensibiliser les jeunes à la protection de l'environnement.",
      image: "/placeholder.svg?height=300&width=300",
      category: "Environnement",
      location: "Plusieurs villes",
      peopleHelped: 3000,
    },
    {
      id: 10,
      title: "Cours d'Alphabétisation",
      description: "Cours d'alphabétisation pour adultes, notamment les femmes dans les zones rurales.",
      image: "/placeholder.svg?height=300&width=300",
      category: "Éducation",
      location: "Villages du Moyen Atlas",
      peopleHelped: 450,
    },
  ]

  return { mainProjects, smallProjects }
}

export function getProject(slug) {
  const { mainProjects } = getProjects()
  const project = mainProjects.find((p) => p.slug === slug)

  if (!project) return null

  // Ajouter des données supplémentaires pour la page de détail
  return {
    ...project,
    content: [
      {
        heading: "Description du Projet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
      },
      {
        heading: "Notre Approche",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
      },
      {
        heading: "Impact",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.",
      },
    ],
    goals: [
      "Améliorer les conditions de vie dans les communautés ciblées",
      "Favoriser l'autonomie et la durabilité des actions",
      "Impliquer les populations locales dans les projets",
      "Créer un impact mesurable et durable",
    ],
    gallery: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    relatedProjects: mainProjects
      .filter((p) => p.id !== project.id)
      .slice(0, 3)
      .map((p) => ({
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        image: p.image,
      })),
  }
}
