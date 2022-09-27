import React from "react";
import { PhotoCard } from "@/components/PhotoCard";
import { getSinglePhoto } from "@/hooks/getPhoto";
import { useParams } from "react-router-dom";


export const Detail = () => {
    let { id } = useParams();
    const { loading, error, data} = getSinglePhoto({variables: {id}});
    if(error)
        return <div>Error</div>

    return (
        <>
        {data &&  <PhotoCard key={data.photo.id}  {...data.photo}/>}
        </>
    )
}
