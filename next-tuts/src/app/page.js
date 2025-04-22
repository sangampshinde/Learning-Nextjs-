import React from 'react'

const page = () => {
 
  return (
    <div>
      {process.env.NODE_ENV === 'production' ? (
  <h1>You are on Production Mode</h1>
) : (
  <h1>You are on Development Mode</h1>
)}

    <h1>Envorimet Variables</h1>
    
    </div>
  )
}

export default page