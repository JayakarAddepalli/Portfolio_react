import { hover } from '@testing-library/user-event/dist/hover'
import './Home.css'
import { useState } from 'react'

function SkillsSec(props){

    const [hoverIndex, setHoverIndex] = useState(null)
    const [hoverIndex2, setHoverIndex2] = useState(null)

    const boxShadows = [
        "0 0 10px rgba(255, 0, 150, 0.5)",
        "0 0 15px rgba(0, 157, 255, 0.5)",
        "0 0 25px rgba(255, 255, 0, 0.5)",
        "0 0 20px rgba(0, 68, 255, 0.5)",
        "0 0 20px rgba(255, 119, 0, 0.5)",
        "0 0 20px rgba(0, 255, 179, 0.5)",
        "0 0 20px rgba(0, 255, 72, 0.5)",
        "0 0 20px rgba(0, 42, 255, 0.5)",
        "0 0 20px rgba(102, 0, 255, 0.5)",
      ];

      const boxShadows2 = [
        "0 0 20px rgba(0, 42, 255, 0.5)",
        "0 0 25px rgba(255, 255, 0, 0.5)",
        "0 0 15px rgba(0, 157, 255, 0.5)",
        "0 0 10px rgba(255, 0, 170, 0.5)",
        "0 0 10px rgba(255, 85, 0, 0.5)",
        "0 0 20px rgba(0, 68, 255, 0.5)",
    ];
    const skillSet = ['Angular', 'ReactJs', 'Javascript', 'CSS', 'HTML', 'Python', 'Django', 'SQL', 'Bootstrap']
    const toolsSet = ['VSCode', 'Pycharm', 'Oracle 11g', 'Figma', 'Git', 'Github']

    const data = props.skillsArr.map((i, index)=><p key={index} onMouseEnter={()=> setHoverIndex(index)} onMouseLeave={()=> setHoverIndex(null)} style={{
        boxShadow: hoverIndex === index ? boxShadows[index] : "none",
        transition: "box-shadow 0.3s ease-in-out",
      }}><img src={i} alt={index+'Image'}></img><span>{skillSet[index]}</span></p>)
    const tools = props.toolsArr.map((i,index)=><p key={index} onMouseEnter={()=> setHoverIndex2(index)} onMouseLeave={()=> setHoverIndex2(null)} style={{
        boxShadow: hoverIndex2 === index ? boxShadows2[index] : "none",
        transition: "box-shadow 0.3s ease-in-out",
      }}><img src={i} alt={index+'Image'}></img><span>{toolsSet[index]}</span></p>)

    return(
        <>
            <div className="skillsSec" id='skills'>
                <div>
                    <h5>Technical Skills</h5>
                    <div className=''>
                        {data}
                    </div>
                </div>
                <div>
                    <h5>Tools I use</h5>
                    <div className=''>
                        {tools}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillsSec