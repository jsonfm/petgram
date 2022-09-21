import React, { useEffect, useRef, useState } from 'react';
import { MdFavoriteBorder } from "react-icons/md";
import { ImgWrapper, Img, Button, Article } from "./styles";

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'; 

export const PhotoCard = ({ id, likes=0, src=DEFAULT_IMAGE}) => {
    const [show, setShow] = useState(false);
    const element = useRef(null);

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
            ? window.IntersectionObserver
            :import('intersection-observer')
        )      
        .then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];
                console.log("intersecting: ", isIntersecting);
                if (isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            })
            observer.observe(element.current);
        })
    }, [element]);

    return(
        <Article ref={element}>
            {show &&      
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img
                        src={src}
                    />
                </ImgWrapper>
                <Button>
                   <MdFavoriteBorder size='32px' /> {likes} likes!
                </Button>
            </a>            
            }
        </Article>
    )
}
