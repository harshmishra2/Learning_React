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

   Can't return something that is not JSX? There's an exception '{}' braces, use braces to avoid facing errors.

   {items.length === 0 && <p>No items found</p> => what happens here? True && 'anything' will output anything, False && 'anything' will output false, so using this snippet will behave like using a ternary operator and outputting everything if the previous expression turns out to be true. If false entire expression's result will be false and nothing will be rendered onto the screen.

   In react each element has a property "onClick" onClick = {() => console.log('button clicked')}

   Arrow function can optionally have a parameter that represent the browser event (call it e, or whatever)

   Type annotation in typeScript lets say you're declaring an event handler function for event-
   const handleClick = (event: MouseEvent) => console.log(event); //here the MouseEvent specifies the type of parameter 'event'. But for the case of javaScript you don't need to add type there,
   simply: const handleClick = (event) => console.log(event);

   Calling a function is 'function()' and referencing a function is 'function'

   Hook-> (useState-statehook which will have data or state that will change overtime) Hook is a function that allows us to tap into built in features in react.

   const [selectedIndex, setSelectedIndex] = useState(-1);
   here selectedIndex is the variable that holds the current state
   setSelectedIndex is a function
   where (-1) is the intially passed vale for the state, in this example of an array (-1) index in js is going to signify no selection.

   useState(''): returns an array of two elements eg. [name(variable), setName()]

   Lets say we got a list component which lists out names of different cities but now we'd like to have this list display out names of flowers.
   We'll use "Props" to accomplish this.

2. https://react.dev/learn

   Refer to the above react documentation to quick get up to speed with the basics of react and covers topics like-

   Creating and nesting components
   Writing markup with JSX 
   Adding styles
   Displaying data
   Conditional rendering
   Rendering lists
   Responding to events
   Updating the screen
   Using Hooks
   Sharing data between components (basically props)

   
