# AERVI Company Profile – COMAC Redesign (Unofficial)

**This is an unofficial redesign created for educational and portfolio purposes.**

## ✨ Overview

This project is a complete frontend redesign of the COMAC corporate website. It demonstrates modern web development practices using Next.js, TypeScript, TailwindCSS, and shadcn/ui. The redesign keeps COMAC’s original color palette for brand consistency while introducing a new layout, smoother structure, and a more modern interface.

## 📄 Pages & Features

**Home**  
Landing page with hero section and company highlights.

**About Us**  
Company background and mission information.

**Products & Service**  
Overview of AERVI’s aircraft, products, and services.

**Teams**  
Team and leadership presentation.

**Blog**  
Static blog listing page (no backend data).

**Create Blog**  
Admin only page with a blog creation form.  
Content is not stored. This page is protected behind authentication.

**Login**  
Authentication handled via Supabase Auth.  
Only logged-in users can access the Create Blog page.  
No public registration flow.

## 🛠️ Tech Stack

**- Next.js 16.0.7 (App Router)**  
**- TypeScript + React**  
**- TailwindCSS**  
**- shadcn/ui with custom “tweakcn” components**  
**- Supabase Authentication** for login gating  
**- Zod** for form validation

## 🔐 Authentication Flow

Unauthenticated users may browse all public pages.  
Accessing `/blog/create` redirects to the login page.  
After successful login, users are taken directly to the Create Blog page.

## 🧩 Project Structure

Built using the Next.js App Router with a global layout and an additional nested layout inside the blog creation route. Environment variables are managed via a `.env` file to store Supabase keys.

## 🚀 Running the Project Locally

```bash
git clone https://github.com/briandalpa/company-profile
cd company-profile
npm install
cp .env.example .env   # or create .env manually
# Add your Supabase URL and public anon key
npm run dev
```

## ⚠️ Disclaimer

This redesign is for educational and portfolio purposes only.
