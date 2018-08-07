import React from 'react'

const userOutput = (props) => {
  const style = {
    border: '1px solid red',
    backgroundColor: 'black',
    color: 'white'
  }

  return (
    <div style={style}>
      <p>This is a paragraph {props.username}.</p>
      <p>And so is this.</p>
    </div>
  )
}

export default userOutput
