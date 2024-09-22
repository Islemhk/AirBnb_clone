import "./App.css"
import img from "./assets/katie-zaferes.png"
import star from "./assets/star.png"

export default function card(){
    return(
        <div className="card">
            <p className="card--stat">SOLD OUT</p>
            <img src={img} alt="" className="card--img"/>
            <div className="rating">
                <p className="rating--rating-number"> <img src={star} alt="" />5.0</p>
                <p className="rating--reviews">(6)</p>
                <p className="rating--country">USA</p>
            </div>
            <p className="card--title">Life lessons with katie Zaferes</p>
            <p className="card--cost">From $136<span className="card--maker-type"> &nbsp;/ person</span></p>

            
        </div>
    )
}