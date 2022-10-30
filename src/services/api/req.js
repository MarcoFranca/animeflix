import axios from "axios";
import {setAnimes} from "../../assets/redux/valueSlice";
import {setTotal} from "../../assets/redux/paginationSlice";
import {clearRelationshipItens, setDetails, setRelationshipItens} from "../../assets/redux/detailsSlice";

export const getAnime = (url,category,filter, text, pageLimit, offset, dispatch)=>{
    axios.get(url + category + filter + text + pageLimit + offset ,
        {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            }
        }).then(response => {
        dispatch(setAnimes(response.data))
        dispatch(setTotal(response.data.meta.count))
        console.log("Animes and mangas =>")
        console.log(response.data)

    }).catch((error)=> console.log(error))
}

export const getDetails = (link, dispatch)=>{
    axios.get(link,
        {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            }
        }).then(response => {
        dispatch(setDetails(response.data.data))
        console.log("details =>")
        console.log(response.data.data)

    }).catch((error)=> console.log(error))
}

export const getRelationship = (link, dispatch)=>{
    axios.get(link,
        {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            }
        }).then(response => {
        dispatch(clearRelationshipItens())
        console.log(response.data.data)
        setRelationItens(response.data.data, dispatch)
        }).catch((error)=> console.log(error))
}

const setRelationItens = (itemsId, dispatch)=>{
    itemsId.map((item)=>{
        axios.get(`https://kitsu.io/api/edge/anime/${item.id}`,{
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            }})
            .then(response => {
                dispatch(setRelationshipItens(response.data.data))
                console.log("relationship item =>")
                console.log(response.data.data)
            })
    }).catch((error)=> console.log(error))
}

