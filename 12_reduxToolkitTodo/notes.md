# Need of Redux
- The problem of state management and passing props through many components to reach the final one that uses it, goes way beyond the arrival of context API.
- Flux was one of the early solutions that was proposed to solve the problem.
- But flux had a problem of data flow.
- So, redux was created which is an independent library which works with Vue, react and other Javascript frameworks and libraries.


# How to use Redux
- Create a Store file
- Configure the store with required features.
- Create features folder and make a slice file (slice is just a fancy name for feature).
- Create a slice by passing the initital state, functionalities, etc in an object.
- We always have access of state and action in the functions written under reducers.
- State contains the current state values and action represents the values passed to the functions which can be accessed via payload.
- To use any functionality in a component, we need to explicitly import them, that's why we need to explicitly export them as well from the slice file.
- As a final step, we need to wrap our components into a provider which would be passed with a store prop with the value of the store whose access we want to give to the components

# Dispatch and Selector
- Whenever we need to use the functionality defined in our features, in any of the component, we have to dispatch that function call.
- The dispatch is done by using a dispatch function returned by useDispatch hook provided by react-redux.
- Similarly, whenever we need to access the state present in the store, we call useSelector hook
- This hook is given a callback function, which receives the state as an argument and the value returned by this callback function is the returned value of the useSelector hook as well


# Additional Info
- Every application has only one store, known as the single source of truth.