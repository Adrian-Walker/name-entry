import React, { Component } from "react"
// import Names from "./Names";



class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            nameList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                nameList: [...prevState.nameList, prevState.name],
                name: ""
            }
        })

    }
    handleChange(event) {
        event.preventDefault()
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const newPeople = this.state.nameList.map(person => <li>{person}</li>)
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
                        {newPeople}
                    </ol>
                    <button>Add Name</button>
                </form>
            </div>
        )
    }

}

export default App
