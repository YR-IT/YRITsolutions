# YR-IT Backend

Express + Mongoose API serving Blogs, Portfolio, Careers, and admin login (JWT).

## What changed from the old `backend.zip`

The old backend only had a `Blog` model/route under `/api/blogs`. Your frontend was never
calling that — it was hardcoded to three different old deployed URLs
(`yrmainbackend.vercel.app`, `yrmainbackend.onrender.com`, `friends-backend-u2ve.onrender.com`)
using an `/api/product/...` path scheme. This backend now implements that same scheme,
plus Portfolio, Career and Auth, which didn't exist before.

## 1. Install dependencies

```bash
cd backend
npm install
```

## 2. Set up MongoDB

If you don't already have a database:
1. Create a free cluster at https://www.mongodb.com/cloud/atlas
2. Database Access → add a database user (username/password)
3. Network Access → allow your IP (or `0.0.0.0/0` for local dev)
4. Database → Connect → Drivers → copy the connection string

## 3. Set up Cloudinary (for image uploads)

1. Sign up at https://cloudinary.com
2. Dashboard shows your `Cloud Name`, `API Key`, `API Secret`

## 4. Create your `.env`

```bash
cp .env.example .env
```

Fill in `MONGO_URI`, `JWT_SECRET` (any long random string), and the three `CLOUDINARY_*`
values. The server will refuse to start if `MONGO_URI` or `JWT_SECRET` is missing —
that's intentional, so a misconfigured server fails loudly instead of silently.

## Contact form email

The frontend sends contact requests to `POST /api/contact`. The backend delivers them
through SMTP, so email credentials stay server-side. Add these variables to `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-gmail-address@gmail.com
SMTP_PASS=your-16-character-google-app-password
CONTACT_TO=your-inbox@example.com
```

For Gmail, enable 2-Step Verification at https://myaccount.google.com/security, then
create an App Password at https://myaccount.google.com/apppasswords. Use that generated
16-character password as `SMTP_PASS`; do not use your normal Gmail password. For another
provider, use its SMTP host, port, TLS setting, account username, and SMTP/app password.

## 5. Create your first admin login

The admin panel needs a user to log in as. There's no public signup — create one directly:

```bash
node scripts/createAdmin.js you@example.com yourPassword123
```

## 6. Run it

```bash
npm run dev     # with auto-restart (nodemon)
# or
npm start
```

You should see:
```
✅ MongoDB Connected
🚀 Server running at http://localhost:3001
```

Visit `http://localhost:3001` — you should see a "YR-IT Solutions API is running" message.

## API Reference

All routes are prefixed with the server's base URL (e.g. `http://localhost:3001`).

| Method | Path                              | Auth? | Notes |
|--------|------------------------------------|-------|-------|
| POST   | `/api/auth/login`                  | No    | `{ email, password }` → `{ token, _id, email, role }` |
| GET    | `/api/product/getblogs`            | No    | List all blogs |
| GET    | `/api/product/getblog/:id`         | No    | Single blog |
| POST   | `/api/product/addblogs`            | Yes   | JSON `{title, subtitle, description, content, author, date, image}` OR multipart with `image` file |
| PUT    | `/api/product/updateblogs/:id`     | Yes   | Same as above |
| DELETE | `/api/product/deleteblog/:id`      | Yes   | |
| GET    | `/api/product/getportfolio`        | No    | List all portfolio items |
| POST   | `/api/product/addportfolio`        | Yes   | JSON `{title, category, description, link, image}` OR multipart |
| DELETE | `/api/product/deleteportfolio/:id` | Yes   | |
| GET    | `/api/product/getcareers`          | No    | List all job openings |
| POST   | `/api/product/addcareer`           | Yes   | `{job_number, date, hiring_role, job_type, location}` |
| DELETE | `/api/product/deletecareer/:id`    | Yes   | |

**Auth**: protected routes require header `Authorization: Bearer <token>` — the token
comes from the `/api/auth/login` response and is what the frontend already stores in
`localStorage.getItem('token')`.

## Common problems

- **"Missing required environment variables"** — you haven't created `.env` from `.env.example`, or left `MONGO_URI`/`JWT_SECRET` blank.
- **MongoDB connection error** — check your Atlas IP allowlist and that the password in `MONGO_URI` doesn't contain characters that need URL-encoding (`@`, `#`, etc.).
- **CORS error in the browser console** — add your frontend's exact origin (protocol + host + port) to `CLIENT_ORIGIN` in `.env`, comma-separated.
- **401 on admin actions** — you're not logged in, or the token expired (7 days) — log in again.
