import React from 'react'

async function page({params}) {

// const product = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
return (
    <div>
      <h1>
        {params.id} dynamic page 
      </h1>
      {/* <h1>{product ? product.title: ''}</h1> */}
    </div>
  )
}

export default page
