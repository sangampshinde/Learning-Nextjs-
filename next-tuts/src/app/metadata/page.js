import React from 'react'

// This component displays some static content
export const MetaData = () => {
  return (
    <div>
      <h2>Generate Dynamic Meta Data</h2>
      <p>This page demonstrates how to generate dynamic metadata in Next.js.</p>
    </div>
  );
};

// This function generates dynamic metadata based on the parameters
export const generateMetadata = ({params}) => {
  return {
    title: `Meta Data Page - MetaData`, 
    description: "This is a dynamically generated meta description.",
    keywords: "Next.js, Meta Data, SEO",
  };
};


export default MetaData;






