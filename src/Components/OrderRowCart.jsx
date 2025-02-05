import { IoIosAdd } from "@react-icons/all-files/io/IoIosAdd";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import { IoMdTrash } from "@react-icons/all-files/io/IoMdTrash";
import { Button } from "flowbite-react";

import { EditItem, RemoveFromCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const OrderRowCart = ({
  image,
  name,
  categorey,
  price,
  subTotal,
  quantity,
  editOrder,
  id,
}) => {
  
  const dispatch = useDispatch();
  return (
    <li className="bg-wf p-2 shadow-xl rounded-lg flex justify-between my-5 items-center transition-all duration-1000 sm:flex-row flex-col ">
     <div className="flex gap-2 w-full">

     <div className="image sm:w-24 w-12 sm p-1">
        <img
          src={image}
          className="w-full aspect-square object-cover rounded-lg"
          alt={name}
        />
      </div>
      <div className="information flex-grow px-1 flex sm:flex-col sm:items-start items-center justify-between ">
        <p className="text-n1 text-lg font-medium">{name}</p>
     
        <p className=" text-lg font-bold">{price} AED</p>
      </div>
     </div>
 

      <div className="controls  p-1 flex">
        <div className="flex flex-wrap gap-2 items-center justify-center w-full max-w-[300px] ">
          <Button.Group outline>
            <Button
              color="gray"
              onClick={() => {
                dispatch(
                  EditItem({
                    type: "INC",
                    id: id,
                  })
                );
              }}
            >
              <IoIosAdd className="mr-3 h-4 w-4" />
            </Button>
            <h2 className="p-2 px-4 bg-p1">{quantity}</h2>
            <Button
              color="gray"
              onClick={() => {
                dispatch(
                  EditItem({
                    type: "DEC",
                    id: id,
                  })
                );
              }}
              disabled={quantity === 1}
            >
              <IoIosRemove className="mr-3 h-4 w-4" />
            </Button>
          </Button.Group>
        </div>
        <div className="">
        <Button
          color="red"
          onClick={() => {
            dispatch(RemoveFromCart(id));
          }}
        >
          <IoMdTrash className=" h-4 w-4" />
        </Button>
      </div>
      </div>

    </li>
  );
};

export default OrderRowCart;
