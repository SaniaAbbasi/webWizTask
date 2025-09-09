import { Property } from './types'

// ✅ DummyJSON API
const BASE = 'https://dummyjson.com/products'

export async function fetchProperties(): Promise<Property[]> {
  const res = await fetch(BASE, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch properties')
  const data = await res.json()
  return data.products  // ✅ API returns { products: [...] }
}

export async function fetchPropertyById(id: string): Promise<Property> {
  const res = await fetch(`${BASE}/${id}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('Failed to fetch property')
  return res.json()
}
