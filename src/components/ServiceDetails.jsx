import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error"
import { skillRequest } from "../actions/actionCreators";

export default function ServiceDetails(){
    const { item, loading, error } = useSelector(state => state.skill);
    const dispatch = useDispatch();
    
    const { id } = useParams();
    window.localStorage.setItem('id', id);
    useEffect(() => {
        dispatch(skillRequest());
    }, [id])

    return(
        <>
            { loading ? <Loading/> :
              error ? <Error id={id}/> :
             (
                <div>
                    <p>{item?.name}</p>
                    <ul className="item_details">
                        <li>{item?.content}</li>
                        <li>Стоимость: {item?.price}</li>
                    </ul>
                </div>
             )
             }
        </>
    )
}