import React from "react";
import { Logo } from "@/components/Logo";
import { ListOfCategories } from "@/components/ListOfCategories";
import { ListOfPhotoCards } from "@/components/ListOfPhotoCards";
import  { GlobalStyle } from "@/styles/global";

function App() {
  return (
    <div>
        <Logo />
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
    </div>
  )
}

export default App
