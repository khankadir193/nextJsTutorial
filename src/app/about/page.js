'use client'
import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1>About Components..</h1>
      <br></br>
      <Link href='/'>Go To Home Page</Link>
      <br></br>
      <Link href='/about/aboutcollage'>Go To About Collage</Link>
    </div>
  )
}

export default page