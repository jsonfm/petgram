import React from 'react';

import { PhotoCard } from "@/components/PhotoCard";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { getPhotos } from "@/hooks/getPhotos";
import { List } from "./styles";

import { PhotoCardSkeleton } from "@/skeletons/PhotoCardSkeleton";


export const ListOfPhotoCardsComponent = ({ categoryId }) => {

    const { loading, error, data } = getPhotos({ variables: { categoryId }});

    if (error) {
        return <h2>Internal Server Error</h2>;
    }

    const list = [...Array(5).keys()];


    return(
        <List>
            {loading && list.map(index =><PhotoCardSkeleton key={`photosk-${index}`}/> )}
            {(!loading && data) && data.photos.map((image) => <PhotoCard key={image.id}  {...image}/>)}
        </List>
    )
}
