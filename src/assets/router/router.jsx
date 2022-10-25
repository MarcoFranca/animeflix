import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../../pages/home/home";
import Detail from "../../pages/detail/detail";
import PageNotFound from "../../pages/error/pageNotFound";

export default function Router() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}