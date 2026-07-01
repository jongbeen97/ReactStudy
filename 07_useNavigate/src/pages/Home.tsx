import type React from "react";
import { useNavigate } from "react-router-dom";

const Home : React.FC = () =>{
    
    // useNavigate (함수)
    const navigate = useNavigate(); 
    
    // eventHandler (이벤트 객체 타입 명시 필요 : 안하면 오류난다)
    const handleClick = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const postId = e.currentTarget?.dataset.postId;
        // postId를 이용한 요청 
        navigate(`/post/${postId}`);
    }
    
    return(
        <>
            <h3>Home</h3>
            <button onClick={handleClick} data-post-id="1">
                <span>POST-1 로 이동</span>
                </button>
            <button onClick={handleClick} data-post-id="2">
                <span>POST-2 로 이동</span>
                </button>
        </>
    );
}
export default Home;