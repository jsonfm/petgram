import React from 'react';

import { PhotoCard } from "@/components/PhotoCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getPhotos } from "@/hooks/getPhotos";

import { List } from "./styles";

export const ListOfPhotoCardsComponent = ({ categoryId }) => {
    console.log("categoryId: ", categoryId);
    const { loading, error, data } = getPhotos({ variables: { categoryId }});

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
