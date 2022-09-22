import React, { useEffect, useRef, useState } from 'react';
import { useLocalStorage } from "@/hooks/useLocalStorage"
import { useNearScreen } from "@/hooks/useNearScreen";
import { FavButton } from "@/components/FavButton";
import { useMuationToogleLike } from "@/container/ToggleLikeMutation";

import { ImgWrapper, Img, Article } from "./styles";


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'; 


export const PhotoCard = ({ id = 1, likes = 0, src=DEFAULT_IMAGE}) => {
    const key = `like-${id}`;
    const [show, element] = useNearScreen();
    const [liked, setLiked] = useLocalStorage(key, false);
    const { mutation, mutationLoading, mutationError } = useMuationToogleLike();


    const handleFavClick = () => {
        !liked && mutation({
            variables: {
                input: { id }
            }
        })
        setLiked(!liked)
    };

    console.log("mutation: ", { mutation, mutationLoading, mutationError });

    return(
        <Article ref={element}>
            {show && 
            <>   
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img
                        src={src}
                    />
                </ImgWrapper>
            </a>    
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            </>        
            }
        </Article>
    )
}
