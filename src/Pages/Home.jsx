import { useParams } from 'react-router-dom'
import CategoryCard from '../Components/CategoryCard'
// import { categoirs } from '../DATA/data'
import React, { useEffect, useState } from 'react'

const Home = () => {
        // ======================= Start Fatch  API Categories =========================
    const [categoirs, setCategoirs] = useState([]);

    useEffect( () => {
        const fatchData = async  () => {
        const result  = await  fetch('https://api.bobabliss.online/api/categories');
        const jsonResult = await result.json();
            setCategoirs(jsonResult.data);
        };
        fatchData();
    }, [] );

    // ======================= End Fatch  API Categories =========================
    const {language, type} = useParams()
    const Param = useParams();
    const TYPE = Param['type']

  return (
    
        <div className="w-full categories-cards flex justify-center items-center flex-wrap  ">
            {
                categoirs?.map(({name,image,id, type},i)=>{
                    if(type == TYPE){
                        return(
                            <div  key={i} className="w-1/2 md:w-1/2 lg:w-1/4  p-2  ">
                                <CategoryCard  title={name} image={image} link={`/${language}/${TYPE}/${id}/${encodeURI(name.replace(/ /g,"-"))}`} /> 
                            </div>
                        );
                    }else{
                        return (``);
                    }
                })
            }

     
   
</div>
  )
}

export default Home