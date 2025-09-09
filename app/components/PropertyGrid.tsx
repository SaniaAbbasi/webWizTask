import PropertyCard from './PropertyCard'
import { Property } from '../../lib/types'

export default function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map(p => <PropertyCard property={p} key={p.id} />)}
    </div>
  )
}
