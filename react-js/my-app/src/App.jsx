import {useState} from 'react'


const App = () => {
const [count , setCount] = useState(0);
const [color , setColor] = useState("red");

  return (
    <div>

<h1>My fav color is {color}</h1>
<button onClick={()=>setColor("green")}>
  Change Color
</button>

      <button onClick={()=>setCount(count+1)}>
        +
      </button>
      {count}
      <button onClick={()=>setCount(count-1)}>
        -
      </button>
    </div>
  )
}

export default App