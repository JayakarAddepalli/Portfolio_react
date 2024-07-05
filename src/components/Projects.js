import './Home.css';
import emobilesBanner from '../assets/banners/Screenshot 2024-06-26 120001.png'
import ticBanner from '../assets/banners/Screenshot 2024-06-26 115523.png'
import todoBanner from '../assets/banners/todo.png'
import formBanner from '../assets/banners/Screenshot 2024-06-26 120708.png'
import ageBanner from '../assets/banners/Screenshot 2024-06-26 120633.png'
import link from '../assets/link.png'
import starIcon from '../assets/star.png'

function ProjectSec(props){

    // const projectName = ['E-Mobiles', 'Tic Tac Toe', 'Todo App', 'Multi-Step-Form', 'Age Calculator']
    // const banners = [emobilesBanner, ticBanner, todoBanner, formBanner, ageBanner]
    const Projects = [
        {
            projectName : 'E-Mobiles',
            banners : emobilesBanner,
            skills : ['Django'],
            proLink : 'https://jayakar.pythonanywhere.com/',
            gitRepo : 'https://github.com/JayakarAddepalli/EMOBILESCART',
        },
        {
            projectName : 'Tic Tac Toe',
            banners : ticBanner,
            skills : ['React'],
            proLink : 'https://tictactoe-79390.firebaseapp.com/',
            gitRepo : 'https://github.com/JayakarAddepalli/TicTacToe',
        },
        {
            projectName : 'Todo App',
            banners : todoBanner,
            skills : ['React'],
            proLink : 'https://todo-app-d6d66.firebaseapp.com/',
            gitRepo : 'https://github.com/JayakarAddepalli/Todo-react-app',
        },
        {
            projectName : 'Multi-Step-Form',
            banners : formBanner,
            skills : ['Javascript'],
            proLink : 'https://jayakaraddepalli.github.io/Multi-Step-Form/',
            gitRepo : 'https://github.com/JayakarAddepalli/Multi-Step-Form',
        },
        {
            projectName : 'Age Calculator',
            banners : ageBanner,
            skills : ['Javascript'],
            proLink : 'https://jayakaraddepalli.github.io/Age_Cal/AgeCalculator.html',
            gitRepo : 'https://github.com/JayakarAddepalli/Age_Cal',
        }

    ]


    const projectItems = Projects.map((i, index)=>
    <div className='projectContainers' key={index}>
        <div>
            <img src={i.banners} alt='bannerLayout'></img>
        </div>
        <h3>{i.projectName}</h3>
        
        <span style={{display:'flex', justifyContent:'space-between'}}>
            <p>built using {i.skills} </p>
            <p>
                <a href={i.gitRepo} target='_blank' rel='noreferrer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}><img src={starIcon} alt='gitRepo'></img></a> 
                <a href={i.proLink} target='_blank' rel='noreferrer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}><img src={link} alt='SiteLink'></img></a>
            </p>
        </span>
    </div>) 

    return(
        <>
            <div className="projectSec" id='projects'>
                {projectItems}
            </div>
        </>
    )
}

export default ProjectSec