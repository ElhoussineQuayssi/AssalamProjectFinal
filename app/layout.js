import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "components/Navbar"
import Footer from "components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Fondation Assalam",
  description: "Fondation Assalam - Pour un avenir meilleur",
  generator: 'v0.dev'
}

import ClientOnlyWrapper from "components/ClientOnlyWrapper"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} font-poppins`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
