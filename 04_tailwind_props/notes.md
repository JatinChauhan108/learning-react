# Props

While reusing a component, we might want to specify different properties to different instances of that component.
We can do that by adding attributes (called props) while using that component.
These attributes can be given different values for different instances and those values will be rendered according to the jsx written in the component.
The component receives the values of these attributes in the form of an object

```jsx
function App(){
    return(
        <>
            <Card name = "Predator" btn = "Read" />
            <Card name = "Legion" btn = "Show" />
        </>

    )
}
```

```jsx
function Card(props){
    console.log(props.name)                                     // Predator when first instance created
    console.log(props.btn)                                      // Read when first instance created
}
```
#

We can use destructuring to avoid mentioning the object name again and again

```jsx
function Card({name, btn}){
    console.log(name)
    console.log(btn)
}
```
#

We can also give default values for props to not render an undefined value, if value for that prop is not given while using the component

```jsx
function App(){
    return(                                                 // value for btn omitted in second card
        <>
            <Card name = "Predator" btn = "Read" />
            <Card name = "Legion" />
        </>

    )
}
```

```jsx
function Card({name, btn = "Show"}){                        // default value for btn
    console.log(name)
    console.log(btn)
}
```

One more way to apply a default value is by using logical operators, but this is not recommended due to less readability and repeatablility 
```jsx
function Card({name, btn}){
    console.log(name)
    console.log(btn || "show")                          // or operator used
}
```
#
## Some points to be kept in mind while writing HTML in jsx

- Every tag written in jsx should have a closing tag. For some tags like img, which do not come with both closing and opening tag, we have to close them explicitly.

```html
<img src = "./picture.jpg" />
```

- JSX have "class" as a keyword reserved for other purposes, so wherever we are referring to an html or css class in jsx, we have to use "className" and not "class"

```html
<img src = "./picture.jpg" className = "h-[200px] w-full rounded-md object-cover" />        <!--for tailwind classes as well we will use className -->
```

