import React, {useState, useEffect} from "react"
import "./Tooltip.css"

const Tooltip = (props) =>{

    let instructionsSet= [
        {
            title:'This is your tooltip',
            description: 'To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color", "Press"]

        },
        {
            title:'This is your tooltip',
            description: 'To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color"]
        },
        {
            title:'This is your tooltip',
            description: 'To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color"]
        },
        {
            title:'This is your tooltip',
            description: 'To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color"]
        },
        
    ]

const getInfo = (index) => {
    

   return(instructionsSet[index])
}

        const [useTitle, setTitle] = useState((getInfo(props.infoToDisplay).title))
        const [useDescription, setDescription] = useState((getInfo(props.infoToDisplay).description))
        const [useSteps, setSteps] = useState((getInfo(props.infoToDisplay).step))





    useEffect(() => {

    }, [])






    return(
        <div className="tooltips">
        <h1>{useTitle}</h1>
        <p>{useDescription}</p>
        {useSteps ? useSteps.map(step=> <li>{step}</li>): <></>}
        </div>
    )
}

export default Tooltip