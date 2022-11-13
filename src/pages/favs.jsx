import React from "react";
import { useGetFavoritesPhotos } from "@/container/GetFavoritesPhotos";
import { ListOfFavs } from "@/components/ListOfFavs";


export default function Favs() {
    const { data } = useGetFavoritesPhotos();
    return (
        <div className="container">
        <h3>Your Likes</h3>
        <ListOfFavs favs={data?.favs} />
        </div>
    )
}
