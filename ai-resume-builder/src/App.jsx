// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Outlet } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";


import './App.css'
import Header from "./components/ui/custom/Header";
function App() {
  const {user,isLoaded,isSignedIn} =useUser();

  if(!isSignedIn&&isLoaded){
    return<Navigate to={'auth/sign-in'}/>
  }
  return (
     <>
     <Outlet/>
     <Header/>

     {/* <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header> */}
     </>
  );
}

export default App;
