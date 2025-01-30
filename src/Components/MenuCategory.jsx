import { Link, useParams } from 'react-router-dom'
import { coverhome, food } from '../assets/resources'
import { categoirs } from '../DATA/data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import $ from 'jquery';

function MenuCategory() {
  const Params = useParams() 
  console.log(Params)
  var CategoryId = "1";
  if(Params.hasOwnProperty('categoryId')){
    CategoryId = Params['categoryId'];
  }
  const language = Params['language'];
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
          {categoirs?.map(({title,categoryId,image,count},i)=>{
            if(categoryId == CategoryId ){
              return(
                <Link   key={i} to={`/${language}/${categoryId}/${encodeURI(title.replace(/ /g,"-"))}`} className='Single_menu_catgeroy ActiveCat' >
                <span className='Cat-Title'>{title}</span>
                <span className='Cat-count'>{count}</span>
              </Link>
              );
            }else{
              return(
                <Link onClick={CloseMenuCategory}  key={i} to={`/${language}/${categoryId}/${encodeURI(title.replace(/ /g,"-"))}`} className='Single_menu_catgeroy' >
                <span className='Cat-Title'>{title}</span>
                <span className='Cat-count'>{count}</span>
              </Link>
              );
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