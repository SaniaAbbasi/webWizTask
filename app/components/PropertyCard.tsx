'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Property } from '../../lib/types'
import Rating from './Rating'

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden">
      <Link href={`/property/${property.id}`} className="block">
        <div className="relative h-48 w-full bg-gray-100">
          {property.images?.[0] ? (
            // next/image may need remote domains configured in next.config.js
            <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
          ) : (
            <div className="h-48 flex items-center justify-center">No image</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{property.description?.slice(0, 90) ?? ''}...</p>
          <div className="mt-3 flex items-center justify-between">
            <Rating value={property.rating ?? 0} />
            <div className="text-right">
              <div className="font-bold">${property.price?.toFixed(2)}</div>
              <div className="text-xs text-gray-500">per night</div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}
