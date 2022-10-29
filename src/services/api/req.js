import axios from "axios";
import {setAnimes} from "../../assets/redux/valueSlice";
import {setTotal} from "../../assets/redux/paginationSlice";

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
        console.log(response.data)

    }).catch((error)=> console.log(error))
}