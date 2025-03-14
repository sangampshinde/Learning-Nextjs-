import Link from "next/link";
import "./logincss.css";


export default function Layout ({children}) {
  return (
    <div>
        <ul className="login-menu">
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
        </ul>
        {children}
    </div>
  )
}

