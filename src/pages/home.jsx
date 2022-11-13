import React from "react";
import { ListOfCategories } from "@/components/ListOfCategories";
import { ListOfPhotoCardsComponent as ListOfPhotoCards } from "@/components/ListOfPhotoCards";
import { useParams } from "react-router-dom";


export const HomePage = () => {
    let { categoryId } = useParams();

    return (
        <>
        
        <ListOfCategories />
        <ListOfPhotoCards categoryId={categoryId} />    
        </>
    )
}

export const Home = React.memo(HomePage, (prev, next) => {
    return prev.categoryId !== next.categoryId
})
