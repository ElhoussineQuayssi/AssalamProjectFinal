import Database from 'better-sqlite3'
import { schema } from './db/schema'
import { initializeDb } from './db/init'
import { migrate } from './db/migrate'

// Singleton to maintain db connection
let db = null

async function getDb() {
  if (db) return db

  db = new Database('./data.sqlite')

  // Run schema, initialization, and migrations
  await db.exec(schema)
  await initializeDb()
  await migrate() // Run migrations

  return db
}

export default getDb
