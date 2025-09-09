# 🏡 Next Rentals

A modern, server-rendered **Property Rental Platform** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
This project demonstrates fetching data from an API, dynamic routing, modals, form handling, and a polished responsive UI.

---

## ✨ Features

- **Home Page (/)**  
  - Fetches and displays a list of properties from an API.  
  - Responsive grid layout for property cards.  
  - Each property shows: image, title, description, price, and rating.  

- **Property Detail Page (/property/[id])**  
  - Dynamically routed page for each property.  
  - Full details view with image gallery.  
  - Includes **Book Now** button.  

- **Booking Modal**  
  - Opens a form to collect guest info (Check-in, Check-out, Guests, Name).  
  - Auto-calculates **total cost** (nights × price).  
  - Includes basic form validation and mocked submission.  

- **Navigation Header**  
  - Links to `Home`, `About Us`, and `Contact Us`.  
  - Current active page highlighted.  

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/docs/app)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS  
- **State Management**: React Hooks + Context API  
- **API**: [DummyJSON Products API](https://dummyjson.com/products) (for properties with images)  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SaniaAbbasi/webWizTask.git
cd E:\webWizTask
