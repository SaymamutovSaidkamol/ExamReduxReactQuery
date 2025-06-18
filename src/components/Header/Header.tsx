import { Link, useRoutes } from "react-router-dom"
import Home from "../../pages/Home/Home"
import CreatePhone from "../../pages/CreatePhone/CreatePhone"
import Phones from "../../pages/Phones/Phones"
import Color from "../../pages/Colors/Color"

import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { IoCreateOutline } from "react-icons/io5";
import { VscSymbolColor } from "react-icons/vsc";

const Header = () => {
    return (
        <div className="h-screen flex">
            <div className="bg-[#427DC0] w-[400px] p-5">
                <p className="text-[28px] text-white"><Link to={"/"}>LOGOO</Link></p>
                <ul className="flex flex-col p-3 gap-8 mt-[39px]">
                    <li className="flex items-center gap-1 text-white px-[12px] py-[8px] rounded-[8px] hover:bg-[#FFFFFF33] cursor-pointer"><AiOutlineAppstoreAdd  className="text-[20px] w-[25px] h-[25px]"/><Link to={"/create_phome"}>Create Phones</Link></li>
                    <li className="flex items-center gap-1 text-white px-[12px] py-[8px] rounded-[8px] hover:bg-[#FFFFFF33] cursor-pointer"><IoCreateOutline className="text-[20px] w-[25px] h-[25px]" /><Link to={"/phones"}>Phones</Link></li>
                    <li className="flex items-center gap-1 text-white px-[12px] py-[8px] rounded-[8px] hover:bg-[#FFFFFF33] cursor-pointer"><VscSymbolColor  className="text-[20px] w-[25px] h-[25px]"/><Link to={"/colors"}>Color</Link></li>
                </ul>
            </div>
            <div className="w-full">{
                useRoutes([
                    { path: "/", element: <Home /> },
                    { path: "/create_phome", element: <CreatePhone /> },
                    { path: "/phones", element: <Phones /> },
                    { path: "/colors", element: <Color /> },
                ])
            }</div>
        </div>
    )
}

export default Header

