import React from 'react'
import { redirect } from 'next/navigation'

const Redirection = () => {
    redirect("/about")

  return (
    <div>
        <p>Redirection in page</p>


    </div>
  )
}

export default Redirection