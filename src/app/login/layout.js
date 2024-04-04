import Link from "next/link";
import './login.css';

export default function Layout({children}){
    return (
        <div className="login-menu">
            <ul>
                <li>
                    <Link href="/login">Login Main</Link>
                    <br></br>
                    <Link href="/login/loginstudent">Login Student</Link>
                    <br></br>
                    <Link href="/login/loginTeacher">Login Teacher</Link>
                    <br></br>
                </li>
            </ul>
            {children}
        </div>
    )
}