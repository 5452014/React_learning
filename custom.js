function reactRender(reactElem,container){
    const domElem=document.createElement(reactElem.type)

    // set Attritbutes
    for(let prop in reactElem.props){
        domElem.setAttribute(prop,reactElem.props[prop])
    }
    
    //set children
    const children=reactElem.props.children;

    if(typeof children==='string' || typeof children === 'number'){
        domElem.innerHTML=children;
    }else if(Array.isArray(children)){
  children.forEach(child=>{
    const childElem=reactRender(child,container)
    
  })  
    }else if(typeof children === 'object' && children !==null){
        reactRender(children,domELem)
    }
    container.appendChild(domElem)
}

const reactElem={
    type: 'div',
  props: { id: 'parent', style: 'padding:10px; border:1px solid black;' },
  children: [
    {
      type: 'h1',
      props: {},
      children: 'Hello React'
    },
    {
      type: 'a',
      props: { href: 'https://www.youtube.com/', target: '_blank' },
      children: 'Go to YouTube'
    }
  ]
}
const mainContainer =document.querySelector('#root')
reactRender(reactElem,mainContainer)