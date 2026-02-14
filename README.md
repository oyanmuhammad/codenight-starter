# 🚀 CodeNight Starter

> **Starter kit Next.js 16 yang super ringan dan siap pakai!** Tanpa bloat, tanpa konfigurasi ribet, langsung coding!

Dibuat dengan stack modern terbaik untuk membangun aplikasi web full-stack yang cepat, aman, dan scalable. Semua sudah dikonfigurasi dengan best practice terbaru, clone and happy coding!

## ✨ Fitur Unggulan

- ⚡ **Next.js 16** - App Router terbaru dengan Server Actions dan `cacheComponents: true`
- 🔐 **Better Auth 1.4** - Autentikasi modern dengan bcrypt password hashing
- 🗄️ **Prisma 7** - ORM terbaik dengan Neon PostgreSQL adapter
- 📤 **UploadThing 7** - Upload file/gambar dengan CDN otomatis
- 🎨 **Tailwind CSS v4** - CSS-first configuration yang lebih cepat
- 🎭 **shadcn/ui** - Komponen UI yang indah dan accessible
- 📝 **TypeScript 5** - Full type-safety di seluruh codebase
- 🏃 **Bun** - Package manager super cepat

## 📦 Apa Aja yang Udah Ada?

Starter kit ini sudah dilengkapi dengan:

### Halaman Siap Pakai
- ✅ **Halaman Landing** (`/`) - Halaman publik dengan panduan quick start
- ✅ **Halaman Login** (`/login`) - Form login dengan validasi dan error handling
- ✅ **Dashboard** (`/dashboard`) - Protected route dengan session check
- ✅ **Upload Demo** - Komponen upload gambar dan file yang sudah jadi

### Fitur Autentikasi
- ✅ Email & Password authentication dengan bcrypt hashing
- ✅ Session management dengan cookie cache
- ✅ Protected routes dengan proxy.ts (Next.js 16)
- ✅ Auto redirect untuk authenticated/unauthenticated users
- ✅ Database seed script untuk admin user

### Database & ORM
- ✅ Prisma schema dengan Better Auth best practice
- ✅ User, Session, Account, dan Verification models
- ✅ PrismaNeon adapter untuk Neon PostgreSQL
- ✅ Migrations dan seeding sudah dikonfigurasi

### File Upload
- ✅ UploadThing integration dengan route handlers
- ✅ Image upload (max 4MB) dengan preview
- ✅ File upload (max 16MB) untuk berbagai tipe
- ✅ Client components dengan progress feedback

## 📁 Struktur Folder

```
codenight-starter/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public routes (tidak perlu login)
│   │   ├── layout.tsx            # Layout untuk halaman publik
│   │   ├── page.tsx              # Landing page
│   │   └── login/                # Halaman login
│   │       └── page.tsx
│   ├── (dashboard)/              # Protected routes (harus login)
│   │   ├── layout.tsx            # Layout dengan header dan auth check
│   │   ├── logout-button.tsx    # Component tombol logout
│   │   └── dashboard/            # Halaman dashboard
│   │       └── page.tsx
│   ├── api/                      # API Routes
│   │   ├── auth/[...all]/        # Better Auth endpoints
│   │   │   └── route.ts
│   │   └── uploadthing/          # UploadThing endpoints
│   │       └── route.ts
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Tailwind CSS v4 config
│
├── components/                   # Reusable components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── ...                   # Dan banyak lagi
│   └── upload/                   # Upload components
│       ├── ImageUpload.tsx       # Component upload gambar
│       └── FileUpload.tsx        # Component upload file
│
├── lib/                          # Core utilities and configs
│   ├── auth.ts                   # Better Auth config (server)
│   ├── auth-client.ts            # Better Auth client (browser)
│   ├── env.ts                    # Environment validation
│   ├── prisma.ts                 # Prisma client singleton
│   ├── uploadthing.ts            # UploadThing router config
│   ├── uploadthing-client.ts    # UploadThing client helpers
│   └── utils.ts                  # Utility functions
│
├── prisma/                       # Prisma files
│   ├── schema.prisma             # Database schema
│   └── seed.ts                   # Database seeding script
│
├── generated/                    # Prisma generated client (auto-generated)
│
├── proxy.ts                      # Route protection (Next.js 16)
├── prisma.config.ts              # Prisma v7 config
├── next.config.ts                # Next.js config
├── tailwind.config.ts            # Tailwind v4 config
├── tsconfig.json                 # TypeScript config
├── eslint.config.mjs             # ESLint flat config
└── .env.example                  # Template environment variables
```

## 🎯 Penjelasan Folder Utama

### `app/`
Folder utama Next.js App Router. Dibagi menjadi route groups:
- **(public)** - Routes yang bisa diakses tanpa login
- **(dashboard)** - Routes yang memerlukan autentikasi
- **api/** - API endpoints untuk auth dan upload

### `components/`
Komponen React reusable:
- **ui/** - shadcn/ui components dengan radix-nova style
- **upload/** - Komponen khusus untuk upload file/gambar

### `lib/`
Core logic dan konfigurasi:
- **auth.ts** - Konfigurasi Better Auth dengan bcrypt
- **prisma.ts** - Singleton Prisma client dengan Neon adapter
- **uploadthing.ts** - File router untuk upload handling
- **env.ts** - Validasi environment variables

### `prisma/`
Database schema dan seeding:
- **schema.prisma** - Model database (user, session, account, verification)
- **seed.ts** - Script untuk membuat admin user default

## 🚀 Cara Setup

### 1️⃣ Clone & Install

```bash
git clone <repo-url> my-app
cd my-app
bun install
```

### 2️⃣ Setup Environment Variables

Copy `.env.example` menjadi `.env` dan isi dengan kredensial Anda:

```bash
cp .env.example .env
```

**Isi file `.env`:**

```env
# Database - Neon PostgreSQL connection string
DATABASE_URL=postgresql://user:password@host/database

# Admin User - Untuk database seeding
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password

# Better Auth - Generate dengan: openssl rand -base64 32
BETTER_AUTH_SECRET=your-super-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# UploadThing - Dapatkan dari https://uploadthing.com/dashboard
UPLOADTHING_TOKEN=your-uploadthing-token
```

**Cara dapat kredensial:**

- **DATABASE_URL**: Buat database di [Neon](https://neon.tech) (gratis)
- **BETTER_AUTH_SECRET**: Generate dengan `openssl rand -base64 32`
- **UPLOADTHING_TOKEN**: Daftar di [UploadThing](https://uploadthing.com) dan buat app baru

### 3️⃣ Setup Database

```bash
# Generate Prisma Client
bun run db:generate

# Jalankan migrations (buat tabel di database)
bun run db:migrate

# Seed database dengan admin user
bun run db:seed
```

### 4️⃣ Jalankan Development Server

```bash
bun run dev
```

Buka [http://localhost:3000](http://localhost:3000) - aplikasi sudah jalan! 🎉

### 5️⃣ Login

- Buka [http://localhost:3000/login](http://localhost:3000/login)
- Login dengan email & password yang Anda set di `.env`
- Akan redirect ke dashboard otomatis

## 🛠️ Available Scripts

```bash
bun run dev          # Jalankan development server
bun run build        # Build untuk production
bun run start        # Jalankan production server
bun run lint         # Jalankan ESLint
bun run typecheck    # Jalankan TypeScript type checking

bun run db:generate  # Generate Prisma Client
bun run db:migrate   # Jalankan database migrations
bun run db:seed      # Seed database dengan admin user
bun run db:studio    # Buka Prisma Studio (GUI database)
```

## 🎨 Kustomisasi

### Ubah Tema Warna

Edit `app/globals.css` untuk mengubah color scheme:

```css
@layer theme {
  :root {
    --color-background: 0 0% 100%;
    --color-foreground: 240 10% 3.9%;
    /* Ubah warna lainnya di sini */
  }
}
```

### Tambah Model Database

1. Edit `prisma/schema.prisma`
2. Jalankan `bun run db:migrate`
3. Prisma akan generate TypeScript types otomatis

### Tambah Upload Route Baru

Edit `lib/uploadthing.ts` dan tambahkan route baru:

```ts
export const uploadRouter = {
  // Route yang sudah ada
  imageUploader: f({ image: { maxFileSize: "4MB" } })...
  
  // Route baru
  videoUploader: f({ video: { maxFileSize: "64MB" } })
    .middleware(async () => {
      const session = await auth.api.getSession({ headers: await headers() });
      if (!session) throw new UploadThingError("Unauthorized");
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId, url: file.ufsUrl };
    }),
};
```

## 🔐 Keamanan

Starter ini sudah dikonfigurasi dengan best practice security:

- ✅ **bcrypt** password hashing (10 rounds)
- ✅ **CSRF protection** via Better Auth
- ✅ **Session cookies** dengan HttpOnly flag
- ✅ **Environment validation** di runtime
- ✅ **Type-safe** database queries
- ✅ **Protected routes** dengan proxy.ts
- ✅ **No deprecated APIs** - semua menggunakan v7/v16 latest

## 📚 Tech Stack Details

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework dengan App Router |
| React | 19.2.3 | UI library terbaru |
| TypeScript | 5.x | Type safety |
| Prisma | 7.4.0 | Database ORM |
| Better Auth | 1.4.18 | Authentication |
| UploadThing | 7.7.4 | File uploads & CDN |
| Tailwind CSS | 4.x | Utility-first CSS |
| shadcn/ui | Latest | UI components |
| Bun | Latest | Package manager & runtime |
| bcrypt | 6.0.0 | Password hashing |

## 🔥 Kenapa Starter Ini?

- **Ringan**: Hanya library yang benar-benar dipakai
- **Modern**: Semua library versi terbaru (2026)
- **No Bloat**: Tanpa konfigurasi yang tidak perlu
- **Best Practice**: Ikuti official docs dari setiap library
- **Type-Safe**: 100% TypeScript dengan strict mode
- **Production Ready**: Siap deploy ke Vercel/Netlify
- **Developer Experience**: Auto-reload, error overlay, type hints
- **Documented**: Semua file ada penjelasannya

## 🚨 Troubleshooting

### Error: `Prisma Client not generated`
```bash
bun run db:generate
```

### Error: `Environment variable not found`
Pastikan semua env vars di `.env.example` sudah diisi di `.env`

### Error: Upload gagal
- Cek `UPLOADTHING_TOKEN` sudah benar
- Pastikan ukuran file tidak melebihi limit

### Error: Login redirect loop
- Clear cookies browser
- Cek `BETTER_AUTH_URL` dan `NEXT_PUBLIC_APP_URL` sama

## 📄 License

MIT - Bebas digunakan untuk project apapun!

## 🤝 Contributing

Contributions, issues, dan feature requests sangat diterima!

---

**Happy Coding!** 🎉

Dibuat dengan ❤️ menggunakan stack terbaik 2026
