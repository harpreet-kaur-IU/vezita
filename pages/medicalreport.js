import React, { Fragment } from 'react'
import Base from '../layout/base'
import CreateMedicalReport from '../modules/CreateMedicalReport'

export default function home(){
  return (
    <Fragment>
      <Base>
        <CreateMedicalReport></CreateMedicalReport>
      </Base>
    </Fragment>
  )
}
