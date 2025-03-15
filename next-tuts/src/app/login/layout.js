// "use client"
// import Link from "next/link";
// import "./logincss.css";




// export default function Layout ({children}) {

//   return (
//     <div>
//         <ul className="login-menu">
//             <li>
//                 <h4>Login Navbar</h4>
//             </li>
//             <li>
//                 <Link href="/login">Main Login</Link>
//             </li>
//             <li>
//                 <Link href="/login/loginstudent">Login Student</Link>
//             </li>
//             <li>
//                 <Link href="/login/loginteacher">Login Teacher</Link>
//             </li>
//         </ul>
//         {children}
//     </div>
//   )
// }

// ---------------------------------------------------------------------------

// "use client"
// import Link from "next/link";
// import "./logincss.css";
// import { usePathname } from "next/navigation";



// export default function Layout ({children}) {

//     const path = usePathname()
//     // console.log(path)
//   return (

//     <div>
//         { path!=="/login/loginteacher" ?
//         (<ul className="login-menu">
//             <li>
//                 <h4>Login Navbar</h4>
//             </li>
//             <li>
//                 <Link href="/login">Main Login</Link>
//             </li>
//             <li>
//                 <Link href="/login/loginstudent">Login Student</Link>
//             </li>
//             <li>
//                 <Link href="/login/loginteacher">Login Teacher</Link>
//             </li>
//         </ul>):null }
        
//         {children}
//     </div>
//   )
// }

// ------------------------------------------------------------------------

"use client"
import Link from "next/link";
import "./logincss.css";
import { usePathname } from "next/navigation";



export default function Layout ({children}) {

    const path = usePathname()
    // console.log(path)
  return (

    <div>
        { path!=="/login/loginteacher" ?
        (<ul className="login-menu">
            <li>
                <h4>Login Navbar</h4>
            </li>
            <li>
                <Link href="/login">Main Login</Link>
            </li>
            <li>
                <Link href="/login/loginstudent">Login Student</Link>
            </li>
            <li>
                <Link href="/login/loginteacher">Login Teacher</Link>
            </li>
        </ul>):<Link href="/login">Main Login</Link> }
        
        {children}
    </div>
  )
}

