import React, { useEffect, useRef, useState ,useMemo , useCallback} from "react";
import Navbar from "./navbar";

// const nums = new Array(30_00_0000).fill(0).map((_ , i)=>{
//     return {
//         index:i,
//         isMagical:i === 29_00_0000
//     }
// })

const Hooks = () => {
  const [count, setCount] = useState(0);
//   const [number , setNumber] = useState(nums);
 const [adjective , setAdjective] = useState("Good")

//    const magical = useMemo(()=>number.find(item=>item.isMagical) , [])
  

//   const a = useRef(10)
//     const btnRef = useRef(null);

//   useEffect(()=>{
//       a.current++
//     console.log(a.current);
//     console.log("Rerendering")
//   })

//   const onChangeColor = ()=>{
//     btnRef.current.style.backgroundColor = "green"
//   }

const getAdjective = useCallback(()=>{
    return "Another"
},[])

  return(
    <div>
        <Navbar adjective={adjective} getAdjective={getAdjective}/>
        {/* <h1>My fav number is {magical.index}</h1> */}
        <button onClick={()=>setCount(count+1)}>+</button>
        {count}
        <button onClick={()=>setCount(count-1)}>-</button>

        {/* <button ref={btnRef} onClick={onChangeColor}>Change Color</button> */}
    </div>
  )
};

export default Hooks;
