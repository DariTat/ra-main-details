import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import Loading from "./Loading";
import Error from "./Error"
import { skillsRequest } from "../actions/actionCreators";

export default function ServiceList() {
    const { items, loading, error } = useSelector(state => state.skills);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(skillsRequest());
    }, [])

    return(
        <>
        {loading ? <Loading/> :
        error ? (
        <Error/>
      ) : (
        <ul>
          {items.map((o) => (
            <NavLink to={`/${o.id}/details`}><li className="item" key={o.id}>{o.name}</li></NavLink>
          ))}
        </ul>
      )}
        </>
    )
}