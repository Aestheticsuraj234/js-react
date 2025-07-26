import React from 'react'
import Form from './Form'
import NameList from './NameList'
import Welcome from './Welcome'

const App = () => {

// const onClickAlert = ()=>{
//   alert("Button Clicked")
// }

// const greet = (username)=>{
//   alert(`Hello! , ${username}`)
// }

// const handleSubmit = (e)=>{
//   e.preventDefault();
//   alert('Form Submitted')
// }

  return (

    <div>
      <Welcome isLogged={false}/>
      {/* <NameList/> */}
      {/* <Form/> */}
    </div>

    // <form onSubmit={handleSubmit}>
    //   {/* <button onClick={onClickAlert}>Click Me</button>
    //   <button onClick={()=>greet("Suraj")}>Say Hello</button> */}
    //   <button type='submit'>
    //     Submit
    //   </button>
    // </form>
  )
}

export default App

// onClick
// onSubmit
// onChange
// onFocus , onBlur
// onKeyDown , onKeyUp

// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("red");

//   return (
//     <div>
//       <h1>My fav color is {color}</h1>
//       <button onClick={() => setColor("green")}>Change Color</button>

//       <button onClick={() => setCount(count + 1)}>+</button>
//       {count}
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// };

// export default App;
