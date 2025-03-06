import './Home.css';
import emailIcon from '../assets/email.png';
import githubIcon from '../assets/github.png';
import linkedInIcon from '../assets/linkedin.png';

function ContactSec(props){

    const date = new Date();

    return(
        <>
            <div className="ContactSec" id='contact'>
                <div>
                    <a href='https://drive.google.com/file/d/1HyZAqsO2V8qyCG8sSpdwMQnOzhl4AXnJ/view?usp=sharing' target='_blank' rel='norefferer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}>Get Resume</a>
                </div>
                <p>&copy; {date.getFullYear()} Addepalli Jayakar</p>
                <div>
                    <a href='https://www.linkedin.com/in/addepallijayakar270602/' target='_blank' rel='norefferer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}><img src={linkedInIcon} alt='LinkedIn'></img></a>
                    <a href='https://github.com/JayakarAddepalli' target='_blank' rel='norefferer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}><img src={githubIcon} alt='Github'></img></a>
                    <a href='mailto:addepallijayakar@gmail.com' target='_blank' rel='norefferer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}><img src={emailIcon} alt='Gmail'></img></a>
                </div>
            </div>
        </>
    )
}

export default ContactSec