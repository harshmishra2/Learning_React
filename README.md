# Learning_React
This repository was created to track, monitor, and share what I learn in the niche frontend technology - React.
Will be updating the documentation now meticlously!


While learning react let's take some notes now shall we- 

1. Resource: https://www.youtube.com/watch?v=SqcY0GlETPk&t=506s
   
   Nowadays (new modularity trends) mostly function based react components are incorporated in projects. Try to follow this.
   While making components in react you'll think that how come we are writing html code in between my js? It is actually JSX and the code later gets converted into js code.
   Use Babeljs.io/repl to understand how does this thing take place.
   Component tree in react with a top level component (root) and a child. When the app starts react uses this tree to build a virtual DOM, which is lightweight tree made of our component and its properties as nodes, different from our actual DOM. When data changes in the component react updates the virtual DOM for that specific node. The library react-dom (look in dependencies) then compares virtual and actual DOM and updates the nodes that have recorded any difference.
   React is a library, a tool to accomplish UI tasks. Where as frameworks govern the tools you may use and guidelines for you to follow to acomplish your desired tasks.
   In between JSX script you cannot use some js or ts eg(items.map(item => <li>{item}</li>)
   Key property should be there to uniquely identify items so when later when you dynamically you move items around, react should know which component to change.
   Let is a variable, while const being a constant.
