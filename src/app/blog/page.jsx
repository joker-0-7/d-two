import Link from 'next/link'
import React from 'react'

async function page() {
  const product = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.json())
  return (
    <div>
      <h1>basic static page</h1>
      {product ? product.map((pro)=>{
        return(
          <div key={product.id}>
          <Link href={`/blog/${pro.id}`}>{pro.title}</Link>
        </div>
        )
      }) : 'wait'}
      <h1> wait 2 </h1>
    </div>
  )
}

export default page
