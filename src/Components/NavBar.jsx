import { Navbar } from "flowbite-react";
import {   logoIcon } from "../assets/resources";
import {IoMdCart} from '@react-icons/all-files/io/IoMdCart'
import {IoMdHome} from '@react-icons/all-files/io/IoMdHome'
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import $ from 'jquery';

export const MyNavbar = () =>{
      // ======================= Start Fatch  API setting =========================
      const [setting, setSetting] = useState([]);

      useEffect( () => {
        const fatchData = async  () => {
          const result  = await  fetch('https://api.bobabliss.online/api/settings');
          const jsonResult = await result.json();
            setSetting(jsonResult.data);
        };
        fatchData();
      }, [] );
      // ======================= End Fatch  API setting =========================
  const {language, type} = useParams()
  const Params = useParams();
  const TYPE   = Params['type'];
  return (
    <Navbar fluid rounded className="border-b-2 p-0 px-3 py-4">


      <Navbar.Brand >

        <Link to={`/`} active className="list-none flex p-0 m-0 ">
        <img src={setting.logo} className="mr-3 w-16" alt="Logo" />
        <span className="self-center whitespace-nowrap text-md md:text-xl font-semibold text-p2 ">{setting.name}</span>
            </Link>
      </Navbar.Brand>





        <div className=" flex justify-end gap-5">
          <select id="LangSelect" value={language} onChange={ChangeLanguage} name="Lang" >

            <option value="En">English</option>
            <option value="ar">Arabic</option>
          </select>
            <Link to={`/${language}/${TYPE}`} active className="list-none ">
            <span className="text-blue-500 hover:bg-blue-100  transition-all rounded-full bg-blue-100/50  p-2 text-[30px] relative block">
                <IoMdHome />
                </span>
            </Link>
            <Link className=""  to={`/${language}/${TYPE}/cart`}>
                <span className="text-p2 bg-green-100/50 hover:bg-green-100 transition-all rounded-full  p-2 text-[30px] relative block">
                <IoMdCart />
                </span>
            </Link>
        </div>
    </Navbar>
  );
  function ChangeLanguage(){
    // const navigate = useNavigate()
    let chosenLang = $("#LangSelect").val()
    location.href = `/${chosenLang}/${type}`;
  }
}


