import React, { useContext } from "react";
import { Context } from "@/context";

export const User = () => {
    const { removeAuth } = useContext(Context);
    return (
        <>
        <h2>User</h2>
        <button onClick={removeAuth}>Cerrar Sesión</button>
        </>
    )
}
