// import React from 'react'

// const page = () => {
//   return (
//     <div>page</div>
//   )
// }

// export default page


// ===================================

//4. Events, Function and State

// 'use client'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       <button onClick={()=>{alert("Hello World!")}}>Click Me</button>
//     </div>
//   )
// }

// export default page


// ---------------------------
// component inside another component


// import React from 'react'

// const page = () => {

// const InnerComponet = ()=>{
//   return(
//     <div>
//       <h1>Hi!</h1>
//     </div>
//   )
// }


//   return (

//     <div>
//       <InnerComponet/>
//       <InnerComponet/>
//       <InnerComponet/>
//     </div>

//   )
// }

// export default page


// --------------------------
// called component as function
// import React from 'react'

// const page = () => {

// const InnerComponet = ()=>{
//   return(
//     <div>
//       <h1>Hi!</h1>
//     </div>
//   )
// }

//   return (

//     <div>
//       {InnerComponet()}
//       {InnerComponet()}
//       {InnerComponet()}
//     </div>

//   )
// }

// export default page

// =============================
// 8 Linking And Naviagation

// import Link from 'next/link'
// import React from 'react'

// const Home = () => {
//   return (
//     <div>
//       <h1> Home Page </h1>
//       <Link href="/login">Go To Login Page</Link>
//       <br/>
//       <br/>
//       <Link href="/about">Go To about Page</Link>
//     </div>
//   )
// }

// export default Home

// =======================================
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1> Home Page </h1>
      <Link href="/login">Go To Login Page</Link>
      <br/>
      <br/>
      <Link href="/about">Go To about Page</Link>
      <br/>
      <br/>
      <Link href="/productlist">Go To product list Page</Link>
      <br/>
      <br/>
      <Link href="/userslist">Go To user list Page</Link>
    </div>
  )
}

export default Home

