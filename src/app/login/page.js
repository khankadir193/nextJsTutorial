'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter();

  const navigate = (page)=>{
    router.push(`/login${page}`)
  };

  return (
    <div>
      <h1>Login Page...??</h1>
      <br></br>
      <Link href='/'>Go To Home Page</Link>
      <br></br>
      <br></br>
      <button onClick={()=>navigate('/loginstudent')}>Go To LoginStudent Page</button>
      <br></br>
      <br></br>
      <button onClick={()=>navigate('/loginTeacher')}>Go To LoginTeacher Page</button>
    </div>
  )
}

export default page