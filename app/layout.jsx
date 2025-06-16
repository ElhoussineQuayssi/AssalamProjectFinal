import "./globals.css"

export const metadata = {
  title: "Fondation Assalam",
  description: "Fondation Assalam - Pour un avenir meilleur",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
