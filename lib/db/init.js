import getDb from '../db'
import { hashPassword } from '../auth'

export async function initializeDb() {
  try {
    const db = await getDb()
    
    // Check if admin exists
    const adminExists = await db.get('SELECT id FROM admins LIMIT 1')
    
    if (!adminExists) {
      // Create default admin account
      const hashedPassword = await hashPassword('Admin@123')
      await db.run(
        `INSERT INTO admins (email, password, name, role) 
         VALUES (?, ?, ?, ?)`,
        ['admin@example.com', hashedPassword, 'Admin', 'super_admin']
      )
    }
  } catch {
    return null
  }
}
