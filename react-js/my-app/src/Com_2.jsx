import React , {useContext} from 'react'
import { globalContext } from './context/GlobalContext'

const Com_2 = () => {
    const {username , setUsername} = useContext(globalContext)
  return (
    <div>{username}</div>
  )
}

export default Com_2