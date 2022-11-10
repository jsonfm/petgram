import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Logo } from "@/components/Logo";
import { Navbar } from "@/components/Navbar";

// Pages
import { Home } from "@/pages/home";
import { Detail } from "@/pages/detail";
import { Favs } from "@/pages/favs";
import { User } from "@/pages/user";
import { NotRegisteredUser } from "@/pages/notRegisteredUser";


import { Context } from "@/context";


import  { GlobalStyle } from "@/styles/global";


function App() {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
    <GlobalStyle />
    <Logo />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet/:categoryId" element={<Home />} />
        <Route path="/detail/:id" element={<Detail/> } />
    </Routes>

    <Context.Consumer>
        {
            ({ isAuth }) => (
                isAuth
                ? 
                <Routes>
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/user" element={<User />} />
                </Routes>
                :
                <Routes>
                    <Route path="/favs" element={<NotRegisteredUser />} />
                    <Route path="/user" element={<NotRegisteredUser />} />
                </Routes>

            )
        }
    </Context.Consumer>
    
    <Navbar />
    </>
  )
}

export default App
