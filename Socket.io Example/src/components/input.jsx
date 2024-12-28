import React from 'react'

export const Input = (
    {
     elementType,
     placeholder, 
     elementName, 
     elementId, 
     elementClassName,
     handleInput
    }) => {

  return (
    <div>
        <input type = {elementType} name = {elementName} id = {elementId} 
            className = {elementClassName} placeholder = { placeholder } 
            onChange = {handleInput}/>
    </div>
  )
}
