import React, { Fragment } from 'react'
import Base from '../layout/base'
import HelpAndSupport from '../modules/HelpAndSupport'

export default function home(){
  return (
    <Fragment>
        <Base>
            <HelpAndSupport></HelpAndSupport>
        </Base>
    </Fragment>
  )
}
