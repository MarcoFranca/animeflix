import React from "react";

export default function Search({onchange}) {

    return (
        <>
            <input type="search"  onChange={onchange}/>
        </>
    )
}