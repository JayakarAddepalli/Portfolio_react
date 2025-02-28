import './Home.css';
import upArr from '../assets/uparr.png';
import upArrWhite from '../assets/up-arrow.png';

function HomeComp(props){
    return(
        <>
            <div className="HomeComponent" style={props.upScroll?{display:'block'}:{display:'none'}} onMouseMove={props.handleMove} onMouseOut={props.handleOut}>
                <a href="#herosection"><img src={ props.uparrowBolImg ? upArrWhite : upArr} alt='upArrow'></img></a>
            </div>
        </>
    )
}

export default HomeComp