import Link from 'next/link'

const products = [
  { id: 1, name: 'Oversized Tee', price: 189000, emoji: '👕', badge: 'New' },
  { id: 2, name: 'Linen Trousers', price: 349000, emoji: '👖', badge: '' },
  { id: 3, name: 'Crop Jacket', price: 529000, emoji: '🧥', badge: 'Sale' },
  { id: 4, name: 'Ribbed Tank', price: 149000, emoji: '🎽', badge: 'New' },
  { id: 5, name: 'Wide Leg Pants', price: 389000, emoji: '👘', badge: '' },
  { id: 6, name: 'Knit Cardigan', price: 459000, emoji: '🧶', badge: 'Sale' },
]

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <span className="text-2xl font-semibold tracking-widest">W</span>
        <div className="flex gap-6 text-sm">
          <Link href="/auth/login">Masuk</Link>
          <Link href="/cart">Keranjang</Link>
        </div>
      </nav>

      <div className="text-center py-16 border-b border-gray-200">
        <p className="text-xs tracking-widest text-gray-400 mb-3">NEW COLLECTION 2026</p>
        <h1 className="text-5xl font-semibold tracking-tight mb-4">Wear Your Identity</h1>
        <p className="text-gray-500 mb-8">Fashion minimal. Kualitas premium.</p>
        <button className="btn-primary">Lihat Koleksi</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-200 mt-8">
        {products.map(p => (
          <Link href={`/product/${p.id}`} key={p.id}>
            <div className="bg-white p-6 hover:bg-gray-50 cursor-pointer">
              <div className="text-6xl text-center py-8 bg-gray-50 rounded mb-4">{p.emoji}</div>
              {p.badge && (
                <span className="text-xs px-2 py-1 bg-gray-100 rounded mb-2 inline-block">{p.badge}</span>
              )}
              <p className="font-medium text-sm">{p.name}</p>
              <p className="text-gray-500 text-sm">Rp {p.price.toLocaleString('id-ID')}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
