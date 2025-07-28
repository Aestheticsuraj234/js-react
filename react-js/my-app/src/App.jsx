import React, { useState } from 'react'
import Form from './Form'
import NameList from './NameList'
import Welcome from './Welcome'
import Hooks from './Hooks'
import Com from './Com'
import H1 from './H1'

const App = () => {

  const [greet , setGreet] = useState("Hello World")
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
      <H1/>
      <Hooks/>
      <Com greet={greet}/>
      {/* <Welcome isLogged={false}/> */}
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
