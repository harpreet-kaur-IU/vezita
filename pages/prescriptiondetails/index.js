import React, { Fragment } from 'react'
import Base from '../../layout/base'
import Prescription from '../../modules/Prescription'

export default function home (){
  return (
    <Fragment>
        <Base>
          <Prescription></Prescription>
        </Base>
    </Fragment>
  )
}