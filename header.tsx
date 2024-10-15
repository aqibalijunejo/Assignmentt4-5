import Link from "next/link"
import About from "../About/about"

export default function Header(){
    return(
        <div className="header">
            <ul className="button">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/About"}><li>About</li></Link>
                <Link href={"/Contact"}><li>Contact</li></Link>
                <Link href={"/Explore"}><li>Explore</li></Link> 
            
            </ul>
        </div>
    )
}