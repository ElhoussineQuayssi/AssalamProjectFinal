export default async function AdminLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
