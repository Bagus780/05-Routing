import Link from "next/link";

type Props = {
  params: {
    productId: string
    reviewsId: string
  }
}

export default function ProductDetails({ params }: Props) {
  return (
    <div>
      <h1>Details about product {params.productId}</h1>
      <Link href={`${params.productId}/reviews/`}>
        <h2>See Reviews</h2>
      </Link>
    </div>
  )
}