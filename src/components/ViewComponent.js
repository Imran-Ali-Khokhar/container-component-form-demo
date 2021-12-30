import React from "react"

function ViewComponent(props){
    return(
        <div>
            <hr/>
            <h1>Data Entered</h1>
            <hr/>
            <p><b>First Name:</b> {props.data.firstName}</p>
            <p><b>Last Name: </b>{props.data.lastName}</p>
            <p><b>Gender: </b>{props.data.gender}</p>
            <p><b>Destination: </b>{props.data.countryToVisit}</p>
        </div>
    )
}

export default ViewComponent;