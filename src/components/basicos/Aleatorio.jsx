import React from "react";

export default (props) => {

    return (
        `
        O valor aleatório entre ${props.min} e ${props.max} é de ${Math.floor(Math.random(props.min) * props.max)}
        `
    )

}