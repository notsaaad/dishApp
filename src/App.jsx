import { Route, Routes } from "react-router-dom"
import Intro from "./Pages/Intro"
import Dishes from "./Pages/Dishes"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import SingleDish from "./Pages/SingleDish"
import ContainerApp from "./Components/ContainerApp"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

 function App() {



  return (
    <>
    <Routes>
    <Route element={<Intro />}  path={"/"} />

    <Route element={<ContainerApp />} >

    <Route element={<Home />}  path={"/:language/:type"}  />
    <Route element={<Dishes />}  path={"/:language/:type/:category_id/:CategoryDishes"}  />
    <Route element={<SingleDish />}  path={"/:language/:type/:category_id/:CategoryDishes/:Dishid/:Dish"}  />
    <Route element={<Cart />}  path={"/:language/:type/Cart"}  />

    </Route>


    </Routes>

    <ToastContainer
        draggable={false}
        limit={2}
        position="top-center"
        closeButton={true}
        className={"text-lg font-medium"}
      />
    </>
  )
}

export default App
