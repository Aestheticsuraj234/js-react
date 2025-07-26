import React , {memo} from 'react'

const Navbar = ({adjective , getAdjective}) => {
    console.log("Navbar is rendering")
  return (
    <div>
        {adjective}
        {getAdjective()}
    </div>
  )
}

export default memo(Navbar)