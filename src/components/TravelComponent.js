import React from "react"
import ViewComponent from "./ViewComponent";

function TravelComponent(props){
    return(
        <main>
            <hr/>
            <h1>Form</h1>
            <hr/>
            <form>
                <input 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange}
                    placeholder="First Name" 
                />     
                <br />
                <br />
                <input 
                    name="lastName" 
                    value={props.data.lastName} 
                    onChange={props.handleChange}
                    placeholder="Last Name" 
                />
                <br />
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender" 
                        value="male" 
                        onChange={props.handleChange}
                        checked={props.data.gender === "male"} 
                    />
                Male</label>
                <label>
                    <input 
                        type="radio"
                        name="gender" 
                        value="female" 
                        onChange={props.handleChange}
                        checked={props.data.gender === "female"} 
                    /> 
                female</label>
                <br/>
                <br/>
                <label>Destination:</label>
                    <select name="countryToVisit" value={props.data.countryToVisit} onChange={props.handleChange} >
                    <option value="">-- Chose Destination here --</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                        <option value="Turkey">Turkey</option>
                    </select> 
                
            </form>     
            
            <ViewComponent 
                data={props.data}
            />
        </main>    
    )
}

export default TravelComponent;