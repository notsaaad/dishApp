import { Link, useParams } from 'react-router-dom'
import { coverhome, food } from '../assets/resources'
// import { categoirs } from '../DATA/data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuCategory from './MenuCategory'
import React, { useEffect, useState } from 'react'
import $ from 'jquery';


const CategoryNav = () => {
    const {language, type} = useParams() 
    const Params = useParams() 
    const Type   = Params['type'];
    var category_id = "1";  
    if(Params.hasOwnProperty('category_id')){
    category_id = Params['category_id'];
    }
      // ======================= Start Fatch  API Categories =========================
        const [categoirs, setCategoirs] = useState([]);
    
        useEffect( () => {
        const fatchData = async  () => {
            const result  = await  fetch(`https://api.bobabliss.online/api/categories`);
            const jsonResult = await result.json();
            setCategoirs(jsonResult.data);
        };
        fatchData();
        }, [] );
    
      // ======================= End Fatch  API Categories =========================
    

    return (
        <>
        <MenuCategory></MenuCategory>
    <div className='overflow-x-scroll cat-nav'>



        <ul className={` px-2 py-0`} style={{width:`${300*8}px`}}>
            <li className=' inline-block  py-2 pe-1.5 '>
                <div className='relative rounded-2xl overflow-hidden'>
                <button onClick={ShowMenuCategroy} className='py-4 px-3 w-full h-full inset-0 flex justify-center items-center capitalize text-center text-md z-20 relative'>
                <FontAwesomeIcon icon={faBars} />   
                </button>
                </div>
            </li>
            {categoirs?.map(({name,id,image, type},i)=>{
                if(id == category_id && Type==type){
                    return(
                        <Link className=' inline-block  py-2 pe-1.5 ' key={i} to={`/${language}/${Type}/${id}/${encodeURI(name.replace(/ /g,"-"))}`}>
                        <div className=" relative rounded-2xl overflow-hidden">
                        <div className="py-4 text-b0 px-3 w-full h-full inset-0 flex justify-center items-center 
                            capitalize text-center z-20 relative
                            text-md Active_title_nav_cat
                        ">
                            {name}
                        </div>
                        </div>
                    </Link>
                    )
                }else if(Type==type){
                    return(
                        <Link className=' inline-block  py-2 pe-1.5 ' key={i} to={`/${language}/${Type}/${id}/${encodeURI(name.replace(/ /g,"-"))}`}>
                        <div className=" relative rounded-2xl overflow-hidden">
                        <div className="py-4 px-3 w-full h-full inset-0 flex justify-center items-center 
                            capitalize text-center z-20 relative
                            text-md text-b0
                        ">
                            {name}
                        </div>
                        </div>
                    </Link>
                    )
                }
      
            })}
        </ul>
    </div>
    </>
  )
}
function ShowMenuCategroy(){
    $('.overlayAndCloseSection').show();
}
export default CategoryNav


