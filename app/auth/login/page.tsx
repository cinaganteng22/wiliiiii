'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '../../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError('Email atau password salah')
    else router.push('/')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 w-full max-w-sm border border-gray-200">
        <h1 className="text-2xl tracking-widest font-semibold text-center mb-2">W</h1>
        <p className="text-center text-sm text-gray-500 mb-8">Masuk ke akun kamu</p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="text-xs text-gray-500 tracking-wider">EMAIL</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 mt-1 text-sm focus:outline-none"
            placeholder="nama@email.com"
          />
        </div>

        <div className="mb-6">
          <label className="text-xs text-gray-500 tracking-wider">KATA SANDI</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 mt-1 text-sm focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        <button onClick={handleLogin} className="btn-primary w-full text-center">
          Masuk
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Belum punya akun?{' '}
          <Link href="/auth/register" className="underline">Daftar</Link>
        </p>
      </div>
    </main>
  )
}
