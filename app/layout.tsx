import './globals.css'
import { BookingProvider } from './components/BookingContext'
import Header from './components/Header'


export const metadata = {
  title: 'Next Rentals',
  description: 'A sample property rental platform built with Next.js App Router',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>
          
          <Header />
          <main className="container mx-auto p-4">
            {children}
          </main>
        </BookingProvider>
      </body>
    </html>
  )
}
