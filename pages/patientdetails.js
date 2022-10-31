import React, { Fragment } from 'react'
import Base from '../layout/base'
import PatientDetails from '../modules/PatientDetails'

export default function dashboard (){
  return (
    <Fragment>
        <Base>
            <PatientDetails></PatientDetails>
        </Base>
    </Fragment>
  )
}