import React from 'react'
import dayjs from 'dayjs';
export default function SmallDay(props) {
  return (
    <div className='d-flex d-flex-wrap bg-light-grey pl-3 pr-3 pt-1 pb-1 mt-2'>
      <span className="col-12 font-12 l-12 text-secondary f-700">{dayjs(props.day).format("ddd")}</span>
      <span className="col-12 font-22 l-32 f-500 text-secondary mt-1">{dayjs(props.day).format("DD")}</span>
    </div> 
  )
}
