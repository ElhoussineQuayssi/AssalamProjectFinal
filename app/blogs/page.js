import Link from "next/link"
import Image from "next/image"
import { getBlogs } from "lib/actions"

export default async function Blogs({ searchParams }) {
  const category = searchParams?.category || null
  const page = parseInt(searchParams?.page || "1", 10)
  const blogsPerPage = 6

  const result = await getBlogs()
  const allBlogs = result.data || []

  // Filter blogs by category if a category is selected
  const filteredBlogs = category
    ? allBlogs.filter((blog) => blog.category === category)
    : allBlogs

  // Paginate blogs
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  )

  const categories = [...new Set(allBlogs.map((blog) => blog.category))]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Blog & Actualités</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez les dernières actualités et articles de la Fondation Assalam
        </p>
      </div>

      {/* Featured Post */}
      {paginatedBlogs[0] && (
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-80 md:h-auto relative">
              <Image
                src={paginatedBlogs[0].image}
                alt={paginatedBlogs[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="mb-3">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {paginatedBlogs[0].category}
                </span>
                <span className="text-gray-500 text-sm ml-3">{paginatedBlogs[0].date}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{paginatedBlogs[0].title}</h2>
              <p className="text-gray-600 mb-6 line-clamp-3">{paginatedBlogs[0].excerpt}</p>
              <Link
                href={`/blogs/${paginatedBlogs[0].slug}`}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Lire l&apos;article
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="mb-12">
        <div className="flex items-center gap-3 overflow-x-auto py-4">
          <Link
            href="/blogs"
            className={`${
              !category ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-full whitespace-nowrap transition-colors`}
          >
            Tous
          </Link>
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={`/blogs?category=${cat}`}
              className={`${
                category === cat ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              } px-4 py-2 rounded-full whitespace-nowrap transition-colors`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* All Posts */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedBlogs.slice(1).map((blog) => (
            <Link
              href={`/blogs/${blog.slug}`}
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 relative">
                <Image
                  src={blog.image || `/placeholder.svg?height=400&width=600`}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden relative mr-3">
                    <Image
                      src={blog.author?.avatar || `/placeholder.svg?height=50&width=50`}
                      alt={blog.author?.name || "Auteur"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{blog.author?.name || "Équipe Assalam"}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            {Array.from({ length: totalPages }, (_, idx) => (
              <Link
                key={idx}
                href={`/blogs?${category ? `category=${category}&` : ""}page=${idx + 1}`}
                className={`px-4 py-2 ${
                  page === idx + 1
                    ? "bg-blue-600 text-white border border-blue-600"
                    : "bg-white border border-gray-300 text-gray-500 hover:bg-gray-50"
                } text-sm font-medium`}
              >
                {idx + 1}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  )
}
