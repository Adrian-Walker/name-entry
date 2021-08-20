import React from "react"
import App from "./App"


class Names extends Component {
    Component() {
        super()
        this.state = {
            name: " "
        }
    }

    render() {
        return (
            <div>
                <input></input>
                <h1></h1>
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
                <button onClick>Add</button>
            </div>
        )
    }

}

export default Names
