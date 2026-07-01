import type React from "react";
import { useNavigate, useParams } from "react-router-dom";





const Post : React.FC = () =>{

    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    navigate("/"); 
    }

    return(
        <>
        <h3>Post ID : {id}</h3>
        <button onClick={handleClick}>HOME으로 이동</button>
        </>
    );
}
export default Post;