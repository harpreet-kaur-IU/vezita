import React, { Fragment } from 'react'
import Base from '../../layout/base'
import PatientDetails from '../../modules/PatientDetails'
const index = () => {
  return (
    <Fragment>
      <Base>
        <PatientDetails></PatientDetails>
      </Base>
    </Fragment>
  )
}

export default index