# Deligo Frontend

**Deligo** adalah aplikasi berbasis web yang menyediakan platform untuk mengelola produk dan akun pengguna. Proyek ini masih dalam tahap pengembangan dengan fokus utama pada tampilan antarmuka pengguna (UI) dan beberapa fitur dasar yang akan diperluas di masa depan.

---

## Fitur yang Tersedia

### 1. **Halaman Home**
   Halaman utama yang memberikan gambaran umum tentang platform Deligo. Pengguna dapat melihat berbagai produk yang tersedia dan menavigasi ke halaman lainnya seperti login atau daftar produk.

### 2. **Halaman Produk**
   Menampilkan daftar produk yang dapat dipilih oleh pengguna. Setiap produk dilengkapi dengan gambar, harga, dan deskripsi singkat untuk membantu pengguna memilih produk yang diinginkan.

### 3. **Halaman Detail Produk**
   Halaman detail produk yang memberikan informasi lebih mendalam tentang produk yang dipilih. Di sini, pengguna dapat melihat spesifikasi, harga, dan opsi lainnya.

### 4. **Halaman Login**
   Fitur login untuk pengguna yang sudah terdaftar. Pengguna dapat memasukkan username dan password untuk mengakses akun mereka di platform Deligo.

### 5. **Halaman Register**
   Halaman pendaftaran akun baru bagi pengguna yang belum memiliki akun. Pengguna akan diminta untuk mengisi informasi seperti nama, email, username, password, dan informasi kontak lainnya.

### 6. **Halaman Activate Akun**
   Fitur untuk mengaktifkan akun setelah pendaftaran atau pemulihan password. Pengguna akan menerima instruksi melalui email untuk mengaktifkan akun mereka sebelum dapat mengakses fitur platform.

### 7. **Halaman Forgot Password**
   Fitur pemulihan akun untuk pengguna yang lupa password mereka. Pengguna dapat memasukkan email terdaftar untuk menerima instruksi pemulihan password.

### 8. **Dashboard Manajemen Produk**
   Halaman dashboard untuk administrator yang memungkinkan mereka mengelola produk di platform **DeliGo**. Administrator Merchant nantinya dapat menambah, mengedit, atau menghapus produk. Fitur ini sedang dalam pengembangan dan akan diperluas di masa mendatang.

---

## Teknologi yang Digunakan

- **React + Vite**: Untuk membangun antarmuka pengguna (UI) dinamis dan interaktif.
- **Tailwind CSS**: Untuk styling yang responsif dan fleksibel, memungkinkan desain yang konsisten dan modern.
- **Framer Motion**: Untuk animasi dan transisi halus pada elemen-elemen UI.
- **Vite**: Alat pengembangan yang cepat dan efisien untuk aplikasi React.

---

## Instalasi dan Pengaturan

1. **Clone repositori ini ke komputer Anda**:
   ```bash
   git clone https://github.com/Hanifama/Deligo-FE.git

2. **Instal dependensi menggunakan npm atau yarn**
   ```bash
   npm install

3. **Jalankan aplikasi di server lokal**
   ```bash
   npm run dev

## Rencana Pengembangan Selanjutnya
- Fitur Pengelolaan Produk Lanjutan: Menambah, mengedit, dan menghapus produk dengan lebih banyak opsi dan kontrol.
- Fitur Pembayaran dan Pemesanan: Menyediakan sistem pembayaran untuk pengguna yang ingin membeli produk.
- Autentikasi dan Otorisasi Lebih Lanjut: Penambahan role-based access control (RBAC) untuk administrator dan pengguna biasa.
- Integrasi API: Mengambil data produk secara dinamis untuk memperkaya pengalaman pengguna.