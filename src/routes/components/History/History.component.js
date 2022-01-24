import {useLocation, useNavigate, useParams} from "react-router-dom";

const History = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams()

    return (
        props.onRender({...props, navigate, location, params})
    )
}

export {History}