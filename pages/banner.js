import React, { Fragment } from 'react'
import Base from '../layout/base'
import Banners from '../modules/Banners'

export default function dashboard (){
  return (
    <Fragment>
        <Base>
            <Banners></Banners>
        </Base>
    </Fragment>
  )
}
