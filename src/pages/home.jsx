import React from "react";
import { ListOfCategories } from "@/components/ListOfCategories";
import { ListOfPhotoCardsComponent as ListOfPhotoCards } from "@/components/ListOfPhotoCards";
import { useParams } from "react-router-dom";


export const Home = () => {
    let { categoryId } = useParams();

    return (
        <>
        
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />    
        </>
    )
}
