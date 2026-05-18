'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '../../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const router = useRouter()
  const supabase = createClient()

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    })
    if (error) setError('Gagal daftar, coba lagi')
    else setSuccess('Cek email kamu untuk verifikasi!')
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-10 w-full max-w-sm border border-gray-200">
        <h1 className="text-2xl tracking-widest font-semibold text-center mb-2">W</h1>
        <p className="text-center text-sm text-gray-500 mb-8">Buat akun baru</p>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4 text-center">{success}</p>}

        <div className="mb-4">
          <label className="text-xs text-gray-500 tracking-wider">NAMA LENGKAP</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full border border-gray-200 px-3 py-2 mt-1 text-sm focus:outline-none"
            placeholder="Nama kamu"
          />
        </div>

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
            placeholder="Min. 8 karakter"
          />
        </div>

        <button onClick={handleRegister} className="btn-primary w-full text-center">
          Buat Akun
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Sudah punya akun?{' '}
          <Link href="/auth/login" className="underline">Masuk</Link>
        </p>
      </div>
    </main>
  )
}
