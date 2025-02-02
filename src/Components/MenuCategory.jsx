import { Link, useParams } from 'react-router-dom'
import { coverhome, food } from '../assets/resources'
// import { categoirs } from '../DATA/data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import $ from 'jquery';

function MenuCategory() {
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
  const Params = useParams() 
  var category_id = "1";
  if(Params.hasOwnProperty('category_id')){
    category_id = Params['category_id'];
  }
  const language = Params['language'];
  const TYPE    = Params['type'];
  return (
    
    <div className='overlayAndCloseSection'>
      <div className='Section-content'>
        <div className='Close-section'>
          <button onClick={CloseMenuCategory}>
          <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className='CategroyMenu'>
          <div className='Menu-cat-Title'>
            <h4>Menu Categories</h4>
          </div>
          <div className='Menu-All-Categroyies'>
          {categoirs?.map(({name,id,image,count, type},i)=>{
            if(id == category_id && type == TYPE){
              return(
                <Link   key={i} to={`/${language}/${TYPE}/${id}/${encodeURI(name.replace(/ /g,"-"))}`} className='Single_menu_catgeroy ActiveCat' >
                <span className='Cat-Title'>{name}</span>
                <span className='Cat-count'>{count}</span>
              </Link>
              );
            }else if(TYPE == type){
              return(
                <Link onClick={CloseMenuCategory}  key={i} to={`/${language}/${TYPE}/${id}/${encodeURI(name.replace(/ /g,"-"))}`} className='Single_menu_catgeroy' >
                <span className='Cat-Title'>{name}</span>
                <span className='Cat-count'>{count}</span>
              </Link>
              );
            }else{
              return(``);
            }

          })}
          </div>
        </div>
      </div>
    </div>

  );
  
}

function CloseMenuCategory(){
  $('.overlayAndCloseSection').hide();
}

export default MenuCategory;