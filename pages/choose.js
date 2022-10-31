import React, { Fragment } from 'react'
import Base from '../layout/base'
import BookingDetailsChoose from '../modules/BookingDetailsChoose'

export default function dashboard (){
  return (
    <Fragment>
        <Base>
            <BookingDetailsChoose></BookingDetailsChoose>
        </Base>
    </Fragment>
  )
}
