import React from 'react'

export const Button = ({elementType, handlerFunction, buttonText, elementClassName}) => {
  return (
    <div>
        <button type = {elementType} onClick={handlerFunction}
        className = {elementClassName}>{buttonText}</button>
    </div>
  )
}