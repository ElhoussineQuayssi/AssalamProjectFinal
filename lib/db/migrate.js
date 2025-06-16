import getDb from '../db'

export async function migrate() {
  const db = await getDb()

  // Check if the 'image' column exists
  const columns = await db.all("PRAGMA table_info(blog_posts)")
  const hasImageColumn = columns.some((col) => col.name === "image")

  if (!hasImageColumn) {
    await db.run("ALTER TABLE blog_posts ADD COLUMN image TEXT")
  }
}
