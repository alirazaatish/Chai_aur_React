
const root = document.getElementById("root");

const reactElement={
    type: 'a',
    props: {
        href: "https://www.google.com/",
        target: "_blank"
    },
    content: "Visit Google.Com"
}

function customRender(reactElement, rootContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.content
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target);
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    rootContainer.appendChild(domElement);
}


customRender(reactElement, root);