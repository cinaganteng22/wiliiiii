<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modista - Toko Baju Premium</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom CSS */
        :root {
            --primary: #5e72e4;
            --secondary: #f7fafc;
            --accent: #ff6b6b;
            --dark: #2d3748;
            --light: #ffffff;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--secondary);
            color: var(--dark);
        }

        .hero {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://placehold.co/1920x1080');
            background-size: cover;
            background-position: center;
            height: 60vh;
        }

        .product-card {
            transition: all 0.3s ease;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .nav-link {
            position: relative;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background: var(--accent);
            bottom: -2px;
            left: 0;
            transition: width 0.3s;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .brand-logo {
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            letter-spacing: 2px;
        }

        @media (max-width: 768px) {
            .hero {
                height: 40vh;
            }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <span class="brand-logo text-2xl text-indigo-600">MODISTA</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="nav-link text-gray-700 hover:text-indigo-600">Beranda</a>
                    <a href="#produk" class="nav-link text-gray-700 hover:text-indigo-600">Produk</a>
                    <a href="#tentang" class="nav-link text-gray-700 hover:text-indigo-600">Tentang</a>
                    <a href="#kontak" class="nav-link text-gray-700 hover:text-indigo-600">Kontak</a>
                </div>
                <div class="flex items-center space-x-4">
                    <button id="cart-btn" class="relative p-2 text-gray-700 hover:text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span id="cart-count" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </button>
                    <button class="md:hidden p-2 text-gray-700" id="mobile-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile menu -->
        <div class="md:hidden hidden bg-white" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Beranda</a>
                <a href="#produk" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Produk</a>
                <a href="#tentang" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Tentang</a>
                <a href="#kontak" class="block px-3 py-2 text-gray-700 hover:text-indigo-600">Kontak</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero flex items-center justify-center text-center text-white">
        <div class="px-4">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">Koleksi Musim Panas</h1>
            <p class="text-xl mb-8">Temukan gaya terbaikmu dengan koleksi eksklusif kami</p>
            <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold">Belanja Sekarang</button>
        </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-semibold text-center mb-12">Kategori Pilihan</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="relative rounded-xl overflow-hidden group">
                    <img src="https://placehold.co/600x900" alt="Pria berdiri memakai kemeja biru dan celana chino dengan gaya kasual" class="w-full h-64 object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium">Pria</button>
                    </div>
                </div>
                <div class="relative rounded-xl overflow-hidden group">
                    <img src="https://placehold.co/600x900" alt="Wanita memakai dress musim panas warna pastel dengan topi lebar" class="w-full h-64 object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium">Wanita</button>
                    </div>
                </div>
                <div class="relative rounded-xl overflow-hidden group">
                    <img src="https://placehold.co/600x900" alt="Anak laki-laki dan perempuan bermain dengan gaya pakaian yang serasi" class="w-full h-64 object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium">Anak-Anak</button>
                    </div>
                </div>
                <div class="relative rounded-xl overflow-hidden group">
                    <img src="https://placehold.co/600x900" alt="Aksesoris fashion modern termasuk jam tangan, ikat pinggang, dan kacamata hitam" class="w-full h-64 object-cover">
                    <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="bg-white text-indigo-600 px-4 py-2 rounded-full font-medium">Aksesoris</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="produk" class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-semibold text-center mb-12">Produk Terbaru</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Product 1 -->
                <div class="product-card bg-white rounded-lg overflow-hidden">
                    <div class="relative">
                        <img src="https://placehold.co/600x800" alt="Kemeja slim fit garis-garis biru laut dengan detail kerah semi-formal untuk pria" class="w-full h-80 object-cover">
                        <div class="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">NEW</div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-1">Kemeja Garis Biru</h3>
                        <p class="text-gray-600 mb-3">Rp 349.000</p>
                        <div class="flex justify-between items-center">
                            <button class="add-to-cart bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm" data-id="1" data-name="Kemeja Garis Biru" data-price="349000">
                                + Keranjang
                            </button>
                            <button class="text-gray-500 hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 2 -->
                <div class="product-card bg-white rounded-lg overflow-hidden">
                    <div class="relative">
                        <img src="https://placehold.co/600x800" alt="Blouse wanita warna peach dengan potongan oversized dan detail renda" class="w-full h-80 object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-1">Blouse Peach</h3>
                        <p class="text-gray-600 mb-3">Rp 279.000</p>
                        <div class="flex justify-between items-center">
                            <button class="add-to-cart bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm" data-id="2" data-name="Blouse Peach" data-price="279000">
                                + Keranjang
                            </button>
                            <button class="text-gray-500 hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="product-card bg-white rounded-lg overflow-hidden">
                    <div class="relative">
                        <img src="https://placehold.co/600x800" alt="Celana chino pria warna khaki dengan potongan slim fit dan bahan elastis" class="w-full h-80 object-cover">
                        <div class="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">20% OFF</div>
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-1">Celana Chino Khaki</h3>
                        <p class="text-gray-600 mb-1"><span class="line-through text-red-500">Rp 399.000</span> Rp 319.200</p>
                        <div class="flex justify-between items-center">
                            <button class="add-to-cart bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm" data-id="3" data-name="Celana Chino Khaki" data-price="319200">
                                + Keranjang
                            </button>
                            <button class="text-gray-500 hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 4 -->
                <div class="product-card bg-white rounded-lg overflow-hidden">
                    <div class="relative">
                        <img src="https://placehold.co/600x800" alt="Gaun midi wanita warna hijau army dengan potongan A-line dan bahan katun" class="w-full h-80 object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="font-semibold text-lg mb-1">Gaun Midi Hijau Army</h3>
                        <p class="text-gray-600 mb-3">Rp 459.000</p>
                        <div class="flex justify-between items-center">
                            <button class="add-to-cart bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm" data-id="4" data-name="Gaun Midi Hijau Army" data-price="459000">
                                + Keranjang
                            </button>
                            <button class="text-gray-500 hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="tentang" class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="md:flex items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <img src="https://placehold.co/800x500" alt="Tim Modista sedang bekerja di kantor modern dengan suasana kreatif" class="rounded-lg shadow-lg">
                </div>
                <div class="md:w-1/2 md:pl-12">
                    <h2 class="text-3xl font-semibold mb-6">Tentang Modista</h2>
                    <p class="text-gray-600 mb-4">Modista didirikan pada tahun 2020 dengan visi untuk membawa gaya fashion modern yang terjangkau untuk semua orang. Kami percaya bahwa setiap orang berhak terlihat baik tanpa harus mengorbankan kenyamanan atau anggaran.</p>
                    <p class="text-gray-600 mb-6">Koleksi kami dirancang dengan memperhatikan detail, kualitas bahan, dan tren terkini. Kami bekerja langsung dengan produsen untuk memastikan harga terbaik tanpa kompromi pada kualitas.</p>
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold">Pelajari Lebih Lanjut</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-semibold text-center mb-12">Apa Kata Pelanggan</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="https://placehold.co/200x200" alt="Wanita muda tersenyum dengan gaya rambut pendek dan latar belakang kuning" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold">Sarah Wijaya</h4>
                            <p class="text-gray-500 text-sm">Pelanggan sejak 2021</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"Saya selalu menemukan barang-barang unik di Modista. Kualitasnya sangat baik dengan harga yang masuk akal."</p>
                    <div class="flex mt-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="https://placehold.co/200x200" alt="Pria dewasa memakai kemeja biru dengan senyum ramah di latar belakang kantor" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold">Andi Rahman</h4>
                            <p class="text-gray-500 text-sm">Pelanggan sejak 2022</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"Pengiriman cepat dan packing aman. Saya sudah membeli beberapa kali untuk hadiah dan selalu puas."</p>
                    <div class="flex mt-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-white p-6 rounded-lg shadow-sm">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img src="https://placehold.co/200x200" alt="Ibu muda memegang tas belanja sambil tersenyum di depan toko fashion" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h4 class="font-semibold">Dewi Sari</h4>
                            <p class="text-gray-500 text-sm">Pelanggan sejak 2020</p>
                        </div>
                    </div>
                    <p class="text-gray-600">"Koleksi anak-anaknya lucu-lucu dan bahannya nyaman dipakai. Anak saya selalu memilih baju dari Modista dulu."</p>
                    <div class="flex mt-4">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="py-12 bg-indigo-600 text-white">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-3xl font-semibold mb-6">Dapatkan Penawaran Eksklusif</h2>
            <p class="max-w-2xl mx-auto mb-8">Berlangganan newsletter kami untuk mendapatkan diskon khusus, informasi produk terbaru, dan tips fashion langsung di email Anda.</p>
            <div class="max-w-md mx-auto flex">
                <input type="email" placeholder="Alamat email Anda" class="flex-grow px-4 py-3 rounded-l-full focus:outline-none text-gray-800">
                <button class="bg-indigo-800 hover:bg-indigo-900 px-6 py-3 rounded-r-full font-semibold">Berlangganan</button>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="kontak" class="py-12 bg-white">
        <div class="
