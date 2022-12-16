import React, { useEffect, useState } from 'react'

const DaysCheckBox = (props) => {
    const [active,setActive] = useState(false)
    const handleClick  = (e) =>{
        setActive(prev => !prev);
        const val = !active;
        props.handler(e.currentTarget.id,val)
    }
  return (
    <div className={`d-flex d-align-center`}>
        <input type="checkbox" name="Days" id={props.value} value={props.active} onClick={handleClick}/>
        <h5 className='f-500 text-secondary ml-2 mb-0' htmlFor="Mon">{props.value}</h5>
    </div>
  )
}

export default DaysCheckBox