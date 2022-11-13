import React, { useContext, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";

// Pages
import { Home } from "@/pages/home";
import { Detail } from "@/pages/detail";
// import { Favs } from "@/pages/favs";
import { User } from "@/pages/user";
import { NotRegisteredUser } from "@/pages/notRegisteredUser";


import { Context } from "@/context";


import  { GlobalStyle } from "@/styles/global";


const Favs = React.lazy(() => import("@/pages/favs"))


function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  const { isAuth } = useContext(Context);


  return (
    <Suspense fallback={<div>Loading</div>}>
        <GlobalStyle />
        <Logo />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:categoryId" element={<Home />} />
            <Route path="/detail/:id" element={<Detail/> } />

            {!isAuth &&
            <> 
                <Route path="/login" element={<NotRegisteredUser />} />
                <Route path="/favs" element={<Navigate to="/login" />}/>
                <Route path="/user" element={<Navigate to="/login" />}/>
            </>
            }
            {isAuth && <Route path="/login" element={<Navigate to="/" />}/>}
            <Route path="/favs" element={<Favs />} />
            <Route path="/user" element={<User />} />  
        </Routes>   
    
        <Navbar />
    </Suspense>
  )
}

export default App
