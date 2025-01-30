import React from 'react'
import { MyNavbar } from './NavBar'
import { food } from '../assets/resources'
import { Outlet } from 'react-router-dom'
import CategoryNav from './CategoryNav'

const ContainerApp = () => {
  return (
    <div>
          <MyNavbar />

<div className="flex justify-center p-0 relative">
<h1 className='text-2xl font-semibold  absolute h-full w-full  flex items-center justify-center text-wf  bg-slate-800/90'>

</h1>
</div>
<CategoryNav />
<span className='w-full min-w-full border-b-2 min-h-1 block'> </span>
<Outlet />
    </div>
  )
}

export default ContainerApp