import { Card } from 'flowbite-react'
import React from 'react'
import { food } from '../assets/resources'
import { Link } from 'react-router-dom'

const CategoryCard = ({title,link,image,language}) => {
  return (
    <Link
   to={link}
    className="w-full h-full  rounded-lg overflow-hidden block  bg-transparent relative"
   
  >
    <img width={'100%'}  src={image} className='object-cover h-48 ' alt="image 1" />
    <div className="p-2 bg-slate-800/80  absolute bottom-0 z-10 left-0 w-full">
    <h5 className="md:text-lg font-medium capitalize  text-wf text-md ">
    {title}
    </h5>
    </div>
 
 
  </Link>
  )
}

export default CategoryCard