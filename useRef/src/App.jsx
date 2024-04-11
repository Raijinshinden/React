// useState() = Re-renders the component when the state value changes.

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1. Accessing/Interacting with DOM elements
//              2. Handling Focus, Animations, and Transitions
//              3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from 'react';
import MyComponent from './MyComponent';

function App() {

  return(<MyComponent />)
}

export default App
