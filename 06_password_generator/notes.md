# React Hooks

- useEffect(() => {}, []) : Takes a callback function and a dependency array. The callback function is executed after the completion of every render, but is executed only when one or more dependencies in the dependency array changes

- useRef() : returns an object which has only one property called current. The value of current is initialised to the value passed in the arguments of useRef. Later on, the value in current can be set to any node by the use of ref attribute in that node. Through this hook, we can read and write the properties of that node outside of jsx

- useCallback(() => {}, []) : takes a callback function and a dependency array. Returns the callback function and caches(i.e., stores) it in memory. If we write a function definition normally, a new function definition is created every time, but with useCallback hook, the function definition (or some part of it, as required) is cached and only changes when one or more dependencies in the dependency array change. In this project, useCallback is used only for optimization purposes and can be removed.

## Optional Chaining operator

```jsx
passwordRef.current?.select()
```

accesses the object's property or calls a function and if the object accessed or function called is undefined or null, the expression evaluates to undefined instead of throwing an error

```jsx
passwordRef.current?.setSelectionRange(0,999)
```

sets the part of text to be selected, first argument is the index from where to start selecting and second argument is the index at which to stop