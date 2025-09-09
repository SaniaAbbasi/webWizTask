'use client'
export default function Rating({ value = 0 }: { value?: number }) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < Math.round(value) ? '★' : '☆')
  return <div className="text-yellow-500 text-sm">{stars.join(' ')}</div>
}
