import React from 'react';

import { List } from "./styles";
import { PhotoCard } from "@/components/PhotoCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getPhotos } from "@/hooks/getPhotos";

export const ListOfPhotoCardsComponent = () => {
    const { loading, error, data } = getPhotos();

    if (error) {
        return <h2>Internal Server Error</h2>;
    }

    if (loading) {
        return <LoadingSpinner/>
    }
    return(
        <List>
            {data && data.photos.map((image) => <PhotoCard key={image.id}  {...image}/>)}
        </List>
    )
}
