import React from 'react'
import Image from 'next/image'
import Vercel from '../../../public/next.svg'

const ImageComponent = () => {
  return (
    <div>
        <Image src={Vercel} alt="vercel"/>
        {/* <Image src="https://images.unsplash.com/photo-1601234567890-abcdefg12345https" alt="img" width={200} height={300}/> */}


    </div>
  )
}

export default ImageComponent
