import React from 'react'

const Card = ({imageSrc , title , desc}) => {
  return (
    <div>
        <img src={imageSrc} alt="" />
        <p>{title}</p>
        <span>{desc}</span>
    </div>
  )
}

export default Card