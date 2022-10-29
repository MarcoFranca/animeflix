import React from "react";
import {Button, ButtonNePr, Ul} from "./paginationStyle";
import {useDispatch, useSelector} from "react-redux";
import {setOffset} from "../../assets/redux/paginationSlice";
import {setPageOffset} from "../../assets/redux/apiSlice";

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS -1) / 2;

export default function Pagination() {
    const total = useSelector((state)=> state.pagination.total)
    const limit = useSelector((state)=> state.pagination.limit)
    const offset = useSelector((state)=> state.pagination.offset)
    const dispatch = useDispatch()

    const offSet = offset
    const current = offSet?(offSet/limit) +1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1)
    
    function onPageChange(page) {
        dispatch(setPageOffset((page - 1) * limit))
        dispatch(setOffset((page - 1) * limit))
    }



    return (
        <Ul>
            <ButtonNePr
                onClick={()=>onPageChange(current - 1)}
                disabled={current === 1}
            >
                Anterior
            </ButtonNePr>
            {total && Array.from({ length: Math.min(MAX_ITEMS, pages) })
                .map(( _, index) => {
                    if ((index + first) <= pages){
                        return index + first
                    }})
                .map((page)=> {
                    if (page) {
                        return (
                            <li key={page}>
                                <Button
                                    className={page === current ? "pagination--active" : null}
                                    onClick={() => {
                                        onPageChange(page)
                                    }}>
                                    {page}
                                </Button>
                            </li>
                        )
                    }})
            }
            <ButtonNePr onClick={()=>onPageChange(current + 1)}
            disabled={current === pages}
            >Próximo</ButtonNePr>
        </Ul>
    )

}