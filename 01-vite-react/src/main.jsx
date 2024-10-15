import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App || Abhi </h1>
    </div>
  )
  
}
const anotherElement = (
  <a href='https://google.com' target = '_blank'>Visit Google</a>
)
// Another method
// createRoot(document.getElementById('root')).render(
//   anotherElement 
// )

const anotherUser = "Chai With Hitesh"
const reactElement = React.createElement(
  'a' ,
  { href: 'https://google.com', target: '_blank' },
  'Click me to Visit Google',
  anotherUser
)
// Another Method
createRoot(document.getElementById('root')).render(
  reactElement 
)

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   {/* // MyApp()  (Without using any strictmode in <MyApp/> we can  also write as this because as it is a function) */}
//     <App />
//    </StrictMode>,
  
// )



