"use server"

import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'

const SALT_ROUNDS = 10
const sessionOptions = {
  password: process.env.SESSION_SECRET || 'complex-password-at-least-32-characters-long',
  cookieName: 'admin-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  },
}

export async function hashPassword(password) {
  return bcrypt.hash(password, SALT_ROUNDS)
}

export async function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword)
}

export async function createSession(userData) {
  const cookieStore = await cookies()
  cookieStore.set(sessionOptions.cookieName, JSON.stringify(userData), {
    secure: sessionOptions.cookieOptions.secure,
    httpOnly: true,
    maxAge: 3600 // 1 hour
  })
  return { success: true }
}

export async function getSession() {
  try {
    const cookieStore = await cookies()
    const sessionData = cookieStore.get(sessionOptions.cookieName)
    if (!sessionData || !sessionData.value) {
      return null // No session found
    }
    return JSON.parse(sessionData.value) // Return parsed session data
  } catch (error) {
    console.error('Session error:', error)
    return null
  }
}

export async function clearSession() {
  const cookieStore = await cookies()
  cookieStore.delete(sessionOptions.cookieName)
  return { success: true }
}
