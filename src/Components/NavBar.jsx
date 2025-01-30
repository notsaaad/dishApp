import { Navbar } from "flowbite-react";
import {   logoIcon } from "../assets/resources";
import {IoMdCart} from '@react-icons/all-files/io/IoMdCart'
import {IoMdHome} from '@react-icons/all-files/io/IoMdHome'
import { Link, useParams } from "react-router-dom";
 
export const MyNavbar = () =>{
  const {language} = useParams()
  return (
    <Navbar fluid rounded className="border-b-2 p-0 px-3 py-4">


      <Navbar.Brand >

        <Link to={`/`} active className="list-none flex p-0 m-0 ">
        <img src={logoIcon} className="mr-3 w-16" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-md md:text-xl font-semibold text-p2 ">Boba Bliss</span>
            </Link>
      </Navbar.Brand>





        <div className=" flex justify-end gap-5">
          <select name="Lang" >
            <option value="En">English</option>
            <option value="ar">Arabic</option>
          </select>
            <Link to={`/${language}`} active className="list-none ">
            <span className="text-blue-500 hover:bg-blue-100  transition-all rounded-full bg-blue-100/50  p-2 text-[30px] relative block">
                <IoMdHome />
                </span>
            </Link>
            <Link className=""  to={`/${language}/cart`}>
                <span className="text-p2 bg-green-100/50 hover:bg-green-100 transition-all rounded-full  p-2 text-[30px] relative block">
                <IoMdCart />
                </span>
            </Link>
        </div>
    </Navbar>
  );
}
