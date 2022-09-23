import React from "react";
import { Spinner } from "./styles";


export const LoadingSpinner = () => {
    return(
        <Spinner>
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="2"
            />
        </Spinner>
    )
}
