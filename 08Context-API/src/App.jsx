import './App.css'
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Usercontextprovider from "./Context/Usercontextprovider"


function App() {
  

  return (
    <Usercontextprovider>
      <h1>  React With Hitesh</h1>
      <Login />
      <Profile/>

    </Usercontextprovider>
  )
}

export default App
