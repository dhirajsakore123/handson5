import React from 'react'
import HocCompo from './HocCompo'
import logo1 from './Screenshot 2023-08-03 143334.png'

const ClickCounter = (props) => {
  return (
    <div className='hoc-container'>
    <h1> High-Order Components</h1>
    <p>
    • HOC is a function which takes a Wrapped component as input argument and returns a
      new Enhanced component<br/>
• It should always be a pure function.<br/>
• It should never modify the Wrapped Component.<br/>

    </p>
    <div>
      ClickCounter:{props.counter}
      <button onClick={props.handelClick}>Click</button>
    </div>
    <img src={logo1} alt='not found' className='hoc-img'/>
    </div>
  )
}

export default HocCompo(ClickCounter)
