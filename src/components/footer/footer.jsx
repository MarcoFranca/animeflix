import React from "react";
import {FooterDiv} from "./footerStyle";
import {useSelector} from "react-redux";

export default function Footer() {
    const category = useSelector((state)=> state.value.userCategory)
    const total = useSelector((state)=> state.pagination.total)
    const limit = useSelector((state)=> state.pagination.limit)
    return (
        <FooterDiv>
        <h1>Footer | {category} | Pages: {Math.ceil(total  / limit)}</h1>
        </FooterDiv>
    )
}