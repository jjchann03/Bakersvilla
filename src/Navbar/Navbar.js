import { Link } from "react-router-dom";
import './navbar.css'
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";



export default function Navbar(){
    const [isMobOpen, setIsMobOpen] = useState(false);

    return(
        <div className={`grid grid-cols-6 lg:grid-cols-7 bg-[#F7F0E6;] ${(isMobOpen)?'fixed top-0 left-0 z-50':''}`}>
            <div id="nav-brand" className="nav-brand flex justify-start sm:justify-center items-center w-full col-span-3 sm:col-span-1
            px-[0.5rem] py-[0.4rem] sm:ml-2 lg:ml-0 lg:py-[0.2rem]">
                <div id="nav-brand-name" className="text-end">
                    <p id="bakersvilla" className="font-bold font-medium 
                    text-base sm:text-sm md:text-base xl:text-lg 2xl:text-xl
                    leading-[11px] sm:leading-[10px] md:leading-[11px] xl:leading-[12px] 2xl:leading-[14px]">Bakersvilla <br/><span className="text-xs sm:text-[0.65rem] md:text-xs xl:text-sm 2xl:text-base 
                    sm:leading-[10px] md:leading-[11px] xl:leading-[12px] 2xl:leading-[14px] "> Academy</span></p>
                </div>
                <hr/>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" id="nav-logo" className="w-[13%] sm:w-4/12 2xl:w-3/12 aspect-square"/>
            </div>

            <div className="hidden sm:flex col-span-5 h-full mx-auto justify-center items-center">
                <Link className="text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] 
                font-medium sm:mx-6 md:mx-8 my-0 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Home</Link>
                <Link className="text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] 
                font-medium sm:mx-6 md:mx-8 my-0 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">About Us</Link>
                <Link className="text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] 
                font-medium sm:mx-6 md:mx-8 my-0 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Courses</Link>
                <Link className="text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] 
                font-medium sm:mx-6 md:mx-8 my-0 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Gallery</Link>
                <Link className="text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem] 
                font-medium sm:mx-6 md:mx-8 my-0 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Contact</Link>
            </div>

            <div className="block sm:hidden col-span-3 flex justify-end mr-[10%] items-center text-xl">
                {(isMobOpen)?<IoClose onClick={()=>setIsMobOpen(!isMobOpen)}/>:
                    <IoMenu onClick={()=>setIsMobOpen(!isMobOpen)} />}
            </div>

            <div className={`${(isMobOpen?'flex':'hidden')} min-w-screen w-screen min-h-screen h-screen justify-center flex-col items-center`}>
                <Link className="text-base 
                font-medium my-3 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">About Us</Link>
                <Link className="text-base 
                font-medium my-3 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Courses</Link>
                <Link className="text-base 
                font-medium my-3 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Gallery</Link>
                <Link className="text-base 
                font-medium my-3 hover:scale-[1.1] hover:font-semibold hover:text-[#843F20] transition ease 0.2s">Contact</Link>
            </div>

        </div>
    );
}