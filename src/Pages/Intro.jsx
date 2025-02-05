import { Link } from "react-router-dom"
import { food, logo, logoIcon, wlogo } from "../assets/resources"
import React, { useEffect, useState } from 'react'

const Intro = () => {
    // ======================= Start Fatch  API setting =========================
    const [setting, setSetting] = useState([]);
    const [SelectLang, setSelectLang] = useState('En');

  function ChangeSelectedLang(e){
    setSelectLang(e.target.value);
  }
    useEffect( () => {
      const fatchData = async  () => {
        const result  = await  fetch('https://api.bobabliss.online/api/settings');
        const jsonResult = await result.json();
          setSetting(jsonResult.data);
      };
      fatchData();
    }, [] );
    // ======================= End Fatch  API setting =========================
  return (
    
    <div className="w-screen h-screen max-h-screen bg-wf flex justify-center items-center relative">
        <div className="image-back absolute inset-0 z-1 ">
            <div className="bg-gradient-to-bl from-gray-800/10 to-75%  w-full h-full absolute inset-0 "></div>
            <img className="w-full h-full object-cover " src={setting.background} />

        </div>
        <div className="relative z-10 ">
            <div className="w-full">
            <img src={logoIcon} width={'350px'} className="w-3/4 mx-auto" height={'auto'}/>
            
            <h1 className="text-wf text-center py-2 text-3xl leading-tight m-0">{setting.name}</h1>
            <div className="flex justify-center align-center">
            <select name="Language" defaultValue={SelectLang} onChange={ChangeSelectedLang}>
              <option value="Ar">Arabic</option>
              <option value="En">English</option>
            </select>
            </div>
            </div>
            <div className="links max-w-[380px] mx-auto px-5">
                <Link to={`/${SelectLang}/1`} className="bg-p2 my-4  px-8 py-4 text-center rounded-lg shadow-md hover:shadow-2xl transition block text-b0 font-semibold translate-y-1 hover:translate-y-0">الطلبات العادية</Link>
                <Link to={`/${SelectLang}/0`} className="bg-p2  px-8 py-4 text-center rounded-lg shadow-md hover:shadow-2xl transition block text-b0 font-semibold translate-y-1 hover:translate-y-0">طلبات قبل بيوم</Link>
            </div>
        </div>
    </div>
  )
}

export default Intro