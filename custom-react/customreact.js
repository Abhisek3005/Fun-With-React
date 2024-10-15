function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.target)
     
    container.appendChild(domElement)
    */
    const domElemet = document.createElement(reactElement.type)
    domElemet.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; 
        domElemet.setAttribute(prop,reactElement.props[prop]) 
            
    }
    container.appendChild(domElemet)
    }



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer)

 