import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-blue-900 mb-10 text-xl justify-between items-center px-6 py-7'>
        <h3 className='text-2xl font-bold'>Ashish Sharma</h3>
        <div className='flex gap-6'>
            <Link className=' hover:underline' href='/'>Home</Link>
            <Link className=' hover:underline' href='/about'>About</Link>
            <Link className=' hover:underline' href='/contact'>Contact</Link>
            <Link className=' hover:underline' href='/products'>Products</Link>
            <Link className=' hover:underline' href='/courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar