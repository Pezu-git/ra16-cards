import CardImg from "./CardImg";


const URL = "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/89c43dde-6bb9-4c1d-8e2c-59c3af5430d6/800x800"

const Card = (props) => (
    <div className="container">
        {props.imgURL && <CardImg imgURL={props.imgURL}/>}
        <div className="card-body">{props.children}</div>   
    </div>  
)

export default Card