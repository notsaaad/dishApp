import { useParams } from 'react-router-dom'
import CategoryCard from '../Components/CategoryCard'
import { categoirs } from '../DATA/data'

const Home = () => {
    const {language} = useParams()

  return (
    
        <div className="w-full categories-cards flex justify-center items-center flex-wrap  ">
            {
                categoirs?.map(({title,image,categoryId},i)=>{
                    return(
                        <div  key={i} className="w-1/2 md:w-1/2 lg:w-1/4  p-2  ">
                            <CategoryCard  title={title} image={image} link={`/${language}/${categoryId}/${encodeURI(title.replace(/ /g,"-"))}`} /> 
                        </div>
                       
                    );
                })
            }

     
   
</div>
  )
}

export default Home