'use client'
import Image from 'next/image'

export default function ImageGallery({ images = [] }: { images?: string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {images.map((src, i) => (
        <div key={i} className="relative h-48 w-full rounded overflow-hidden bg-gray-100">
          <Image src={src} alt={`Image ${i+1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
