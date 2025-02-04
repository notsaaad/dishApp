import { Button, Label, Textarea } from "flowbite-react";
import { useState } from "react";
import OrderRowCart from "../Components/OrderRowCart";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";
import {toast} from 'react-toastify'
const Cart = () => {
  const { language } = useParams();
  const dataCart = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

 
  const [address, setAddress] = useState("");

  const handleConfirmOrder = () => {
    const header = "https://api.whatsapp.com/send/?phone=";
    const phone = "971581909512";
    //00971581909512
    const text = encodeURIComponent("Hello, I would like to order");
    let summaryOrder = "";

    dataCart.forEach((el) => {
      const item =
      encodeURIComponent("------------------------")+
      "%0A" +
        encodeURIComponent("product name: *" + el.title + "*") +
        "%0A" +
        encodeURIComponent("product link: *" + el.link + "*") +
        "%0A" +
        encodeURIComponent("product price: *" + el.price + "*") +
        "%0A" +
        encodeURIComponent("quantity: *" + el.quantity + "*") +
        "%0A" +
        encodeURIComponent("sub Total: *" + parseInt(el.price) * parseInt(el.quantity) + "*") +
        "%0A" +
        encodeURIComponent("------------------------") +
        "%0A";
      summaryOrder += item;
    });

    const addressText =


      encodeURIComponent("My address: *" + address + "*");

    const res = header + phone + "&text=" + text + summaryOrder + addressText;
    if(address.length < 10){
      toast.warning("You Must Add your Full Address")
    } else {
      
      window.location.href = res;
      const submitOrder = async() =>{
        const myData = [];
        const results = await fetch("");
      }



    }
    
  };

  return (
    <div>
      {dataCart?.length === 0 ? (
        <div>
          <h1 className="text-center py-5 bg-p2 text-lg font-bold text-wf">Cart</h1>
          <div className="flex justify-center items-center text-3xl mt-5">
            Your Cart is Empty
          </div>
          <br />
          <Home />
        </div>
      ) : (
        <>
          <h1 className="text-center py-5 bg-p2 text-lg font-bold text-wf">Cart</h1>
          <div className="flex flex-col md:flex-row py-5 bg-slate-100">
            <ul className="p-1 md:w-2/3 w-full">
              {dataCart.map(({ title, categorey, image, price, quantity, subTotal, id }, i) => (
                <OrderRowCart
                  id={id}
                  title={title}
                  categorey={categorey}
                  image={image}
                  price={price}
                  quantity={quantity}
                  subTotal={subTotal}
                  key={i}
                />
              ))}
            </ul>
            <div className="md:w-1/3 w-full">
              <div className="bg-wf p-2 px-4 mt-6 rounded-lg">
                {dataCart.map(({ title, quantity, price }, i) => (
                  <p className="text-md w-full flex justify-between items-center" key={i}>
                    <span className="font-bold text-n2 w-1/3 inline-block">{title} :</span>
                    <span className="font-medium text-n2 w-1/3 inline-block">
                      {quantity} * {price} AED
                    </span>
                    <span className="font-bold text-p2 inline-block">{price * quantity} AED</span>
                  </p>
                ))}
                <span className="w-full min-h-[1px] bg-slate-400 block mt-2"></span>
                <p className="text-2xl py-2 w-full flex justify-between items-center">
                  <span className="font-bold text-n2">Total :</span>
                  <span className="font-bold text-p2 ms-auto">
                    {dataCart.reduce((acc, item) => acc + parseInt(item.price) * parseInt(item.quantity), 0)} AED
                  </span>
                </p>
                <div className="w-full">
                  <div className="mb-2 block mt-5 border-t pt-2">
                    <Label htmlFor="comment" value="Your Address" />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Country - city - Street - # Building number - # Department number"
                    rows={4}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <Button className="w-full mt-8" color="success" onClick={handleConfirmOrder}>
                  <div className="w-full flex justify-center items-center gap-3">
                    Order Via Whatsapp <IoLogoWhatsapp className="text-lg animate-pulse" />
                  </div>
                </Button>
                <Link className="w-full mt-4 block border py-2 rounded-md bg-zinc-100" to={`/AED{language}`}>
                  <div className="w-full flex justify-center items-center gap-3 text-sm font-normal">
                    Continue Shopping
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-5 bg-slate-100">
            <Home />
          </div>

          <div className="fixed gap-2 z-50 bottom-0 w-full px-4 py-2 bg-wf flex justify-between items-center md:hidden min-h-20">
          <Textarea
                    id="comment"
                    placeholder="Country - city - Street - # Building number - # Department number"
                    rows={2}
                    value={address}
                    className="w-3/4 h-full"
                    onChange={(e) => setAddress(e.target.value)}
                  />
          <Button className="" color="success" onClick={handleConfirmOrder}>
                  <div className="w-full flex justify-center items-center gap-3 text-xs">
                    Order Now<IoLogoWhatsapp className="text-xl md:text-lg animate-pulse" />
                  </div>
          </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
