import React from 'react'

async function page({params}) {
const id = params.id
const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
return (
    <div>
      <h1>
        {params.id} dynamic page 
      </h1>
      <h1>{product ? product.title: 'sorry '}</h1>
    </div>
  )
}

export default page
