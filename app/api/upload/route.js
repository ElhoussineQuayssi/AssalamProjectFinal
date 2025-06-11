import { upload } from "lib/upload"
import { NextResponse } from "next/server"

// Middleware to handle file uploads
export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parser to use multer
  },
}

export async function POST(req) {
  return new Promise((resolve) => {
    upload.single("image")(req, {}, (err) => {
      if (err) {
        console.error("Error uploading file:", err)
        resolve(NextResponse.json({ error: "Erreur lors du téléchargement de l'image." }, { status: 500 }))
        return
      }

      if (!req.file) {
        console.error("No file uploaded.")
        resolve(NextResponse.json({ error: "Aucun fichier téléchargé." }, { status: 400 }))
        return
      }

      // Ensure the file path is correct
      const filePath = `/uploads/${req.file.filename}`
      console.log("File uploaded successfully:", filePath)

      resolve(NextResponse.json({ filePath }))
    })
  })
}
