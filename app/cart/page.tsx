'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Cart() {
  const [cart, setCart] = useState<any[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cart') || '[]')
    setCart(saved)
  }, [])

  function removeItem(index: number) {
    const updated = cart.filter((_, i) => i !== index)
    setCart(updated)
    localStorage.setItem('cart', JSON.stringify(updated))
  }

  const subtotal = cart.reduce((a, i) => a + i.price * i.qty, 0)
  const ongkir = cart.length > 0 ? 25000 : 0

  return (
    <main>
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <span className="text-2xl font-semibold tracking-widest">W</span>
        <div className="flex gap-6 text-sm">
          <Link href="/auth/login">Masuk</Link>
          <Link href="/">Belanja</Link>
        </div>
      </nav>

      <div className="max-w-lg mx-auto p-8">
        <h1 className="text-2xl font-semibold tracking-tight mb-8">Keranjang Belanja</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-4xl mb-4">🛍️</p>
            <p className="mb-4">Keranjang masih kosong</p>
            <Link href="/" className="underline text-sm">Mulai belanja</Link>
          </div>
        ) : (
          <>
            {cart.map((item, i) => (
              <div key={i} className="flex gap-4 py-4 border-b border-gray-100 items-center">
                <div className="text-4xl w-16 h-20 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-400 mt-1">Ukuran: {item.size} · Qty: {item.qty}</p>
                  <p className="text-sm font-medium mt-1">Rp {(item.price * item.qty).toLocaleString('id-ID')}</p>
                </div>
                <button onClick={() => removeItem(i)} className="text-gray-300 hover:text-red-400 text-lg">✕</button>
              </div>
            ))}

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Ongkir</span>
                <span>Rp {ongkir.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-3 border-t border-gray-200">
                <span>Total</span>
                <span>Rp {(subtotal + ongkir).toLocaleString('id-ID')}</span>
              </div>
            </div>

            <button className="btn-primary w-full mt-6">
              Lanjut ke Pembayaran →
            </button>
          </>
        )}
      </div>
    </main>
  )
}
