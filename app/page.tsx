import { fetchProperties } from '../lib/api'
import PropertyGrid from './components/PropertyGrid'

export const revalidate = 60

export default async function Home() {
  const properties = await fetchProperties()
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
      <PropertyGrid properties={properties} />
    </main>
  )
}
