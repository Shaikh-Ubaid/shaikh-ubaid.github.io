import Link from "next/link";

const menu = [
    // {
    //     name: "About",
    //     link: "/about"
    // },
    {
        name: "Posts",
        link: "/posts"
    },
    // {
    //     name: "Projects",
    //     link: "/projects"
    // },
    // {
    //     name: "Dashboard",
    //     link: "/dashboard"
    // },
    {
        name: "Contact",
        link: "/contact"
    },
];


function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            menu.map((item, idx) => <li key={idx}><Link href={item.link}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
                <Link href="/"><span className="btn btn-ghost normal-case"><img src="/ubaid_shaikh_logo.svg" alt="logo" height="100%" width="200" /></span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menu.map((item, idx) => <li key={idx}><Link href={item.link}>{item.name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
