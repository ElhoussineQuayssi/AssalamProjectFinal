import "../globals.css"
import Navbar from "components/Navbar"
import Footer from "components/Footer"

export const metadata = {
  title: "Fondation Assalam",
  description: "Fondation Assalam - Pour un avenir meilleur",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
