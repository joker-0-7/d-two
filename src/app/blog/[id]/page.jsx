import React from 'react'

function page({params}) {
  return (
    <div>
      <h1>
        {params.id} dynamic page 
      </h1>
    </div>
  )
}

export default page
