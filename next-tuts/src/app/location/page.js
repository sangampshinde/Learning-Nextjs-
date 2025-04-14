"use client"
import Script from 'next/script'
import React from 'react'

const Location = () => {
  return (
    <div>
      <Script
      src="/location.js"
      onLoad={console.log("File Loaded!")}
      />
        <h2>Demonstrate Script Tag in next js</h2>
    </div>
  )
}

export default Location