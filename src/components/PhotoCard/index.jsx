import React from 'react';
import { useNearScreen } from "@/hooks/useNearScreen";
import { FavButton } from "@/components/FavButton";
import { useMuationToogleLike } from "@/container/ToggleLikeMutation";
import { Link } from "react-router-dom";
import { ImgWrapper, Img, Article } from "./styles";


const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'; 


export const PhotoCard = ({ id, likes, liked, src=DEFAULT_IMAGE}) => {
    const [show, element] = useNearScreen();
    const { mutation } = useMuationToogleLike();


    const handleFavClick = () => {
        mutation({
            variables: {
                input: { id }
            }
        })
    };

    return(
        <Article ref={element}>
            {show && 
            <>   
            <Link to={`/detail/${id}`}>
                <ImgWrapper>
                    <Img
                        src={src}
                    />
                </ImgWrapper>
            </Link>    
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            </>        
            }
        </Article>
    )
}
