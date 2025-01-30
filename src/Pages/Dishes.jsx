import { useParams } from "react-router-dom"
import DishCard from "../Components/DishCard"
import { dishes } from "../DATA/data"

const Dishes = () => {
    const {language,CategoryDishes,categoryId} = useParams()
    //price={price} description={description} title={title} image={image} link={`/${language}/${categoryId}/${encodeURI(CategoryDishes.replace(/ /g,"-"))}/${id}/${encodeURI(title.replace(/ /g,"-"))}`}

return (
  <div className="w-full mt-5">

      <h3 className="text-lg capitalize px-3 font-medium">{CategoryDishes.replace(/-/g," ") }  Dishes</h3>
      <div className="categories-cards flex justify-center flex-wrap ">
        
          {
              dishes.filter((el)=> el.categoryId == categoryId)?.map((el,i)=>{
                  return(
                      <div  key={i} className="w-full lg:w-1/3 md:w-1/2 p-2 ">
                          <DishCard product={el} /> 
                      </div>
                  );
              })
          }
      </div>
</div>
)
}

export default Dishes