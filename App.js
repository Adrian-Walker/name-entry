import React, { Component } from "react"
// import Names from "./Names";



class App extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        event.preventDefault()
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        placeholder="Enter Name Here"
                        onChange={this.handleChange}
                    />
                    <ol>

                        <li>
                            <h1>{this.state.name}</h1>
                        </li>

                    </ol>
                    <button>Add Name</button>
                </form>
            </div>
        )
    }

}

export default App
