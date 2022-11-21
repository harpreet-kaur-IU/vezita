import React, { Fragment } from 'react'
import Base from '../layout/base'

import DoctorsChat from '../modules/DoctorsChat'

const message = () => {
  return (
    <Fragment>
        <Base>
            <DoctorsChat></DoctorsChat>
        </Base>
    </Fragment>
  )
}

export default message