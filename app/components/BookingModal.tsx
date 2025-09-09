'use client'
import { useState, useMemo } from 'react'
import { Property } from '../../lib/types'

function daysBetween(a: string, b: string) {
  const msPerDay = 24 * 60 * 60 * 1000
  const start = new Date(a)
  const end = new Date(b)
  const diff = Math.ceil((end.getTime() - start.getTime()) / msPerDay)
  return diff > 0 ? diff : 0
}

export default function BookingModal({ isOpen, property, onClose }: { isOpen: boolean; property?: Property; onClose: ()=>void }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0
    return daysBetween(checkIn, checkOut)
  }, [checkIn, checkOut])

  const total = useMemo(() => {
    if (!property) return 0
    return nights * (property.price ?? 0)
  }, [nights, property])

  function validate() {
    if (!checkIn || !checkOut) return 'Please select dates'
    if (new Date(checkOut) <= new Date(checkIn)) return 'Check-out must be after check-in'
    if (guests < 1) return 'Guests must be at least 1'
    if (!name.trim()) return 'Please provide guest name'
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validate()
    if (err) return alert(err)
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 800))
    setSubmitting(false)
    alert(`Booking successful! Total: $${total.toFixed(2)}`)
    onClose()
  }

  if (!isOpen || !property) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <h3 className="text-xl font-semibold">Book {property.title}</h3>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm">Check-in</label>
            <input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Check-out</label>
            <input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Guests</label>
            <input type="number" min={1} value={guests} onChange={e=>setGuests(Number(e.target.value))} className="mt-1 w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm">Guest name</label>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full border p-2 rounded" />
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">{nights} nights</div>
              <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
            </div>
            <div className="flex gap-2">
              <button type="button" className="px-4 py-2" onClick={onClose}>Cancel</button>
              <button disabled={submitting} type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{submitting ? 'Booking...' : 'Confirm'}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
