import React , {useContext, useState} from 'react'
import { globalContext } from './context/GlobalContext'

const H1 = () => {
  const {greet , setGreet} = useContext(globalContext);
  return (
    <div>
      {greet}
    </div>
  )
}

export default H1