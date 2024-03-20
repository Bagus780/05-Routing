type Props = {
    params: {
          blogsId: string
    }
  }
  
  export default function ProductDetails({ params }: Props) {
    return (
          <h1>Details about product {params.blogsId}</h1>
    )
  }