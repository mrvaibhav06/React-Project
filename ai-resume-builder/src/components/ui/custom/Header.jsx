 import React from 'react'
import { Button } from '../button'
import {Link} from 'react-router-dom'
import {useUser} from '@clerk/clerk-react'
 
 const Header = () => {
  const {user,isSignedIn}=useUser();
   return (
     <div className='p-3 px-5 flex justify-between shadow-md'>
       <img src="/logo.svg" width={100}height={100} alt="" />

       {isSignedIn?
       <div className='flex gap-2 item-center ' >
        <Link to={'/dashboard'}>
        <Button  varient="outline">Dashboard</Button>
        </Link>
       </div>:
        <Link to={'/auth/sign-in'}>
       <Button className='bg-blue-600 hover:bg-white '>Get Start</Button>
       </Link>}
      
     </div>
   )
 }
 
 export default Header
 