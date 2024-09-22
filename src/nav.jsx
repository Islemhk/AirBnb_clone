import "./App.css"
import airbnb from "./assets/airbnb-logo.png"
export default function nav(){
    return(
        <div className="nav">
            <img src={airbnb} alt="logo" className="nav--logo"/>

        </div>
    )
}