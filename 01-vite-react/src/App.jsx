import Chai from "./chai"

function App() {
  const username = "Chai aur Code"
  

  return (
    
    // <h1> Chai Aur React with vite | Abhisek | Go to vite.dev site and create a new react project there.
    // And to run that project use:- npm run dev</h1>
    
    // <p>test</p> : error (Only one element will pass)
    <>
      <Chai />
      <h1>Chai Aur React {username}</h1>  {/* {username}:-it is called variable or evaluated expression and we can only write that variable in this not any conditions like if)     */}
      <p>Test para</p>
      {/* <></>:This is called fragment in react and it takes all the element as one */}
    </>
  )
}

 export default App
