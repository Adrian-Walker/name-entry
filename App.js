import React, { Component } from "react"
// import Names from "./Names";



class App extends Component {
    constructor() {
        super()
        this.state = {
            name: " "
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value=""
                        placeholder="Enter Name Here"
                        onChange={this.handleChange}
                    />
                    <h1>{this.state.name}</h1>
                </form>
            </div>
        )
    }

}

export default App
