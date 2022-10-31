import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import BannerDesk from "../../assets/image/desktop/manga.jpg"
import {
    ButtonHome, CardTitle,
    DetailContent,
    DetailContentCard, DetailContentDescription, DetailContentRating,
    DetailHeader,
    DetailHeaderBanner,
    DetailMain, DetailTrailer,
    Nav
} from "./detailStyle";
import Footer from "../../components/footer/footer";
import {getDetails, getRelationship} from "../../services/api/req";
import {Card, CardContent, Cards} from "../home/homeStyle";
import {useNavigate} from "react-router-dom";
import {clearRelationshipItens, setDetails} from "../../assets/redux/detailsSlice";

export default function Detail() {
    const details = useSelector((state)=> state.details.details)
    const relationship = useSelector((state)=> state.details.relationshipItens)
    const category = useSelector((state)=> state.value.userCategory)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        // details && getRelationship(details.relationships.genres.links.self ,dispatch)
    },[details])

    const goHome = () => {
        dispatch(clearRelationshipItens())
        dispatch(setDetails(null))
        window.scrollTo(0,0);
        navigate("/")
    }


    return (
        <>

            {/****************   Header   ******************/}

            <DetailHeader>
                <Nav>
                    <h1>{details.attributes.canonicalTitle}</h1>
                </Nav>
                <DetailHeaderBanner background={()=>
                    !details.attributes.coverImage? BannerDesk : details.attributes.coverImage.original
                }/>
            </DetailHeader>
            {/****************   Header   ******************/}

            {/****************   Main   ******************/}

            <DetailMain>
                <DetailContent>
                    <DetailContentCard image={details.attributes.posterImage.original}/>
                    <DetailContentDescription>
                        <h2>{details.attributes.canonicalTitle}</h2>
                        <p>{details.attributes.synopsis}</p>
                    </DetailContentDescription>
                    <DetailContentRating>
                        <h3>Average rating : <span>{`${Math.round(details.attributes.averageRating)} ❤`}</span></h3>
                        <h3>Show Type : <span>{`${details.type} | ${details.attributes.showType}`}</span></h3>
                        <h3>Age Rating : <span>{` ${details.attributes.ageRatingGuide} | ${details.attributes.ageRating}`}</span></h3>
                        <ButtonHome onClick={ ()=> goHome()}>Return to Home</ButtonHome>
                    </DetailContentRating>

                </DetailContent>
                <DetailTrailer>
                    <h2>Trailer</h2>
                    <iframe src={`https://www.youtube.com/embed/${details.attributes.youtubeVideoId}`}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </DetailTrailer>
                <CardTitle>If you liked this {category} , also check out these here:</CardTitle>
                <Cards>
                    {!relationship? console.log("loading"): relationship.map((relItem)=>{
                        console.log(relItem.id)

                        return(<Card key={relItem.id} onClick={()=>{
                                getDetails(relItem.links.self,dispatch)
                                getRelationship(details.relationships.genres.links.self ,dispatch)
                                window.scrollTo(0,0);
                            }}>
                                <img src={relItem.attributes.posterImage.original} alt={relItem.attributes.canonicalTitle}/>
                                <CardContent>
                                    <h1>{relItem.attributes.canonicalTitle}</h1>
                                    <p>Rating <span>: {Math.ceil(relItem.attributes.averageRating)}</span></p>
                                </CardContent>
                            </Card>
                        )})}
                </Cards>

            </DetailMain>

            {/****************   Main   ******************/}
            <Footer/>
        </>
    )
}