import React, { Fragment } from 'react'
import Base from '../layout/base'
import Finances from '../modules/Finances'

export default function home(){
  return (
    <Fragment>
        <Base>
            <Finances></Finances>
        </Base>
    </Fragment>
  )
}
