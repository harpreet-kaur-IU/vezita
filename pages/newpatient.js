import React, { Fragment } from 'react'
import Base from '../layout/base'
import AllPatients from '../modules/AllPatients'

export default function NewPatient(){
  return (
    <Fragment>
        <Base>
            <AllPatients></AllPatients>
        </Base>
    </Fragment>
  )
}