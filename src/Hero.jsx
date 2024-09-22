import "./App.css"
import Hero_img from "./assets/photo-grid.png"
export default function hero(){
    return (
        <div className="Hero">
            <img src={Hero_img} alt="Hero_img" className="Hero--img" />
            <div className="Hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by <br/>one-of-a-kind hosts—all without leaving <br/>home.</p>
            </div>   
        </div>
    )
}