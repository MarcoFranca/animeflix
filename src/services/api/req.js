import axios from "axios";
import {setAnimes} from "../../assets/redux/valueSlice";

export const getAnime = (url,category,filter, text, dispatch)=>{
    axios.get(url + category + filter + text ,
        {
            headers: {
                "Accept": "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json"
            }
        }).then(response => {
        dispatch(setAnimes(response.data))
        console.log(response.data)
        console.log(filter + text)

    }).catch((error)=> console.log(error))
}