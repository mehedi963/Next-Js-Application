# 🚀 Next.js Product App

## 📌 Short Description
A simple application built with **Next.js 15 (App Router)** and **NextAuth.js** that demonstrates public and protected routes with basic authentication.  
Users can view a landing page, browse products, see product details, and after logging in, access a protected dashboard to add new products.

---

## 🔗 Links
- **Live Site (Vercel):** [Your Live Site Here](https://your-project.vercel.app)  

---

## ⚙️ Setup & Installation 

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Create Environment Variables
Create a .env.local file in the root folder. Example:

ini
Copy
Edit
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

DATABASE_URL=your-database-url-or-json-file
4️⃣ Run the Project
Start development server:

bash
Copy
Edit
npm run dev
Now open http://localhost:3000 🎉

📍 Route Summary
🔹 Public Routes
/ → Landing Page (Navbar, Hero, Product Highlights, Footer)

/login → Login Page (NextAuth with Google or credentials)

/products → Product List Page (shows all products)

/products/[id] → Product Details Page

🔹 Protected Routes
/dashboard/add-product → Add Product Page

Requires authentication

Redirects unauthenticated users to /login

Provides a form to add products to the database

🔹 API Routes (via Route Handlers /api)
GET /api/products → Fetch all products

GET /api/products/[id] → Fetch single product

POST /api/products → Add new product (protected)

🛠️ Tech Stack
Framework: Next.js 15 (App Router)

Authentication: NextAuth.js

Database: Mock JSON or Prisma with SQLite/MongoDB

Styling: Tailwind CSS

Deployment: Vercel
