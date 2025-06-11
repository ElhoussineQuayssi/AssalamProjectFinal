import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and intro */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-2">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Logo Fondation Assalam"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">Assalam</span>
            </Link>
            <p className="text-blue-100 mb-6">
              La Fondation Assalam œuvre pour améliorer les conditions de vie au Maroc à travers des projets
              d&apos;éducation, de santé et de développement durable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-blue-100 hover:text-white transition-colors">
                  Nos Projets
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-blue-100 hover:text-white transition-colors">
                  Blog & Actualités
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Projets</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/education" className="text-blue-100 hover:text-white transition-colors">
                  Éducation pour Tous
                </Link>
              </li>
              <li>
                <Link href="/projects/health" className="text-blue-100 hover:text-white transition-colors">
                  Accès aux Soins
                </Link>
              </li>
              <li>
                <Link href="/projects/environment" className="text-blue-100 hover:text-white transition-colors">
                  Protection de l&apos;Environnement
                </Link>
              </li>
              <li>
                <Link href="/projects/culture" className="text-blue-100 hover:text-white transition-colors">
                  Patrimoine Culturel
                </Link>
              </li>
              <li>
                <Link href="/projects/women" className="text-blue-100 hover:text-white transition-colors">
                  Autonomisation des Femmes
                </Link>
              </li>
              <li>
                <Link href="/projects/youth" className="text-blue-100 hover:text-white transition-colors">
                  Jeunesse et Innovation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-blue-100">123 Rue des Oliviers, Quartier Hassan, Rabat, Maroc</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a href="tel:+212522334455" className="text-blue-100 hover:text-white transition-colors">
                  +212 5 22 33 44 55
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:contact@fondation-assalam.org"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  contact@fondation-assalam.org
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors inline-block"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-blue-800" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            &copy; {new Date().getFullYear()} Fondation Assalam. Tous droits réservés.
          </p>
          <p>L&apos;équipe de la fondation Assalam</p>
        </div>
      </div>
    </footer>
  )
}
