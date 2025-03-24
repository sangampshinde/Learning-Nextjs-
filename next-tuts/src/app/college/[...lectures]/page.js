"use client"
import React from 'react'
import { useParams } from "next/navigation";

const letures = () => {
    
    const params = useParams();
    const slug = params?.slug || [];

  return (
    <div>
    <h1>Docs Page</h1>
    <p>Path Segments:</p>
    <pre>{JSON.stringify(slug, null, 2)}</pre>
  </div>
  )
}

export default letures