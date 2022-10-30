import React, {useEffect, useRef} from "react";

import animeLoading from "../../assets/image/several/goku_70.gif"
import animewaiting from "../../assets/image/several/sonicImpaciente.gif"

import {getAnime, getDetails, getRelationship} from "../../services/api/req";
import {useDispatch, useSelector} from "react-redux";
import Navigate from "../../components/header/navigate";
import {Body, Card, CardContent, Cards, Main, Title} from "./homeStyle";
import {setDisplayText, setPageLimit} from "../../assets/redux/apiSlice";
import Footer from "../../components/footer/footer";
import {setWait} from "../../assets/redux/valueSlice";
import Pagination from "../../components/pagination/pagination";
import {setLimit} from "../../assets/redux/paginationSlice";
import {useNavigate} from "react-router-dom";


export default function Home() {

    const navigate = useNavigate()

// *******************   Reducers  **************

    const dispatch = useDispatch()

    //               ***** Api Slice *****

    const api = useSelector((state)=> state.api)

    //               ***** Details Slice *****

    const animeDet = useSelector((state)=> state.details.details)
    const relationship = useSelector((state)=> state.details.relationshipItens)

    //               ***** Pagination Slice *****

    const total = useSelector((state)=> state.pagination.total)
    const limit = useSelector((state)=> state.pagination.limit)

    //              ****** Value Slice *****

    const animes = useSelector((state)=> state.value.animeInfo.data)
    const category = useSelector((state)=> state.value.userCategory)
    const wait = useSelector((state)=> state.value.wait)


    const timeoutRef = useRef(null);

    const pageLimit = (numPage)=> {
        dispatch(setPageLimit(numPage))
        dispatch(setLimit(numPage))
    }

// function to get the information from the api

// ********* search info ************

    useEffect(()=>{
        pageLimit(10)
        api.text && dispatch(setDisplayText("")) &&
        getAnime(api.url, api.category, api.filter, api.text, api.pageLimit, api.pageOffset, dispatch)
    },[api.text, api.category, api.pageOffset])

 // ********* loading... *********

    useEffect(()=>{
        clearTimeout(timeoutRef.current)
        if (!api.displayText && !api.text){timeoutRef.current = setTimeout(()=> {dispatch(setWait(true))}
            ,10000)}else {dispatch(setWait(false))}
    },[api.displayText, api.text])

//********* details and relationship *********

    useEffect(()=>{
        animeDet && getRelationship(animeDet.relationships.genres.links.self ,dispatch)
    },[animeDet])

    useEffect(()=>{
        relationship.length > 0 && navigate("./detail")
    },[relationship])




    return (
        <Body>
            <Navigate/>
            <Main>
                <Title>
                    <h1>{category}</h1>
                </Title>

                <Cards>

                    {wait && <div className="loading"><img  src={animewaiting} alt="gif loading..."/></div> }

                    {!api.text && api.displayText && <div className="loading"><img  src={animeLoading} alt="gif loading..."/>
                        <h1>Loading...</h1></div>}

                    {api.text && animes && animes.map((anime)=>
                        <Card key={anime.id} onClick={()=>{
                            getDetails(anime.links.self,dispatch)
                        }}>
                            <img src={anime.attributes.posterImage.original} alt={anime.attributes.canonicalTitle}/>
                            <CardContent>
                                <h1>{anime.attributes.canonicalTitle}</h1>
                                <p>Rating <span>: {Math.ceil(anime.attributes.averageRating)}</span></p>
                            </CardContent>
                        </Card>
                    )}
                </Cards>
                {total > limit  && <Pagination/>}
            </Main>
            <Footer/>
        </Body>


    )
}

// const goDetails = (navigate, details)=>{
//     dispatch(getMovieDetails(details))
//     if (!details){
//         console.log("falso")
//     }else {
//         console.log("verdadeiro")
//         console.log(details)
//         navigate('/details')
//
//     }
// }