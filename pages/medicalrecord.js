import React, { Fragment } from 'react'
import Base from '../layout/base'
import CreateRecord from '../modules/CreateRecord'

export default function home(){
  return (
    <Fragment>
        <Base>
            <CreateRecord></CreateRecord>
        </Base>
    </Fragment>
  )
}
