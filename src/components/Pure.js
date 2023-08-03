import React, { useState } from 'react'

const Pure = () => {
    const[name]=useState('Dhiraj')
  return (
    <div>
      <b>Name</b><span>{name}</span>
    </div>
  )
}

export default Pure
