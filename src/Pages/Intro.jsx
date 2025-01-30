import { Link } from "react-router-dom"
import { food, logo, logoIcon, wlogo } from "../assets/resources"

const Intro = () => {
  return (
    <div className="w-screen h-screen max-h-screen bg-wf flex justify-center items-center relative">
        <div className="image-back absolute inset-0 z-1 ">
            <div className="bg-gradient-to-bl from-gray-800/10 to-75% to-p3 w-full h-full absolute inset-0 "></div>
            <img className="w-full h-full object-cover " src={food} />

        </div>
        <div className="relative z-10 ">
            <div className="w-full">
            <img src={logoIcon} width={'350px'} className="w-3/4 mx-auto" height={'auto'}/>
            
            <h1 className="text-wf text-center py-2 text-3xl leading-tight m-0">Boba Bliss</h1>
            <div className="flex justify-center align-center">
            <select name="Language">
              <option value="Ar">Arabic</option>
              <option value="En">English</option>
            </select>
            </div>
            </div>
            <div className="links max-w-[380px] mx-auto px-5">
                <Link to={'/en'} className="bg-p2 px-8 py-4 text-center rounded-lg shadow-md hover:shadow-2xl transition block text-wf font-semibold translate-y-1 hover:translate-y-0">طلبات قبل بيوم</Link>
                <Link to={'/ar'} className="mt-10 bg-p2 px-8 py-4 text-center rounded-lg shadow-md hover:shadow-2xl transition block text-wf font-semibold translate-y-1 hover:translate-y-0">الطلبات العادية</Link>
            </div>
        </div>
    </div>
  )
}

export default Intro