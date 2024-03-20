type Props = {
    params: {
          reviewtId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about review {params.reviewtId}</h1>
    )
  }