import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex justify-center items-center'>
        <Link href='/products/men/shirt'>Men's Shirts</Link>
      </div>
        <h1>Men's Collection</h1>
    </div>
  )
}

export default page