import { getBlogById } from "lib/actions"
import Image from 'next/image'

export default async function BlogPost({ params }) {
  const { id } = await params // Await params before destructuring
  const result = await getBlogById(id)

  if (!result.success) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">{result.message || "Article introuvable."}</p>
      </div>
    )
  }

  const blog = result.data

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Publié le {new Date(blog.createdAt).toLocaleDateString()}</p>
      <div className="mb-6">
        <Image
          src={blog.image || "/placeholder.jpg"}
          alt={blog.title}
          width={1200}
          height={630}
          className="rounded-lg shadow"
          priority
        />
      </div>
      <div
        className="prose max-w-3/4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  )
}
