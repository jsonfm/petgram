import React from "react";
import { ListOfCategories } from "./components/ListOfCategories"
import  { GlobalStyle } from "./styles/global";


function App() {
  return (
    <div>
        <GlobalStyle />
        <ListOfCategories />
    </div>
  )
}

export default App
