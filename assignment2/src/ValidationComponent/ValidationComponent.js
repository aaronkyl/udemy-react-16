import React from 'react'

const validationComponent = (props) => {
  const message = props.inputStringLength >= 5 ? 'Text long enough' : 'Text too short'
  return <p>{message}</p>
}

export default validationComponent
