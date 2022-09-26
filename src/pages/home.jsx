import React from "react";
import { Logo } from "@/components/Logo";
import { ListOfCategories } from "@/components/ListOfCategories";
import { ListOfPhotoCardsComponent as ListOfPhotoCards } from "@/components/ListOfPhotoCards";
import { useParams } from "react-router-dom";


export const Home = () => {
    let { categoryId } = useParams();
    console.log("cat param: ", categoryId);
    return (
        <>
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />    
        </>
    )
}
