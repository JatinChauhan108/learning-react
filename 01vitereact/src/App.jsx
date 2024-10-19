import Chai from "./Chai"


function App() {
  const username = "chai aur code"

  return (
    // <> is called a fragment
    // this is necessary as adjacent JSX elements must be wrapped in a single element
    // variables can be wrapped with curly braces and used with JSX elements
    // but these variables must be evaluated expressions and not conditionals like if,else or any unevaluated expressions
    <>
    <Chai/>
    <h1>chai aur react {username}</h1>
    <p>test para</p>
   </>
  )
}

export default App