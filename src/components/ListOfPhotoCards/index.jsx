import React from 'react';
import { PhotoCard } from "@/components/PhotoCard";

import { useQuery, gql } from "@apollo/client";
const whitPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {
    const { loading, error, data } = useQuery(whitPhotos);

    if (error) {
        return <h2>Internal Server Error</h2>;
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    console.log("data: ", data);

    return(
        <ul>
            {data && data.photos.map((image, id) => <PhotoCard key={image.id} id={image.id} src={image.src}/>)}
        </ul>
    )
}
