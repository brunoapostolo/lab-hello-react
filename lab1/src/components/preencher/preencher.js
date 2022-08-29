import image1 from "../../images/icon1.png";
import image2 from "../../images/icon2.png";
import image3 from "../../images/icon3.png";
import image4 from "../../images/icon4.png";
import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";

function PreenchendoReact(){
    return (
        <>
            <header>
                <nav>
                    <img src={logo} alt="00"/>
                    <img src={hamburger} alt="00"/>
                </nav>
            </header>
            <div id="blue">
               
                <h1>Say hello to ReactJS</h1>
                <p className="you-will">You will learn the most popular frontend library, and become a super Ninja developer</p>
                <div className="awesome">Awesome!</div>
                
            </div>
            <div id="white">
                <div className="coluna">
                    <img src={image1} alt="qualquer coisa"/>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive. UIs</p>
                </div>
                <div className="coluna">
                    <img src={image2} alt="ola" />
                    <h2>Components </h2>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="coluna">
                    <img src={image3} alt="ola" />
                    <h2>Single-way</h2>
                    <p>A set immutable values are passed to the components</p>
                </div>
                <div className="coluna">
                    <img src={image4} alt="ola" />
                    <h2>JSX</h2>
                    <p>Statically-typed designed to run on modern browsers</p>
                </div>
            </div>
        </>
    );
}

export default PreenchendoReact;



