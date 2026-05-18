'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const products = [
  { id: 1, name: 'Oversized Tee', price: 189000, emoji: '👕', badge: 'New', desc: 'Kaos oversized premium berbahan katun combed 30s. Nyaman sepanjang hari.', sizes: ['S','M','L','XL'] },
  { id: 2, name: 'Linen Trousers', price: 349000, emoji: '👖', badge: '', desc: 'Celana panjang linen breathable, cocok untuk tampilan kasual maupun semi-formal.', sizes: ['S','M','L','XL','XXL'] },
  { id: 3, name: 'Crop Jacket', price: 529000, emoji: '🧥', badge: 'Sale', desc: 'Jaket crop minimalis dengan detail clean stitching.', sizes: ['S','M','L'] },
  { id: 4, name: 'Ribbed Tank', price: 149000, emoji: '🎽', badge: 'New', desc: 'Tank top ribbed stretch fit, tersedia dalam berbagai warna.', sizes: ['XS','S','M','L'] },
  { id: 5, name: 'Wide Leg Pants', price: 389000, emoji: '👘', badge: '', desc: 'Wide leg pants high-waist dengan bahan twill premium.', sizes: ['S','M','L','XL'] },
  { id: 6, name: 'Knit Cardigan', price: 459000, emoji: '🧶', badge: 'Sale', desc: 'Kardigan rajut medium-weight, perfect layer untuk transisi cuaca.', sizes: ['S','M','L','XL'] },
]

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id))
  const [selectedSize, setSelectedSize] = useState('')
  const [added, setAdded] = useState(false)

  if (!product) return <p className="p-8">Produk tidak ditemukan</p>

  function addToCart() {
    if (!selectedSize) return alert('Pilih ukuran dulu!')
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existing = cart.find((i: any) => i.id === product.id && i.size === selectedSize)
    if (existing) existing.qty++
    else cart.push({ ...product, size: selectedSize, qty: 1 })
    localStorage.setItem('cart', JSON.stringify(cart))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main>
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <span className="text-2xl font-semibold tracking-widest">W</span>
        <div className="flex gap-6 text-sm">
          <Link href="/auth/login">Masuk</Link>
          <Link href="/cart">Keranjang</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-8xl flex items-center justify-center bg-gray-50 rounded-lg aspect-square">
          {product.emoji}
        </div>

        <div className="flex flex-col gap-5">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-700">← Kembali</Link>
          {product.badge && <span className="text-xs px-2 py-1 bg-gray-100 rounded w-fit">{product.badge}</span>}
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-xl">Rp {product.price.toLocaleString('id-ID')}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>

          <div>
            <p className="text-xs tracking-wider text-gray-400 mb-2">UKURAN</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 text-sm border ${selectedSize === s ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 hover:border-gray-600'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button onClick={addToCart} className="btn-primary mt-2">
            {added ? '✓ Ditambahkan!' : '+ Tambah ke Keranjang'}
          </button>
        </div>
      </div>
    </main>
  )
}
