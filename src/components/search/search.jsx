import React from "react";
import {Input} from "./searchStyle";

export default function Search({onchange, category}) {

    return (
        <>
            <Input type="search"  onChange={onchange} placeholder={`procure o seu ${category}` }/>
        </>
    )
}