import "../style/Home.css";
import img from "../portfolio/imgi_1_avataaars.svg"
export default function Home(){
    return <div className="home ">
        <img src={img} className="imgg" alt="" />
        <h1>start Framework</h1>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
}