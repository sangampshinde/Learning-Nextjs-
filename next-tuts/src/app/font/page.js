import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})

const FontComponent = () => {
  return (
    <div>
      <h1>Font Component</h1>
      {/* <h1 style={{ fontFamily: 'Roboto', fontWeight: 100 }}>font with link tag</h1> */}
      <h1 className={roboto.className}>font with google</h1>

    </div>
  );
}

export default FontComponent;