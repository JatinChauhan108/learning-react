# Why Context?
- When we neeed component A to pass a particular variable to another component B that's very deeply situated inside the nesting of component A, we have to pass props through many components from component A so that it finally reaches component B.

- One way of countering this problem is to create a global file and store all our variables there, but that is a very bad practice as it may lead to conflicting states.

- The context comes into place here, which allows the teleportation of variables from one component to another without passing props through a chain of components.

# How to use Context
- For accessing the variables from one component to another, we need to create a context as well as provide that context by wrapping the components inside the context provider.

- The components wrapped inside the provider gets access to the passed variables, no matter how deep they are situated inside the component tree.

- The component that needs the passed variable can access it by useContext() hook via the syntax:
jsx
const {state} = useContext(StateContext)

- useContext() takes the argument as the context name

# Creating the context
- The context is created in a separate file and exported from there so that any component can access it.
- Syntax for the same is:
jsx
export const StateContext = createContext('initial')

- The argument given to createContext() is taken as the default value of the variable in case the provider is not wrapped around the component.

# Providing the context
- The component tree in which we want to have the access of a variable is wrapped around the Context provider.
- The context provider is passed with the variables whose access we want to give.
- Syntax:
jsx
<StateContext.Provider value = {state}>
    ......Component Tree
</ StateContext.Provider>
