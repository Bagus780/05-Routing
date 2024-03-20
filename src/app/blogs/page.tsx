import Link from "next/link";

export default function Blog() {
    return (
          <div>
            <h1>Welcome to Home</h1>
            <br />
            <Link href='/blogs/first'><h2>First Blog</h2></Link>
            <br />
            <Link href='/blogs/second'><h2>Second Blog</h2></Link>
          </div>
    );
  }