# React Router
- Third party utility and not a core feature of react
- Link, which is a part of react router is used instaad of anchor tag as anchor tag refreshes the whole page, which is not intended when we are using react
- The link tag only renders that part of the webpage which has changed and not the whole webpage

- NavLink is similar to Link, but here we can write a callback function in classname attribute, which is passed with an isActive variable, which tells us if the url given in the attribute "to" is currently active or not. This variable can be used to change the font color of the text written under NavLink tag if it is currently active.

- Based on the url provided we can navigate to different outlets(home, about, contact, etc.) keeping the header and footer as it is. This can be done through RouterProvider, which takes a router attribute.

- The value of router attribute is a value returned by the function createBrowserRouter() which is passed with an array of objects, where each object contains the path and element properties, where path is the url where the given element is to be replaced with the outlet.

- The outlets are given through the children property of the array object and the value of children contains yet another array of objects, which again contains the path and element. This nesting can be used to specify the element to be rendered at various urls.

- There is one more way of creating router object using createRoutesFromElements() function where, there is no need to pass an array of objects and path and element properties are given as props of the Route tag.

- We can also accept values from the url using "/:". These values are called params and can be used in our component using useParams hook.

- When we want to fetch data from an API when going to a specific url, we can fetch it after the component linked to that url is called, which means that the fetching process will start only after the link attached to that component is clicked.

- We can optimize this process by using the loader functionality of react router by which we can start the fetching process, the moment the mouse cursor comes over the link, routed to the url. This way the data would be fetched before the rendering and potential lag would be avoided.