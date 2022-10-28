import React from "react";
import {Banner, Header, Li, Nav, Ul} from "./navigateStyle";
import Search from "../search/search";
import {setCategory, setDisplayText, setText} from "../../assets/redux/apiSlice";
import {useDispatch, useSelector} from "react-redux";
import BannerDesk from "../../assets/image/desktop/manga.jpg"
import {setAnime, setManga, setUserCategory} from "../../assets/redux/valueSlice";
import useDebounce from "../../assets/hooks/useDebounce";


export default function Navigate() {
    const api = useSelector((state)=> state.api)
    const values = useSelector((state)=> state.value)
    const dispatch = useDispatch()

    const dispatchText = (event)=> dispatch(setText(event))
    const debounceChange = useDebounce(dispatchText, 800)

    const changeCategory=(category, selectAnime, selectManga)=>{
        dispatch(setUserCategory(category))
        dispatch(setAnime(selectAnime))
        dispatch(setManga(selectManga))
    }

    const clickCategory = (event)=>{
        dispatch(setCategory(event.target.id))
        event.target.id === "anime"?
            changeCategory("Anime", true, false):
            changeCategory("Mangá", false, true)
        }

        const textChange = (string)=>{
            dispatch(setDisplayText(string.target.value))
            debounceChange(string.target.value)
        }

    return (
        <Header>
            <Nav>
                    <Ul>
                        <Li colorBtn={values.anime} id="anime" onClick={(event)=>clickCategory(event)} >Anime</Li>
                        <Li colorBtn={values.manga} id="manga" onClick={(event)=>clickCategory(event)} >Mangá</Li>
                    </Ul>
                    <Search value={api.displayText}
                            onchange={(string)=> textChange(string)}
                            category={values.userCategory}
                    />
            </Nav>
            <Banner background={BannerDesk}/>
        </Header>
    )
}