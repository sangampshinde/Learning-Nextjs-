// "use client"
// import React from 'react'
// import { useRouter } from 'next/navigation'

// const Login = () => {

//   const router = useRouter();

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <br/>
//       <br/>
//       <button onClick={()=>router.push("/login/loginstudent")}>Go Student Login Page</button>
//       <br/>
//       <br/>
//       <button onClick={()=>router.push("/login/loginteacher")}>Go Teacher Login Page</button>
      
//     </div>
    
//   )
// }

// export default Login

// ===============================

"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {

  const router = useRouter();

  const navigate = (name) => {
    router.push(`/login${name}`);
  }

  return (
    <div>
      <h1 className='heading'>Login Page</h1>
      <br/>
      <br/>
      <button onClick={()=>navigate("/loginstudent")}>Go Student Login Page</button>
      <br/>
      <br/>
      <button onClick={()=>navigate("/loginteacher")}>Go Teacher Login Page</button>
      
    </div>
    
  )
}

export default Login