'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
  return (
    <div>
        <h1>{params.id} Course</h1>
    </div>
  )
}

export default page