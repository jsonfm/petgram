import React from "react";
import { Logo } from "@/components/Logo";
import { ListOfCategories } from "@/components/ListOfCategories";
import { ListOfPhotoCardsComponent as ListOfPhotoCards } from "@/components/ListOfPhotoCards";
import  { GlobalStyle } from "@/styles/global";

function App() {
  return (
    <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
    </div>
  )
}

export default App
