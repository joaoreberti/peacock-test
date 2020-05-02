import React, {useState, useEffect} from "react"
import "./Tooltip.css"

const Tooltip = (props) =>{

    let instructionsSet= [
        {
            title:'Tooltip',
            // description: 'To navigate use the arrows and the numbers from 0-9',
            step: ["Press ctrl for Background Color", "Press alt for text color", "Press space for change fonts"]

        },
        {
            title:'This is your tooltip',
            // description: '1To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color"]
        },
        {
            title:'This is your tooltip',
            // description: '2To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color"]
        },
        {
            title:'This is your tooltip',
            // description: '3To navigate use the arrows, the numbers from 0-9 and OK',
            step: ["Press ctrl for Background Color", "Press alt for text color"]
        },
        
    ]



const getInfo = (index) => {
    console.log("get info")
    

   return(instructionsSet[index])
}

        const [useTitle, setTitle] = useState((getInfo(props.infoToDisplay).title))
        const [useDescription, setDescription] = useState((getInfo(props.infoToDisplay).description))
        const [useSteps, setSteps] = useState((getInfo(props.infoToDisplay).step))





    useEffect(() => {
        setTitle((getInfo(props.infoToDisplay).title))
        setDescription((getInfo(props.infoToDisplay).description))
        setSteps((getInfo(props.infoToDisplay).step))
    }, [props])






    return(
        <div className="tooltips">
        <p>{useDescription}</p>
        {useSteps ? useSteps.map(step=> <li>{step}</li>): <></>}
        </div>
    )
}

export default Tooltip