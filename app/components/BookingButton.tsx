'use client'
import { Property } from '../../lib/types'
import { useBooking } from './BookingContext'

export default function BookingButton({ property }: { property: Property }) {
  const { open } = useBooking()
  return (
    <button onClick={() => open(property)} className="px-4 py-2 bg-blue-600 text-white rounded-md">
      Book Now
    </button>
  )
}
