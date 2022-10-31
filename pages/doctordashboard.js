import React, { Fragment } from 'react'
import Base from '../layout/base'
import DoctorDashboard from '../modules/DoctorDashboard'

export default function dashboard (){
  return (
    <Fragment>
        <Base>
            <DoctorDashboard></DoctorDashboard>
        </Base>
    </Fragment>
  )
}
