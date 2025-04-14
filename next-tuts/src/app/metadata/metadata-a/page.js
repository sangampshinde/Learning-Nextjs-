import React from 'react'

const MetaDataA = () => {
  return (
    <div>
        <h1>Demeonstration of Uing Meta Data here</h1>
    </div>
  )
}
export default MetaDataA


// This function generates dynamic metadata based on the parameters
export const generateMetadata = ({params}) => {
    return {
      title: `Meta Data Page - MetaData Page 2`, 
      description: "This is a dynamically generated meta description MeatData Page A.",
      keywords: "Next.js, Meta Data, SEO Hi ",
    };
  };
