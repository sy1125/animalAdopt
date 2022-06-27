import { useSearchParams,useNavigate } from "react-router-dom";

const Sale = () => {
    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    return (
        <div>
            <h1>분양게시글작성</h1>
            <button onClick={()=> setSearchParams({ who:"seonYong" })}>
                ID 바꾸기
            </button>
            <button onClick={()=> {navigate("/");}}>
                Home가기
            </button>
            <button onClick={()=> {navigate(-1);}}>
                이전페이지
            </button>
        </div>
    );
};

export default Sale;
