import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className='flex justify-center gap-5 py-3'>
                <Link href='/products/men'>Men's Colection</Link>
                <Link href='/products/women'>Women's Colection</Link>
            </div>
            <h1 className='text-3xl underline'>
                This is Products Page
            </h1>
        </div>
    )
}

export default page