import React, {useEffect} from "react";

import animeLoading from "../../assets/image/several/goku_70.gif"
import animewaiting from "../../assets/image/several/sonicImpaciente.gif"

import {getAnime} from "../../services/api/req";
import {useDispatch, useSelector} from "react-redux";
import Navigate from "../../components/header/navigate";
import {Body, Card, CardContent, Cards, Main, Title} from "./homeStyle";
import {setDisplayText} from "../../assets/redux/apiSlice";
import Footer from "../../components/footer/footer";
import {setWait} from "../../assets/redux/valueSlice";


export default function Home() {
    const api = useSelector((state)=> state.api)
    const animes = useSelector((state)=> state.value.animeInfo.data)
    const category = useSelector((state)=> state.value.userCategory)
    const wait = useSelector((state)=> state.value.wait)
    const dispatch = useDispatch()

    useEffect(()=>{
        api.text &&
        dispatch(setDisplayText("")) &&
        getAnime(api.url, api.category, api.filter, api.text, dispatch)
    },[api.text, api.category])

    useEffect(()=>{
        if (!api.displayText && !api.text){
            setTimeout(()=> dispatch(setWait(true)),10000)
        }else {dispatch(setWait(false))}
    },[api.displayText, api.text])

    return (
        <Body>
            <Navigate/>
            <Main>
                <Title>
                    <h1>{category}</h1>
                </Title>

                <Cards>

                    {wait && <div className="loading"><img  src={animewaiting} alt="gif loading..."/></div> }
                    {!api.text && api.displayText && <div className="loading"><img  src={animeLoading} alt="gif loading..."/><h1>Loading...</h1></div>}
                    {api.text && animes && animes.map((anime)=>
                        <Card key={anime.id}>
                            <img src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle}/>
                            <CardContent>
                                <h1>{anime.attributes.canonicalTitle}</h1>
                                <p>Rating <span>: {Math.ceil(anime.attributes.averageRating)}</span></p>
                            </CardContent>
                        </Card>
                    )}
                </Cards>
            </Main>
            <Footer/>
        </Body>


    )
}