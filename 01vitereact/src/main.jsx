import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// const ReactElement = {                                                       // this is our custom react element
//     type: 'a',                                                               // react also makes an object tree like this out of html, behind the scenes
//     props: {                                                                 // but this object tree can't be rendered using render() as it expects an object tree in some pre-defined form which can be created using React.createElement() only
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>              // any html written like this is an invalid syntax in javascript, but the react environment converts the html into an object tree
)



const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser                                                                // If we would have written this variable inside curly braces within the html it would be injected like this by the parser in createElement() method
)

// ReactDOM.createRoot(document.getElementById('root')).render(
 
//     <App />                                                                 // App() can also be written, but is not used because of optimization and standardization issues
  
// )

ReactDOM.createRoot(document.getElementById('root')).render(                   // render(), in its argument takes object tree converted from HTML by createElement()
 
    reactElement
  
)





 
   