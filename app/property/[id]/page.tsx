import { fetchPropertyById } from '../../../lib/api'
import ImageGallery from '../../components/ImageGallery'
import BookingButton from '../../components/BookingButton'

type Props = { params: { id: string } }
export const revalidate = 60

export default async function PropertyPage({ params }: Props) {
  const property = await fetchPropertyById(params.id)
  return (
    <main>
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-sm text-gray-600">{property.address}</p>
      <div className="mt-6">
        <ImageGallery images={property.images ?? []} />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="text-xl font-semibold">${property.price?.toFixed(2)}</div>
          <div className="text-sm text-gray-600">{property.rating ?? 0} stars</div>
        </div>
        <BookingButton property={property} />
      </div>
      <section className="mt-6">
        <h2 className="text-lg font-semibold">About this property</h2>
        <p className="mt-2 text-gray-700">{property.description}</p>
      </section>
    </main>
  )
}
