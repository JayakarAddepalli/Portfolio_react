import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import starIcon from '../assets/star.png'
import './Home.css'
import menu from '../assets/menu.png'
import FeedBackComponent from './feedback'
import { createPortal } from 'react-dom'
import popupSound from "../assets/poup.wav"

function Header(props){

      
    const outerMouse = useRef(null);
    const navRef = useRef(null);
    const menuRef = useRef(null);

    const [theme, setTheme] = useState("light");
    const [showPopup, setShowPopup] = useState(false);

    const onToggle = (event)=>{
        if(event.target.checked){
            setTheme('dark');
            setTimeout(()=>{
                setShowPopup(false);
            }, 500)
        }
        else{
            setTheme('light');
        }
    }

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(()=>{
        let timer; 

        if (theme === 'light') {
            timer = setTimeout(() => {
                const sound = new Audio(popupSound);
                sound.play().catch(() => {
                    console.log("Autoplay blocked. Will play after user interaction.");
                });
                setShowPopup(true);
            }, 10000);
        }
    
        return () => {
            clearTimeout(timer); // Clear previous timeout to prevent multiple sound plays
        };
    }, [theme])


    const handleMove = (e)=>{
        outerMouse.current.style.top = e.clientY+'px'
        outerMouse.current.style.left = e.clientX+'px'
    }

    useEffect(()=>document.addEventListener('mousemove', handleMove), [])

    const [clicked, setClick] = useState(false)
    
    const HandleClick = ()=>{
        setClick(!clicked)
    }

    useEffect(()=>{
        if(clicked){
            navRef.current.style.transform = "translateX(0px)";
        }
    },[clicked])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 880) {
                setClick(true);
            } else {
                setClick(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [showModel, setShowModel] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModel(true);  // Show the modal after 5 seconds
        }, 5000);

        return () => clearTimeout(timer);  // Cleanup the timeout
    }, []);

    useEffect(() => {
        function handleOutsideClick(event) {
            if (
                window.innerWidth <= 960 &&
                navRef.current && 
                !navRef.current.contains(event.target) && 
                menuRef.current && 
                !menuRef.current.contains(event.target)
            ) {
                setClick(false);
            }
        }

        function handleScroll() {
            if(window.innerWidth <= 960){
                setClick(false);
            }
        }

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            document.removeEventListener('touchstart', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
            <header>
                <nav>
                    <div className='logo'>
                        <img src={logo} alt="Logo"></img>
                    </div>
                    <div className='navList' ref={navRef} style={{ display: clicked ? 'flex' : 'none'}}>
                        <a href="#about" onMouseMove={props.handleMove} onMouseOut={props.handleOut} style={props.abo?{backgroundColor:'rgb(255, 0, 119)', borderRadius:'5px', boxShadow:' 0px 0px 10px rgb(255, 0, 119)'}:{backgroundColor:'transparent'}}>About</a>
                        <a href="#skills" onMouseMove={props.handleMove} onMouseOut={props.handleOut} style={props.ski?{backgroundColor:'rgb(170, 0, 255)', borderRadius:'5px', boxShadow:' 0px 0px 10px rgb(170, 0, 255)'}:{backgroundColor:'transparent'}}>Skills</a>
                        <a href="#projects" onMouseMove={props.handleMove} onMouseOut={props.handleOut} style={props.pro?{backgroundColor:'rgb(0, 157, 255)', borderRadius:'5px', boxShadow:' 0px 0px 10px rgb(0, 157, 255)'}:{backgroundColor:'transparent'}}>Projects</a>
                        <a href="#contact" onMouseMove={props.handleMove} onMouseOut={props.handleOut} style={props.con?{backgroundColor:'rgb(34, 255, 0)', borderRadius:'5px', boxShadow:' 0px 0px 10px rgb(34, 255, 0)'}:{backgroundColor:'transparent'}}>Contact</a>
                        <a href="https://github.com/JayakarAddepalli/Portfolio_react" target='_blank' rel='noreferrer' onMouseMove={props.handleMove} onMouseOut={props.handleOut}><img src={starIcon} alt='starIcon'></img></a>
                    </div>
                    <span className='Menu' ref={menuRef} onClick={HandleClick} style={{opacity : clicked ? 0.5 : 1}}>
                        <img src={menu} alt='Menu'></img>
                    </span>
                </nav>
                <label className='switch'>
                    <input type='checkbox' name='toggleTheme' onClick={onToggle}></input>
                    <span className='slider round'></span>
                </label>
                {showPopup && (
                    <div className='popup'>
                        <p>Try Dark Mode</p>
                        <button onClick={()=>setShowPopup(false)}>Dismiss</button>
                    </div>
                )}
                <div id='mousePointer' ref={outerMouse}>
                    <div id='innerPointer' style={props.innerMouse?{transform:'scale(1.5,1.5)', transition:'all 1s'}:{transform:'scale(1,1)', transition:'all 1s'}}></div>
                </div>
            </header>

            {showModel && createPortal(
                <FeedBackComponent onClose={() => setShowModel(false)} />,
                document.body
            )}
        </>
    )
}

export default Header