import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react"
import logo from "../assets/Logo.png"
import { Button } from "./Button"
import { useState, useEffect } from "react"

export function PageHeader(){
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
    // const [showFullWidthSearch, setShowFullWidthSearch] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        if(setShowFullWidthSearch && window.innerWidth > 768){
            setShowFullWidthSearch(false);
        }
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); 
    
    return <>
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <div className={`gap-4 items-center flex-shrink-0 flex ${showFullWidthSearch ? "hidden": "flex"}`}>
            <Button variant="ghost" size="icons" >
                <Menu />
            </Button>
            <a href="/">
                <img src={logo} className="h-6"></img>
            </a>
        </div>
        <form className={`gap-4 flex-grow justify-center hidden md:flex` }>
            <div className="flex flex-grow max-w-[600px]">
            <input type="search" className="border border-secondary-hover shadow-inner shadow-secondary rounded-l-full py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" placeholder="Search"></input>
            <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                <Search />
            </Button>
            </div>
            <Button type="button" variant="ghost" size="icons" className="flex-shrink-0">
                <Mic />
            </Button>
        </form>

        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" :"hidden"}`}>
            {showFullWidthSearch && <Button type="button" variant="ghost" size="icons" className="flex-shrink-0">
                <ArrowLeft onClick={()=>{setShowFullWidthSearch(false)}}/>
            </Button>}
            <div className="flex flex-grow max-w-[600px]">
            <input type="search" className="border border-secondary-hover shadow-inner shadow-secondary rounded-l-full py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" placeholder="Search"></input>
            <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
                <Search />
            </Button>
            </div>
            <Button type="button" variant="ghost" size="icons" className="flex-shrink-0">
                <Mic />
            </Button>
        </form>
        
        <div className={`flex-shrink-0 md:gap-2; ${showFullWidthSearch ? "hidden": "flex"}`}>
            <Button onClick={()=>{setShowFullWidthSearch(true)}} size="icon" variant="ghost" className="md:hidden">
                <Search />
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden">
                <Mic />
            </Button>
            <Button size="icon" variant="ghost">
                <Upload />
            </Button>
            <Button size="icon" variant="ghost">
                <Bell />
            </Button>
            <Button size="icon" variant="ghost">
                <User />
            </Button>
        </div>
    </div>
    </>
}