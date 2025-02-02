import { useParams } from "react-router-dom"
import DishCard from "../Components/DishCard"
import { dishes } from "../DATA/data"
import { useEffect, useState } from "react";


const Dishes = () => {
    const {language,CategoryDishes,category_id, type} = useParams()
    const Params = useParams();
    const TYPE = Params['type'];
        // ======================= Start Fatch  API menu =========================
        const [dishes, setDishes] = useState([]);
    
        useEffect( () => {
          const fatchData = async  () => {
            const result  = await  fetch('https://api.bobabliss.online/api/menus');
            const jsonResult = await result.json();
              setDishes(jsonResult.data);
          };
          fatchData();
        }, [] );
      
        // ======================= End Fatch  API menu =========================

    // price={price} description={description} title={title} image={image} link={`/${language}/${category_id}/${encodeURI(CategoryDishes.replace(/ /g,"-"))}/${id}/${encodeURI(title.replace(/ /g,"-"))}`}
return (
  <div className="w-full mt-5">

      <h3 className="text-lg capitalize px-3 font-medium">{CategoryDishes.replace(/-/g," ") }  Dishes</h3>
      <div className="categories-cards flex justify-center flex-wrap ">
        
          {
              dishes.filter((el)=> el.category_id == category_id &&  TYPE ==type)?.map((el,i)=>{
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