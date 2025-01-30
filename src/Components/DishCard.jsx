import { IoMdCart } from "@react-icons/all-files/io/IoMdCart";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AddToCart, RemoveFromCart } from "../store/slices/cartSlice";
import { Button } from "flowbite-react";
import { IoMdTrash } from "@react-icons/all-files/io/IoMdTrash";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dishes } from "../DATA/data";

const DishCard = ({ product }) => {
  const { link, price, image, title,description,categoryId,CategoryDishes,id } = product;
  const { language } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const dataCart = useSelector(({ cart }) => cart);




  useEffect(() => {
    let item = dataCart.filter((el) => el.id == id);

    if (item?.length === 1) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [id, dataCart]);

  useEffect(() => {
    let item = dataCart.filter((el) => el.id == id);

    if (item?.length === 1) {
      setQuantity(item[0].quantity);
    } else {
      setQuantity(1);
    }
  }, [id, dataCart]);

 
const navigate = useNavigate()
  const dispatch = useDispatch()
  const handelOrder = () =>{
    dispatch(AddToCart({ ...product, quantity: quantity,link:`${window.location.protocol}/${window.location.hostname}/${language}/${categoryId}/${encodeURI(CategoryDishes?.replace(/ /g,"-"))}/${id}/${encodeURI(title?.replace(/ /g,"-"))}` }));

    navigate(`/${language}/Cart`)
  }

  return (

    <div className="Single_Dish" to={link}>
    <div className="RightSide">
      <img width={"170"} height={170} src={window.location.origin+'/'+image} className="Dish-img"alt="image 1"/>
      <div className="CartSection">
          {inCart ? (
              <div className="Cart_added">
                <Link className="underline text-p3 " to={`/${language}/Cart`}>
                View Cart
                </Link>
                <Button
                  color="failure"
                  type=""
                  className=""
                  onClick={() => {
                    dispatch(RemoveFromCart(product));
                  }}
                >
                  <IoMdTrash className=" h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex justify-end items-end Add-to-cart-btn">
                  <Button
                color="info"
                type=""
                className=""
                disabled={quantity === 0}
                onClick={
                  handelOrder
                }
              >
                <IoMdCart className="mr-3 h-4 w-4" />
                ADD
              </Button>
              </div>
          
            )}
          </div>
    </div>
    <div className="leftSide">
    <h5 className="Dish-title">{title}</h5>
    <h5 className="Dish-Desc">{description}</h5>
    <h5 className="Dish-Price">{price} $</h5>
    </div>
  </div>


  );
};

export default DishCard;
