import { useParams } from "react-router-dom";

const Adopt = () => {
    const {id} = useParams(); 
    
    return (
        <div>
            <h1>입양신청서작성</h1>
        </div>
    );
};

export default Adopt;
