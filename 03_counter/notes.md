# How to write multiple setState() together

If you write multiple setState() functions together and pass a value (a number or an object), it would work as if only the last setState()
was written, all the other setState() statements are ignored.

```jsx
const increase = () => {
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+3)
}
```

Only setCount(count + 3) would be executed and value of count as 18 is rendered ( if 15 was the initial count value ).

##

So in order to write multiple setCount together, and using the updated value of count in the subsequent setCount() functions, pass a function to setState() instead of a value. 

The function written inside setCount() receives the current value of count as the argument and hence everytime this function is called the updated value would be used to update the value of count.

```jsx
const increase = () => {
    setCount(currCount => currCount + 1)
    setCount(currCount => currCount + 1)
    setCount(currCount => currCount + 1)
    setCount(currCount => currCount + 3)
}
```