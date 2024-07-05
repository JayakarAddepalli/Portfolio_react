import './Home.css'
import upArr from '../assets/uparr.png'

function HomeComp(props){
    return(
        <>
            <div className="HomeComponent" style={props.upScroll?{display:'block'}:{display:'none'}} onMouseMove={props.handleMove} onMouseOut={props.handleOut}>
                <a href="#herosection"><img src={upArr} alt='upArrow'></img></a>
            </div>
        </>
    )
}

export default HomeComp