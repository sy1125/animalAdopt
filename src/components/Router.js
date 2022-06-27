import React from "react";
import { Link } from "react-router-dom";

const Router = () => {
    return (
        <div className="link">
            <Link to={"/sale"}>분양게시글작성</Link>
            <Link to={"/interest"}>관심있는동물</Link>
        </div>
    )
}

export default Router;