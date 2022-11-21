import React, { Fragment } from 'react'
import Base from '../layout/base'

import DoctorsChat from '../modules/DoctorsChat'

const Message = () => {
  return (
    <Fragment>
        <Base>
            <DoctorsChat></DoctorsChat>
        </Base>
    </Fragment>
  )
}

export default Message