import React, { Fragment } from 'react'
import Base from '../layout/base'
import Banners from '../modules/Banners'

export default function Dashboard (){
  return (
    <Fragment>
        <Base>
            <Banners></Banners>
        </Base>
    </Fragment>
  )
}
