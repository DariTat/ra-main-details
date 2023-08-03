import { useDispatch } from "react-redux"
import { skillRequest, skillsRequest } from "../actions/actionCreators";


export default function Error({id}) {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        console.log(id)
        id ? dispatch(skillRequest()) : dispatch(skillsRequest())
    }

    return(
        <div className="error">
            <p>Произошла ошибка!</p>
            <button onClick={handleClick}>Повторить запрос</button>
        </div>
    )
}