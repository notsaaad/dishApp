import { Link, useParams } from "react-router-dom";
import CategoryNav from "../Components/CategoryNav";
import { MyNavbar } from "../Components/NavBar";
import { food } from "../assets/resources";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { IoIosAdd } from "@react-icons/all-files/io/IoIosAdd";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import { IoMdCart } from "@react-icons/all-files/io/IoMdCart";
import Dishes from "./Dishes";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, EditItem, RemoveFromCart } from "../store/slices/cartSlice";
import { dishes } from "../DATA/data";
import { IoMdTrash } from "@react-icons/all-files/io/IoMdTrash";

const SingleDish = () => {
  const { language, CategoryDishes, Dish, Dishid,categoryId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const dataCart = useSelector(({ cart }) => cart);

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(...dishes.filter((el) => el.id === Dishid));
  }, [Dishid]);
  useEffect(() => {
    let item = dataCart.filter((el) => el.id == Dishid);

    if (item?.length === 1) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [Dishid, dataCart]);

  useEffect(() => {
    let item = dataCart.filter((el) => el.id == Dishid);

    if (item?.length === 1) {
      setQuantity(item[0].quantity);
    } else {
      setQuantity(1);
    }
  }, [Dishid, dataCart]);

  const { title, category, link, image, price, id, description } =
    product;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center my-12">
        <div className="lg:w-1/2 w-full p-2 md:h-[300px] h-[180px]">
          <img
            src={image}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>

        <div className="lg:w-1/2 w-full p-2 ">
          <h1 className="text-3xl font-semibold text-b0  ">{title}</h1>
          <p className="font-normal text-sm text-b0">{description}</p>
          <h1 className="text-3xl font-semibold text-b0 mt-5 ">
            <span className="text-n2 me-2">Price :</span>
            {price} $
          </h1>
          <div className="flex flex-wrap gap-2 items-center w-full  mt-10">
            {inCart ? (
              ""
            ) : (
              <Button.Group outline>
                <Button
                  color="gray"
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                >
                  <IoIosAdd className="mr-3 h-4 w-4" />
                </Button>
                <h2 className="p-2 px-4 bg-p1">{quantity}</h2>
                <Button
                  color="gray"
                  onClick={() => {
                    setQuantity((prev) => prev - 1);
                  }}
                  disabled={quantity === 1 || inCart}
                >
                  <IoIosRemove className="mr-3 h-4 w-4" />
                </Button>
              </Button.Group>
            )}
          </div>
          <div className="flex flex-wrap gap-2 items-center w-full mt-10">
            {inCart ? (
              <div className="flex items-center justify-start w-full gap-5">
                <Button color="success" type="" className="" disabled>
                  Successfully added to cart
                </Button>
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
                <Link
                  className="block underline text-p3"
                  to={`/${language}/Cart`}
                >
                  View Cart
                </Link>
              </div>
            ) : (
              <Button
                color="info"
                type=""
                className="w-3/4"
                disabled={quantity === 0}
                onClick={() => {
                  dispatch(AddToCart({ ...product, quantity: quantity,link:`${window.location.protocol}/${window.location.hostname}/${language}/${categoryId}/${encodeURI(CategoryDishes.replace(/ /g,"-"))}/${id}/${encodeURI(title.replace(/ /g,"-"))}` }));
                }}
              >
                <IoMdCart className="mr-3 h-4 w-4" />
                Add To Cart
                <span className="mx-2 text-p1 font-extrabold">
                  {quantity}
                </span>{" "}
                Dishes
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="">
        <Dishes />
      </div>
    </div>
  );
};

export default SingleDish;
