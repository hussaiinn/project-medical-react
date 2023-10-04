import './css/aboutUs.css';
import ashd from './images/ashd.png';

export default function AboutUs_con2() {
    return (
        <div className="as-container-2">
            <div className="as-con2-txt-container">
                <div className="as-con2-txt">
                    <h3 className="as-con2-head">Transform your healthcare concepts into interactive online experiences.</h3>
                    <p className="as-con2-para">Catalyze your healthcare vision by turning innovative ideas into tangible,
                        user-friendly web solutions. We specialize in bringing your healthcare concepts to life, creating
                        dynamic online experiences that benefit patients and medical professionals alike.</p>
                    <button className="as-con2-btn">Contact Us</button>
                </div>
            </div>
            <div className="as-con2-img-container">
                <img className="as-con2-img" src={ashd} alt=""/>
            </div>

        </div>
    )
}