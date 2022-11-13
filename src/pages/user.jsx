import React, { useContext } from "react";
import { Context } from "@/context";

import { PhotoContainer, ImageProfile, InfoProfile, Button } from "@/styles/user";

export const User = () => {
    const { removeAuth } = useContext(Context);
    return (
        <div className="container">
            <PhotoContainer>
                <ImageProfile 
                    src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="profile"
                />
                <InfoProfile>
                    <h3>@usermx</h3>
                </InfoProfile>
            </PhotoContainer>
            <Button  onClick={removeAuth}>Cerrar Sesión</Button>
        </div>
    )
}
