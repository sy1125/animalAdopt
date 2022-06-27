const Button = ({text, type, onClick}) => {

    const btnType = ['positive', 'negative'].includes(type)? type:'default';

    return ( 
        <button className={["Button", `Button-${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;