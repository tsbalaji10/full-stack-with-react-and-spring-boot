import axios from "axios";
import { Component } from "react";

class HelloWorldService extends Component{
    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:4201/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()
