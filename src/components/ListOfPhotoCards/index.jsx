import React from 'react';
import { PhotoCard } from "@/components/PhotoCard";


export const ListOfPhotoCards = () => {
    return(
        <ul>
            {[1, 2, 3].map(id => <PhotoCard/>)}
        </ul>
    )
}
