import React, { Component } from "react"
// import Names from "./Names";



class App extends Component {
    constructor() {
        super()
        this.state = {
            name: " "
        }
    }

    

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value=""
                        placeholder="Enter Name Here"

                    />
                </form>
            </div>
        )
    }

}

export default App
