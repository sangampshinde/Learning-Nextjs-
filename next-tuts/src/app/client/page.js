// "use client"
// import React from 'react'

// const ButtonComponent = ({value}) => {
//   return (
//     <div>
//         <button onClick={()=>alert("Hello world")}>Click Me</button>
//     </div>
//   )
// }

// export default ButtonComponent

// ============================================================
"use client"
import React from 'react'

const ButtonComponent = ({value}) => {
  return (
    <div>
        <button onClick={()=>alert(value)}>Click Me</button>
    </div>
  )
}

export default ButtonComponent