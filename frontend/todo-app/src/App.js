import React, { Component } from "react";
import "./App.css";
import "./bootstrap.css"
// import FirstComponent from "./components/learning-examples/FirstComponent";
// import SecondComponent from "./components/learning-examples/SecondComponent";
// import ThirdComponent from "./components/learning-examples/ThirdComponent";
// import  Counter  from "./components/counter/Counter";
// import CounterTest from "./components/counter/CounterTest"
// import TodoApp from "./components/todo/TodoApp"
// import TodoApp from './components/todo-new/TodoApp'
import SignIn from './components/todo-new/js/SignIn.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <CounterTest/> */}
        {/* <TodoApp/> */}
        {/* <TodoApp/> */}
        <SignIn/>

      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         Hello World
//         <FirstComponent />
//         <SecondComponent />
//         <ThirdComponent />
//         <FourthComponent />
//       </div>
//     );
//   }
// }

// function FourthComponent() {
//   return <div className="fourthComponent">Fourth Component</div>;
// }
export default App;
