function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)            // one way to create a custom render function
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)                // not efficient to set all the individual attributes like this
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)            // another way to create a custom render function(more modular)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {                                // only this is changed 
        if (prop === 'children') continue;                                  // sometimes children are also written under props
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
