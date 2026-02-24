# 🚀 CodeNight Starter

> **Lightweight, production-ready Next.js 16 starter kit!** No bloat, no complicated config, ready to code!

🌐 **Languages:** [English](README.md) | [Bahasa Indonesia](README.id.md)

Using modern stack of choice with clean configuration and following the latest best practice standards. Ready to help you build fast, secure, and scalable full-stack web applications from the start. Happy coding! 🎉

## ✨ Highlights

- ⚡ **Next.js 16** - Latest App Router with Server Actions and `cacheComponents: true`
- 🔐 **Better Auth 1.4** - Modern authentication with built-in Argon2/scrypt password hashing and multi-session support
- 🗄️ **Prisma 7** - Best ORM with Neon PostgreSQL adapter
- 📤 **UploadThing 7** - File/image uploads with automatic CDN
- 🎨 **Tailwind CSS v4** - CSS-first configuration that's faster
- 🎭 **shadcn/ui** - Beautiful and accessible UI components
- 📝 **TypeScript 5** - Full type-safety across the entire codebase
- 🏃 **Bun** - Super fast package manager

## 📦 What's Included?

This starter kit comes pre-configured with:

### Ready-to-use Pages
- ✅ **Landing Page** (`/`) - Public page with quick start guide
- ✅ **Login Page** (`/login`) - Login form with validation and error handling
- ✅ **Dashboard** (`/dashboard`) - Protected route with session check
- ✅ **Upload Demo** - Pre-built image and file upload components

### Authentication Features
- ✅ Email & password authentication with Better Auth native hashing
- ✅ Multiple concurrent sessions (multiSession plugin)
- ✅ Cross-origin support with CORS headers
- ✅ Session management with cookie cache
- ✅ Protected routes with proxy.ts (Next.js 16)
- ✅ Auto redirect for authenticated/unauthenticated users
- ✅ Database seed script for admin user

### Database & ORM
- ✅ Prisma schema following Better Auth best practice
- ✅ User, Session, Account, and Verification models
- ✅ PrismaNeon adapter for Neon PostgreSQL
- ✅ Migrations and seeding pre-configured

### File Upload
- ✅ UploadThing integration with route handlers
- ✅ Image upload (max 4MB) with preview
- ✅ File upload (max 16MB) for various types
- ✅ Client components with progress feedback

## 📁 Folder Structure

```
codenight-starter/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public routes (no login required)
│   │   ├── layout.tsx            # Layout for public pages
│   │   ├── page.tsx              # Landing page
│   │   └── login/                # Login page
│   │       └── page.tsx
│   ├── (dashboard)/              # Protected routes (login required)
│   │   ├── layout.tsx            # Layout with header and auth check
│   │   ├── logout-button.tsx     # Logout button component
│   │   └── dashboard/            # Dashboard page
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
│   │   └── ...                   # And many more
│   └── upload/                   # Upload components
│       ├── ImageUpload.tsx       # Image upload component
│       └── FileUpload.tsx        # File upload component
│
├── lib/                          # Core utilities and configs
│   ├── auth.ts                   # Better Auth config (server)
│   ├── auth-client.ts            # Better Auth client (browser)
│   ├── env.ts                    # Environment validation
│   ├── prisma.ts                 # Prisma client singleton
│   ├── uploadthing.ts            # UploadThing router config
│   ├── uploadthing-client.ts     # UploadThing client helpers
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

## 🎯 Main Folders Explained

### `app/`
Main Next.js App Router folder. Divided into route groups:
- **(public)** - Routes accessible without login
- **(dashboard)** - Routes requiring authentication
- **api/** - API endpoints for auth and uploads

### `components/`
Reusable React components:
- **ui/** - shadcn/ui components with radix-nova style
- **upload/** - Special components for file/image uploads

### `lib/`
Core logic and configuration:
- **auth.ts** - Better Auth configuration with native hashing and multiSession
- **prisma.ts** - Singleton Prisma client with Neon adapter
- **uploadthing.ts** - File router for upload handling
- **env.ts** - Environment variables validation

### `prisma/`
Database schema and seeding:
- **schema.prisma** - Database models (user, session, account, verification)
- **seed.ts** - Script to create default admin user

## 🚀 Setup Guide

### 0️⃣ Install Bun (if not already installed)

This starter uses **Bun** as the package manager. Install it first:

**On macOS/Linux:**
```bash
curl -fsSL https://bun.sh/install | bash
```

**On Windows (PowerShell):**
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Or using npm:**
```bash
npm install -g bun
```

Verify installation:
```bash
bun --version
```

### 1️⃣ Clone & Install

```bash
git clone https://github.com/oyanmuhammad/codenight-starter my-app
cd my-app
bun install
```

### 2️⃣ Setup Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

**Fill in the `.env` file:**

```env
# Database - Neon PostgreSQL connection string
DATABASE_URL=postgresql://user:password@host/database

# Admin User - For database seeding
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your-secure-password

# Better Auth - Generate with: openssl rand -base64 32
BETTER_AUTH_SECRET=your-super-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

# UploadThing - Get from https://uploadthing.com/dashboard
UPLOADTHING_TOKEN=your-uploadthing-token
```

**How to get credentials:**

- **DATABASE_URL**: Create database at [Neon](https://neon.tech) (free)
- **BETTER_AUTH_SECRET**: Generate with `openssl rand -base64 32`
- **UPLOADTHING_TOKEN**: Sign up at [UploadThing](https://uploadthing.com) and create a new app

### 3️⃣ Setup Database

```bash
# Generate Prisma Client
bun run db:generate

# Run migrations (create tables in database)
bun run db:migrate

# Seed database with admin user
bun run db:seed
```

### 4️⃣ Run Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) - your app is running! 🎉

### 5️⃣ Login

- Open [http://localhost:3000/login](http://localhost:3000/login)
- Login with email & password you set in `.env`
- Auto redirect to dashboard

## 🛠️ Available Scripts

```bash
bun run dev          # Run development server
bun run build        # Build for production
bun run start        # Run production server
bun run lint         # Run ESLint
bun run typecheck    # Run TypeScript type checking

bun run db:generate  # Generate Prisma Client
bun run db:migrate   # Run database migrations
bun run db:seed      # Seed database with admin user
bun run db:studio    # Open Prisma Studio (database GUI)
```

## 🎨 Customization

### Change Theme Colors

Edit `app/globals.css` to change the color scheme:

```css
@layer theme {
  :root {
    --color-background: 0 0% 100%;
    --color-foreground: 240 10% 3.9%;
    /* Change other colors here */
  }
}
```

### Add Database Model

1. Edit `prisma/schema.prisma`
2. Run `bun run db:migrate`
3. Prisma will automatically generate TypeScript types

### Add New Upload Route

Edit `lib/uploadthing.ts` and add a new route:

```ts
export const uploadRouter = {
  // Existing routes
  imageUploader: f({ image: { maxFileSize: "4MB" } })...
  
  // New route
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

## 🔐 Security

This starter is configured with security best practices:

- ✅ **Better Auth native hashing** (Argon2/scrypt, built-in)
- ✅ **CSRF protection** via Better Auth
- ✅ **Session cookies** with HttpOnly flag
- ✅ **Environment validation** at runtime
- ✅ **Type-safe** database queries
- ✅ **Protected routes** with proxy.ts

## 📚 Tech Stack Details

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router |
| React | 19.2.3 | Modern UI library |
| TypeScript | 5.x | Type safety |
| Prisma | 7.4.0 | Database ORM |
| Better Auth | 1.4.18 | Authentication with native hashing |
| UploadThing | 7.7.4 | File uploads & CDN |
| Tailwind CSS | 4.x | Utility-first CSS |
| shadcn/ui | Latest | UI components |
| Bun | Latest | Package manager & runtime |

## 🔥 Why This Starter?

- **Lightweight**: Only libraries that are truly needed
- **Modern**: All libraries at their latest versions (2026)
- **No Bloat**: Without unnecessary configuration
- **Best Practices**: Following official docs from each library
- **Type-Safe**: 100% TypeScript with strict mode
- **Production Ready**: Ready to deploy on Vercel/Netlify
- **Developer Experience**: Auto-reload, error overlay, type hints
- **Documented**: Every file is well-explained

## 🚨 Troubleshooting

### Error: `Prisma Client not generated`
```bash
bun run db:generate
```

### Error: `Environment variable not found`
Make sure all env vars from `.env.example` are filled in `.env`

### Error: Upload failed
- Check `UPLOADTHING_TOKEN` is correct
- Make sure file size doesn't exceed the limit

### Error: Login redirect loop
- Clear browser cookies
- Check `BETTER_AUTH_URL` and `NEXT_PUBLIC_APP_URL` are the same

## 🛠️ Troubleshooting: Cross-Origin Dev Error

### Blocked cross-origin request from 192.168.x.x or localhost

If you see errors like:

> Blocked cross-origin request from 192.168.x.x to /_next/* resource. To allow this, configure "allowedDevOrigins" in next.config

**Solution:**
- Open `next.config.ts` and make sure `allowedDevOrigins` includes:
  - `localhost`
  - `localhost:3000`
  - `127.0.0.1`
  - `127.0.0.1:3000`
  - For your local LAN IP, for example `192.168.1.12`, check the `network` section when running `bun run dev` in the terminal to find your local LAN IP address.
- Restart your dev server after editing config.
- If your dev server runs on a different port (e.g. 3001), add that port to the list.

**Example config:**
```typescript
allowedDevOrigins: [
  "localhost",
  "localhost:3000",
  "127.0.0.1",
  "127.0.0.1:3000",
  "192.168.1.12" // Local LAN IP obtained from the network when running the dev server
]
```

This ensures your local devices and LAN IPs can access the Next.js dev server without CORS errors.

## 📄 License

MIT - Free to use for any project!

## 🤝 Contributing

Contributions, issues, and feature requests are very welcome!

---

**Happy Coding!** 🎉

Built with ❤️ for the developer community. Hope this starter kit helps you build amazing web applications with Next.js 16 and the latest modern stack! 🚀
