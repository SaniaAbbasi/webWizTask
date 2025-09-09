'use client'
import React, { createContext, useContext, useState } from 'react'
import { Property } from '../../lib/types'
import BookingModal from './BookingModal'

type BookingContextType = {
  isOpen: boolean
  property?: Property | null
  open: (p: Property) => void
  close: () => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [property, setProperty] = useState<Property | null>(null)

  function open(p: Property) { setProperty(p); setIsOpen(true) }
  function close() { setIsOpen(false); setProperty(null) }

  return (
    <BookingContext.Provider value={{ isOpen, property, open, close }}>
      {children}
      <BookingModal isOpen={isOpen} property={property ?? undefined} onClose={close} />
    </BookingContext.Provider>
  )
}

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider')
  return ctx
}
