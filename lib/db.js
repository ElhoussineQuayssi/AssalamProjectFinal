import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import { schema } from './db/schema'
import { initializeDb } from './db/init'
import { migrate } from './db/migrate'

// Singleton to maintain db connection
let db = null

async function getDb() {
  if (db) return db

  db = await open({
    filename: './data.sqlite',
    driver: sqlite3.Database
  })

  // Run schema, initialization, and migrations
  await db.exec(schema)
  await initializeDb()
  await migrate() // Run migrations

  return db
}

export default getDb
