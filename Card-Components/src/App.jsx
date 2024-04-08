// 3 ways to style React Components

// 1. External = Great for global styles or small projects.
// 2. Modules = Which is prefered for individual 
//              components that have their own unique styles.
// 3. Inline = Which tends to be good for small components 
//             with minimal styling.

import Button from "./Button.jsx";

function App() {
  return(
    <>
      <Button></Button>
    </>
  );
  
}

export default App
