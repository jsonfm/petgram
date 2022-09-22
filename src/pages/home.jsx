import React from "react";
import { Logo } from "@/components/Logo";
import { ListOfCategories } from "@/components/ListOfCategories";
import { ListOfPhotoCardsComponent as ListOfPhotoCards } from "@/components/ListOfPhotoCards";


export const Home = () => {
    return (
        <>
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards />
        </>
    )
}
