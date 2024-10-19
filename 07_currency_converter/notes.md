# User-defined Hooks
Didn't realise much of the use case though, but user-defined hooks are just functions which return one or more variables. There is a convention to insert "use" in front of any user-defined hook just like the built-in hooks

# API used
We have so many currencies available and it is not possible to write each and every currency and hard-code the multiplying factor for converting one currency to another. In such cases, we use APIs that contain a large amount of data. 
- APIs can be brought inside our code using fetch().
- Fetch returns a promise which gives a result when resolved and we can employ that result into our code.
- In the given project, we are using API for two purposes - for inserting currency options in the input bar and for getting the multiplying factor for converting one currency to another.
- We will wrap the fetching process of API into the useEffect hook , setting the dependency as fromCurrency so that the api is fetched only when we change fromCurrency

# Component
- If we do not wish to use a function prop in a component if it is not passed in the component instance, we can use the logical operator &&, which will execute the function only when it is defined.

```jsx
onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
```

- We will specify a key with every option in our select bar so that react can uniquely identify each option. Keys are set as the currency names only. While fetching from the database, we must use ids as the keys

- We have also specified a unique id for the input box label(as the label's content may be changed for the different props passed) using the useId hook. useId hook generates a unique id which we can be used by the react for diffing purposes. Further we have bound the unique id with the input box as well.

- We have created an index.js file in the component folder and all the component files created inside the component folder would be imported and exported in index.js file, so that if any other folder requires the components, the component files may not be imported individually. In order to import any component from component folder, we would just specify the folder name like it is done in below statement and index.js would automatically be accessed

```jsx
import {InputBox} from './components'
```

