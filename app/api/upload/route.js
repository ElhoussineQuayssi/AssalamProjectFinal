import { NextResponse } from "next/server"
import formidable from "formidable"
import fs from "fs"
import path from "path"
import { Readable } from "stream"

// Disable Next.js default body parsing
export const config = {
  api: {
    bodyParser: false,
  },
}

// Ensure upload directory exists
const uploadDir = path.join(process.cwd(), "public", "uploads")
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

// Helper to convert Web Request to Node.js IncomingMessage with headers
function toNodeIncomingMessage(req) {
  const readable = new Readable({
    read() {
      req.arrayBuffer().then((buf) => {
        this.push(Buffer.from(buf))
        this.push(null)
      })
    },
  })

  // Mock headers for formidable
  readable.headers = Object.fromEntries(req.headers.entries())
  readable.method = req.method
  readable.url = req.url

  return readable
}

export async function POST(req) {
  const nodeReq = toNodeIncomingMessage(req)

  // Use formidable() directly as a function (default export is a function)
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 5 * 1024 * 1024, // 5MB
    filter: ({ mimetype }) => mimetype && mimetype.startsWith("image/"),
  })

  return new Promise((resolve) => {
    form.parse(nodeReq, (err, fields, files) => {
      if (err) {
        console.error("Error parsing the file:", err)
        resolve(
          NextResponse.json(
            { error: "Erreur lors du téléchargement de l'image." },
            { status: 500 }
          )
        )
        return
      }

      if (!files.image) {
        console.error("No file uploaded.")
        resolve(
          NextResponse.json({ error: "Aucun fichier téléchargé." }, { status: 400 })
        )
        return
      }

      const file = files.image
      const filePath = Array.isArray(file) ? file[0].filepath : file.filepath
      const fileName = path.basename(filePath)
      const publicPath = `/uploads/${fileName}`

      console.log("File uploaded successfully:", publicPath)
      resolve(NextResponse.json({ filePath: publicPath }))
    })
  })
}
