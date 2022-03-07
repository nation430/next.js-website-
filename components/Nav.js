import Link from "next/link";
import navStyles from "../styles/Nav.module.css";


import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4 `}>
        {children}
    </a>
}

function ButtonLink({to, children}) {
    return <a href={to} className={`mx-4 bg-blue-500 py-4 px-8 rounded-lg text-white font-bold `}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen 
        bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out 
        filter drop-shadow-md text-mycolor3-600 font-bold text-xl`}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold " href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <Link className="text-xl font-medium my-4" href="/home" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                Home
                </Link>
                <Link  className="text-xl font-normal my-4" href="/explore" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Explore
                </Link >

                <Link className="text-xl font-normal my-4" href="/item" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Item
                </Link>
                <Link className="text-xl font-normal my-4" href="/Collection" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Collection
                </Link>

                <Link className="text-xl font-normal my-4" href="/Profile" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Profile
                </Link>
                <Link className="text-xl font-normal my-4" href="/Upload" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Upload
                </Link>
                <Link className="text-xl font-normal my-4" href="/Dashboard" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Dashboard
                </Link>

               
            </div>  
        </div>
    )
}

const Nav = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="w-full fixed top-0 animated z-40 justify-between ">
        <nav className="flex  filter drop-shadow-md bg-white sm:px-10 md:px-20 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">LOGO</a>
            </div>
            <div className=" w-9/12 flex justify-between items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex text-mycolor3-600 font-bold text-xl">
                    <NavLink to="/home">
                            Home
                    </NavLink>
                    <NavLink to="/explore">
                        Explore
                    </NavLink>

                    <NavLink to="/item">
                        Item
                    </NavLink>

                    <NavLink to="/collection">
                        Collection
                    </NavLink>

                    <NavLink to="/profile">
                        Profile
                    </NavLink>

                    <NavLink to="/upload">
                        Upload
                    </NavLink>

                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>
                </div>
                <div className="hidden md:flex md:justify-end">
                    <ButtonLink to="/Botton">
                        Connect
                    </ButtonLink>
                    <ButtonLink to="/Botton">
                        Connect
                    </ButtonLink>
                </div>
            </div>
        </nav>
        
        </div>
    )
}

export default Nav