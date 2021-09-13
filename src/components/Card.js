import CardImg from "./CardImg";


const URL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fms314006.github.io%2Fsimple-implementing-ssr-in-react%2F&psig=AOvVaw3IndgCJ5FOh77zA0k6iVMT&ust=1631621851015000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPipxLv2-_ICFQAAAAAdAAAAABAD"

const Card = (props) => (
    <div className="container">
        {props.imgURL && <CardImg imgURL={props.imgURL}/>}
        <div className="card-body">{props.children}</div>   
    </div>  
)

export default Card