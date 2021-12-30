import React from "react"
import TravelComponent from "./TravelComponent"

class TravelContainer extends React.Component{

    constructor(){
        super()

        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            favoriteFood: "",
            countryToVisit: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const{name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <TravelComponent
                handleChange={this.handleChange}
                data={this.state}
            />    
        )
    }

}

export default TravelContainer;

