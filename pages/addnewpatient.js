import React, { Fragment } from 'react'
import Base from '../layout/base'
import AddNewPatient from '../modules/AddNewPatient'

export default function Home(){
  return (
    <Fragment>
        <Base>
          <AddNewPatient></AddNewPatient>
        </Base>
    </Fragment>
  )
}
