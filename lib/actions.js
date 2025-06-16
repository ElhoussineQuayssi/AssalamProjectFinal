"use server"

import { revalidatePath } from "next/cache"
import getDb from './db'
import { hashPassword, comparePasswords, createSession } from './auth'
import { cookies } from "next/headers"

// Message functions
export async function saveMessage(formData) {
  try {
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")
    const type = formData.get("type") || "contact"

    if (!firstName || !lastName || !email || !message) {
      return { success: false, message: "Veuillez remplir tous les champs obligatoires." }
    }

    const db = await getDb()
    await db.run(
      'INSERT INTO messages (firstName, lastName, email, phone, message, type) VALUES (?, ?, ?, ?, ?, ?)',
      [firstName, lastName, email, phone, message, type]
    )

    revalidatePath("/admin/messages")

    return {
      success: true,
      message: "Message envoyé avec succès.",
    }
  } catch {
    return {
      success: false, 
      message: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
    }
  }
}

export async function getMessages() {
  try {
    const db = await getDb()
    const messages = await db.all('SELECT * FROM messages ORDER BY createdAt DESC')
    return { success: true, data: messages }
  } catch {
    return { success: false, message: 'Erreur lors de la récupération des messages' }
  }
}

// Blog functions
export async function saveNewBlog(formData) {
  try {
    const title = formData.get('title')
    const excerpt = formData.get('excerpt')
    const content = formData.get('content')
    const category = formData.get('category')
    const status = formData.get('status')
    const shareOnSocial = formData.get('shareOnSocial') === 'true'
    const image = formData.get('imagePath') // Get the image path from the form data

    if (!title || !excerpt || !content || !category || !status) {
      return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' }
    }

    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .trim()

    const db = await getDb()
    await db.run(
      'INSERT INTO blog_posts (title, slug, excerpt, content, category, status, shareOnSocial, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, slug, excerpt, content, category, status, shareOnSocial, image]
    )

    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)

    return {
      success: true,
      message: 'Article créé avec succès.',
      slug
    }
  } catch {
    return {
      success: false,
      message: 'Une erreur s\'est produite lors de la création de l\'article. Veuillez réessayer.'
    }
  }
}

export async function getBlogs() {
  try {
    const db = await getDb()
    const blogs = await db.all('SELECT * FROM blog_posts ORDER BY createdAt DESC')
    return { success: true, data: blogs }
  } catch {
    return { success: false, message: 'Erreur lors de la récupération des articles' }
  }
}

export async function getBlogById(id) {
  try {
    const db = await getDb()
    const blog = await db.get('SELECT * FROM blog_posts WHERE id = ?', [id])

    if (!blog) {
      return { success: false, message: "Article introuvable." }
    }

    return { success: true, data: blog }
  } catch {
    return { success: false, message: 'Erreur lors de la récupération de l\'article.' }
  }
}

export async function getBlogBySlug(slug) {
  try {
    const db = await getDb()
    const blog = await db.get('SELECT * FROM blog_posts WHERE slug = ?', [slug])

    if (!blog) {
      return { success: false, message: "Article introuvable." }
    }

    return { success: true, data: blog }
  } catch {
    return { success: false, message: 'Erreur lors de la récupération de l\'article.' }
  }
}

export async function incrementBlogViews(slug) {
  try {
    const db = await getDb()
    await db.run('UPDATE blog_posts SET views = views + 1 WHERE slug = ?', [slug])
    return { success: true }
  } catch {
    return { success: false }
  }
}

export async function updateBlog(id, formData) {
  try {
    const title = formData.get('title')
    const excerpt = formData.get('excerpt')
    const content = formData.get('content')
    const category = formData.get('category')
    const status = formData.get('status')
    const shareOnSocial = formData.get('shareOnSocial') === 'true'
    
    if (!title || !excerpt || !content || !category || !status) {
      return { success: false, message: 'Veuillez remplir tous les champs obligatoires.' }
    }
    
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .trim()

    const db = await getDb()
    
    // Check if new slug conflicts with existing ones (except current blog)
    const existing = await db.get('SELECT id FROM blog_posts WHERE slug = ? AND id != ?', [slug, id])
    if (existing) {
      return { success: false, message: 'Un article avec ce titre existe déjà.' }
    }

    await db.run(
      `UPDATE blog_posts 
       SET title = ?, slug = ?, excerpt = ?, content = ?, 
           category = ?, status = ?, shareOnSocial = ?
       WHERE id = ?`,
      [title, slug, excerpt, content, category, status, shareOnSocial, id]
    )

    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)

    return {
      success: true,
      message: 'Article mis à jour avec succès.',
      slug
    }
  } catch {
    return {
      success: false,
      message: 'Une erreur s\'est produite lors de la mise à jour de l\'article.'
    }
  }
}

// Admin functions
export async function login(email, password) {
  try {
    if (!email || !password) {
      return { success: false, message: "Veuillez fournir un email et un mot de passe." }
    }

    const db = await getDb()
    const admin = await db.get('SELECT * FROM admins WHERE email = ?', [email])

    if (!admin) {
      return { success: false, message: "Identifiants incorrects." }
    }

    // Check if account is locked
    if (admin.lockedUntil && new Date(admin.lockedUntil) > new Date()) {
      return { 
        success: false, 
        message: "Compte temporairement verrouillé. Veuillez réessayer plus tard." 
      }
    }

    // Verify password
    const isValidPassword = await comparePasswords(password, admin.password)

    if (!isValidPassword) {
      // Increment failed attempts
      const failedAttempts = (admin.failedAttempts || 0) + 1
      let lockedUntil = null

      // Lock account after 5 failed attempts
      if (failedAttempts >= 5) {
        lockedUntil = new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
      }

      await db.run(
        'UPDATE admins SET failedAttempts = ?, lockedUntil = ? WHERE id = ?',
        [failedAttempts, lockedUntil, admin.id]
      )

      return { success: false, message: "Identifiants incorrects." }
    }

    // Reset failed attempts and update last login
    await db.run(
      'UPDATE admins SET failedAttempts = 0, lockedUntil = NULL, lastLogin = CURRENT_TIMESTAMP WHERE id = ?',
      [admin.id]
    )

    // Create session after successful login
    const sessionResult = await createSession({
      id: admin.id,
      email: admin.email,
      name: admin.name,
      role: admin.role
    })

    if (!sessionResult.success) {
      return { success: false, message: "Erreur de session" }
    }

    return { 
      success: true,
      user: {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        role: admin.role
      }
    }
  } catch {
    return { success: false, message: "Une erreur s'est produite. Veuillez réessayer." }
  }
}

export async function createAdmin(formData) {
  try {
    const email = formData.get('email')
    const password = formData.get('password')
    const name = formData.get('name')
    const role = formData.get('role')

    if (!email || !password || !name || !role) {
      return { success: false, message: 'Tous les champs sont obligatoires' }
    }

    // Password strength validation
    if (password.length < 8 || 
        !/[A-Z]/.test(password) || 
        !/[a-z]/.test(password) || 
        !/[0-9]/.test(password) || 
        !/[^A-Za-z0-9]/.test(password)) {
      return { 
        success: false, 
        message: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.' 
      }
    }

    const hashedPassword = await hashPassword(password)
    const db = await getDb()

    await db.run(
      'INSERT INTO admins (email, password, name, role, lastPasswordChange) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)',
      [email, hashedPassword, name, role]
    )

    return { success: true, message: 'Administrateur créé avec succès' }
  } catch {
    return { success: false, message: 'Erreur lors de la création de l\'administrateur' }
  }
}

export async function updateAdmin(id, formData) {
  try {
    const email = formData.get('email')
    const name = formData.get('name')
    const role = formData.get('role')
    const password = formData.get('password') // Optional - only if changing password

    if (!email || !name || !role) {
      return { success: false, message: 'Email, nom et rôle sont obligatoires' }
    }

    const db = await getDb()
    
    // Check if email exists for other admins
    const existing = await db.get('SELECT id FROM admins WHERE email = ? AND id != ?', [email, id])
    if (existing) {
      return { success: false, message: 'Cet email est déjà utilisé par un autre administrateur.' }
    }

    if (password) {
      // Validate password if provided
      if (password.length < 8 || 
          !/[A-Z]/.test(password) || 
          !/[a-z]/.test(password) || 
          !/[0-9]/.test(password) || 
          !/[^A-Za-z0-9]/.test(password)) {
        return { 
          success: false, 
          message: 'Le nouveau mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.' 
        }
      }
      
      const hashedPassword = await hashPassword(password)
      await db.run(
        `UPDATE admins 
         SET email = ?, name = ?, role = ?, password = ?, lastPasswordChange = CURRENT_TIMESTAMP
         WHERE id = ?`,
        [email, name, role, hashedPassword, id]
      )
    } else {
      await db.run(
        'UPDATE admins SET email = ?, name = ?, role = ? WHERE id = ?',
        [email, name, role, id]
      )
    }

    revalidatePath('/admin/admins')
    
    return { 
      success: true, 
      message: 'Administrateur mis à jour avec succès'
    }
  } catch {
    return { 
      success: false, 
      message: 'Erreur lors de la mise à jour de l\'administrateur' 
    }
  }
}

export async function deleteAdmin(id) {
  try {
    const db = await getDb()
    await db.run('DELETE FROM admins WHERE id = ?', [id])
    return { success: true }
  } catch {
    return { success: false, message: 'Erreur lors de la suppression de l\'administrateur' }
  }
}

export async function getAdmins() {
  try {
    const db = await getDb()
    const admins = await db.all('SELECT id, email, name, role, createdAt, lastLogin FROM admins')
    return { success: true, data: admins }
  } catch {
    return { success: false, message: 'Erreur lors de la récupération des administrateurs' }
  }
}

// Stats function
export async function getStats() {
  try {
    const db = await getDb()

    // Get total blogs and new blogs (last 30 days)
    const totalBlogs = await db.get('SELECT COUNT(*) as count FROM blog_posts')
    const newBlogs = await db.get(
      'SELECT COUNT(*) as count FROM blog_posts WHERE createdAt >= datetime("now", "-30 days")'
    )

    // Get total messages and new messages
    const totalMessages = await db.get('SELECT COUNT(*) as count FROM messages')
    const newMessages = await db.get(
      'SELECT COUNT(*) as count FROM messages WHERE createdAt >= datetime("now", "-30 days")'
    )

    // Get total views and views change
    const totalViews = await db.get('SELECT SUM(views) as count FROM blog_posts')
    const previousViews = await db.get(
      'SELECT SUM(views) as count FROM blog_posts WHERE createdAt < datetime("now", "-30 days")'
    )
    const currentViews = await db.get(
      'SELECT SUM(views) as count FROM blog_posts WHERE createdAt >= datetime("now", "-30 days")'
    )

    // Get recent blogs
    const recentBlogs = await db.all(`
      SELECT id, title, views, createdAt,
        CASE
          WHEN julianday('now') - julianday(createdAt) < 1 
          THEN 'Il y a ' || cast((julianday('now') - julianday(createdAt)) * 24 as integer) || ' heures'
          ELSE 'Il y a ' || cast(julianday('now') - julianday(createdAt) as integer) || ' jours'
        END as date
      FROM blog_posts 
      ORDER BY createdAt DESC LIMIT 3
    `)

    // Get recent messages
    const recentMessages = await db.all(`
      SELECT 
        id,
        firstName || ' ' || lastName as name,
        substr(message, 1, 50) || '...' as excerpt,
        type,
        CASE
          WHEN julianday('now') - julianday(createdAt) < 1 
          THEN 'Il y a ' || cast((julianday('now') - julianday(createdAt)) * 24 as integer) || ' heures'
          ELSE 'Il y a ' || cast(julianday('now') - julianday(createdAt) as integer) || ' jours'
        END as date
      FROM messages 
      ORDER BY createdAt DESC LIMIT 3
    `)

    // Calculate percentages
    const newBlogsPercent = Math.round((newBlogs.count / totalBlogs.count) * 100) || 0
    const newMessagesPercent = Math.round((newMessages.count / totalMessages.count) * 100) || 0
    const viewsChangePercent = previousViews.count 
      ? Math.round(((currentViews.count - previousViews.count) / previousViews.count) * 100)
      : 0

    return {
      success: true,
      totalBlogs: totalBlogs.count,
      newBlogsPercent,
      totalMessages: totalMessages.count,
      newMessagesPercent,
      totalViews: totalViews.count || 0,
      viewsChangePercent,
      recentBlogs,
      recentMessages
    }
  } catch {
    return {
      success: false,
      message: 'Erreur lors de la récupération des statistiques'
    }
  }
}

// Message management functions
export async function deleteMessage(id) {
  try {
    const db = await getDb()
    await db.run('DELETE FROM messages WHERE id = ?', [id])
    revalidatePath('/admin/messages')
    return { success: true }
  } catch {
    return { success: false }
  }
}

export async function markMessageAsRead(id) {
  try {
    const db = await getDb()
    await db.run('UPDATE messages SET status = ? WHERE id = ?', ['read', id])
    revalidatePath('/admin/messages')
    return { success: true }
  } catch {
    return { success: false }
  }
}

export async function clearSession() {
  try {
    const cookieStore = cookies() // No need to await, cookies() is synchronous
    cookieStore.delete("admin-session") // Use the correct cookie name
    return { success: true }
  } catch {
    return { success: false, message: "Erreur lors de la déconnexion." }
  }
}
