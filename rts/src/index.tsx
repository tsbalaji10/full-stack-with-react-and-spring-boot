import ReactDOM from 'react-dom'
import EventComponent from './events/EventComponent'
import UserSearch from './refs/UserSearch'
import GuestList from './state/GuestList'
// import UserSearch from './state/UserSearch'
const App=()=>{
    return <UserSearch/>
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)