"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter();
    const navigate = (name) =>{
        router.push(name)

    }
  return (
    <div>
    About Page
    <br/>
    <br/>
    <Link href="/">Go to Home page</Link>
    <br/>
    <br/>
    <button onClick={()=>navigate("/login")}>Go to Login page</button>
    <br/>
    <br/>
    <button onClick={()=>router.push("/")}>Go to Home Page</button>
    <br/>
    <br/>
    <Link href="/about/aboutstudent">About Student Page</Link>
    <br/>
    <br/>
    <Link href="/about/aboutcollege">About College Page</Link>
    </div>
    
  )
}

export default About