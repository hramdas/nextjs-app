import Link from "next/link"

export const Navigation = ()=>{
    return(
        <div>
            <h1>My blog</h1>
            <ul className="navbar">
                <li>
                    <Link href="about">About</Link>
                </li>
                <li>
                    <Link href="contact-us">Contact us</Link>
                </li>
                <li>
                    <Link href="courses">Courses</Link>
                </li>
            </ul>
        </div>
    )
}