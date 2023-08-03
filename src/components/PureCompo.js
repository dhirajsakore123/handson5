import React from 'react'
import logo2 from './Screenshot 2023-08-03 145709.png'
const PureCompo = () => {
  return (
    <>
    <div className='hoc-container'>
    <h1> Pure Components</h1>
    <p>
    • Return value is only determined by it’s input values<br/>
• It’s return value is always the same for the same input values<br/>
• Class components that extend the React.PureComponent class are treated as pure
component<br/>

    </p>
    <img src={logo2} alt='not found' className='hoc-img'/>
    </div>
   
    </>
  )
}

export default PureCompo
