import "../style/Portfolio.css";
import img1 from "../portfolio/imgi_1_poert1.png";
import img2 from "../portfolio/imgi_2_port2.png";
import img3 from "../portfolio/imgi_3_port3.png";

export default function Portfolio() {
    return (
        <div className="container p-5">
            <h1 className="porh">portfolio component</h1>
            <div className="row g-4">
                <div className="col-md-4 d-flex justify-content-center g-5">
                    <img src={img1} alt="Portfolio 1" className="img img-fluid" />
                </div>
                <div className="col-md-4 d-flex justify-content-center g-5">
                    <img src={img2} alt="Portfolio 2" className=" img img-fluid" />
                </div>
                <div className="col-md-4 d-flex justify-content-center g-5">
                    <img src={img3} alt="Portfolio 3" className=" img img-fluid" />
                </div>
                <div className="col-md-4 d-flex justify-content-center g-5">
                    <img src={img1} alt="Portfolio 1" className="img img-fluid" />
                </div>
                <div className="col-md-4 d-flex justify-content-center g-5">
                    <img src={img2} alt="Portfolio 2" className="img img-fluid" />
                </div>
                <div className="col-md-4 d-flex justify-content-center g-5">
                    <img src={img3} alt="Portfolio 3" className="img img-fluid" />
                </div>
            </div>
        </div>
    );
}
