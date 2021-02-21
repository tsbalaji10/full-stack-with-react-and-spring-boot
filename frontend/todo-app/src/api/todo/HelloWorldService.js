import axios from "axios"

class HelloWorldService{
executeHelloWorldService(){
   return axios.get('http://localhost:4201/helloworld')
}
executeHelloWorldBeanService(){
    return axios.get('http://localhost:4201/hello-world-bean')
 }
 executeHelloWorldPathVariableService(name){
    //  console.log(name) btoa-base 64 encoding
    // let username='in28minutes'
    // let password='dummy'

    // let basicAuthHeader='Basic '+window.btoa(username+":"+password)
     return axios.get(`http://localhost:4201/hello-world/path-variable/${name}`)
    //  ,
    //  {
        //  headers:{
        //      authorization:basicAuthHeader
        //  }
    //  }
     
 }
}

export default new HelloWorldService()