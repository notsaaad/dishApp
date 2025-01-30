import { Link, useParams } from 'react-router-dom'
import { coverhome, food } from '../assets/resources'
import { categoirs } from '../DATA/data'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuCategory from './MenuCategory'
import $ from 'jquery';


const CategoryNav = () => {
    const {language} = useParams() 
    const Params = useParams() 
    var CategoryId = "1";
    if(Params.hasOwnProperty('categoryId')){
    CategoryId = Params['categoryId'];
    }
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
            {categoirs?.map(({title,categoryId,image},i)=>{
                if(categoryId == CategoryId){
                    return(
                        <Link className=' inline-block  py-2 pe-1.5 ' key={i} to={`/${language}/${categoryId}/${encodeURI(title.replace(/ /g,"-"))}`}>
                        <div className=" relative rounded-2xl overflow-hidden">
                        <div className="py-4 px-3 w-full h-full inset-0 flex justify-center items-center 
                            capitalize text-center z-20 relative
                            text-md Active_title_nav_cat
                        ">
                            {title}
                        </div>
                        </div>
                    </Link>
                    )
                }else{
                    return(
                        <Link className=' inline-block  py-2 pe-1.5 ' key={i} to={`/${language}/${categoryId}/${encodeURI(title.replace(/ /g,"-"))}`}>
                        <div className=" relative rounded-2xl overflow-hidden">
                        <div className="py-4 px-3 w-full h-full inset-0 flex justify-center items-center 
                            capitalize text-center z-20 relative
                            text-md
                        ">
                            {title}
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


