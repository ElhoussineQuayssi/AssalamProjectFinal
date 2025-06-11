import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getBlogBySlug, incrementBlogViews } from "lib/actions"
import { formatDate } from "lib/utils"
import { Calendar, Clock, User, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default async function BlogPost({ params }) {
  const slug = await params.slug
  const result = await getBlogBySlug(slug)
  const blog = result.data
  
  if (!blog) {
    notFound()
  }

  // Increment view count
  await incrementBlogViews(slug)

  return (
    <div className="container mx-auto px-4 py-16">
      <article>
        {/* Hero Section */}
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <div className="mb-6 flex justify-start">
              <Link
                href="/blogs"
                className="inline-block mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Retour à la liste des blogs
              </Link>
            </div>
            <div className="mb-6">
              <Link
                href={`/blogs?category=${blog.category}`}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {blog.category}
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{blog.excerpt}</p>

          <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(blog.date)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>{blog.readTime} min de lecture</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>{blog.author?.name || "Équipe Assalam"}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="h-96 relative rounded-xl overflow-hidden mb-12">
          <Image
            src={blog.image || `/placeholder.svg?height=800&width=1200`}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Left Sidebar */}
          <div className="hidden md:block">
            <div className="sticky top-6">
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Partager</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}&t=${encodeURIComponent(blog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-800 hover:text-blue-900"
                  >
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}&text=${encodeURIComponent(blog.title + " - " + (blog.excerpt || ""))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sky-600 hover:text-sky-700"
                  >
                    <Twitter className="w-5 h-5 mr-2" />X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      typeof window !== "undefined" ? window.location.href : ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-rose-600 hover:text-rose-700"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Catégories</h4>
                <div className="flex flex-col gap-2">
                  {["Éducation", "Santé", "Environnement", "Culture", "Solidarité"].map((cat, idx) => (
                    <Link
                      key={idx}
                      href={`/blogs?category=${cat}`}
                      className="text-gray-600 hover:text-blue-600 hover:underline"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none prose-headings:text-blue-700 prose-a:text-blue-600">
            {Array.isArray(blog.content) ? (
              blog.content.map((paragraph, index) => (
                <p key={index} className="mb-6" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))
            ) : (
              <div className="mb-6" dangerouslySetInnerHTML={{ __html: blog.content }} />
            )}
            </div>

            {/* Tags */}
            {blog.tags && (
              <div className="mt-12 flex flex-wrap gap-2">
                {blog.tags.map((tag, idx) => (
                  <Link
                    key={idx}
                    href={`/blogs?tag=${tag}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Author Info */}
            {blog.author && (
              <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden relative">
                    <Image
                      src={blog.author.avatar || `/placeholder.svg?height=100&width=100`}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{blog.author.name}</h3>
                    <p className="text-gray-600">{blog.author.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">{blog.author.bio}</p>
              </div>
            )}

            {/* Mobile Share */}
            <div className="mt-12 md:hidden">
              <h4 className="text-lg font-medium mb-4">Partager cet article</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-sky-600 text-white p-2 rounded-full hover:bg-sky-700">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-rose-600 text-white p-2 rounded-full hover:bg-rose-700">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Related Articles */}
          <div>
            <div className="sticky top-6">
              <h4 className="text-lg font-medium mb-6">Articles Similaires</h4>
              <div className="space-y-6">
                {blog.relatedPosts?.map((post, idx) => (
                  <Link href={`/blogs/${post.slug}`} key={idx}>
                    <div className="group">
                      <div className="h-40 relative rounded-lg overflow-hidden mb-3">
                        <Image
                          src={post.image || `/placeholder.svg?height=200&width=300`}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h5 className="font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                      <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
