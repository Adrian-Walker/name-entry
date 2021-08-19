import { render } from "@testing-library/react"
import React from "react"
import Names from "./Names";

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
                <Names />
            </div>
        );
    }

}



export default App
