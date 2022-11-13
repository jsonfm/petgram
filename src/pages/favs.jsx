import React from "react";
import { useGetFavoritesPhotos } from "@/container/GetFavoritesPhotos";
import { ListOfFavs } from "@/components/ListOfFavs";


export default function Favs() {
    const { data } = useGetFavoritesPhotos();
    return (
        <>
        <h2>Favs Page</h2>
        <ListOfFavs favs={data?.favs} />
        </>
    )
}
