import type React from "react";
import { useParams } from "react-router-dom";

const User: React.FC = () => {

    // 경로 변수 처리하는 useParams
    // 경로 변수를 모두 모아서 객체 형태로 반환 
    // useParams 는 문자열 혹은 undefined 로 반환을 한다. 

    const { id } = useParams<{id: string}>(); // 기본적으로 문자열은 변수 처리 
    const userId = id ? Number(id) : NaN;

    return(
        <h3>User 페이지 (UserId: {userId})</h3>
    )
}

export default User;