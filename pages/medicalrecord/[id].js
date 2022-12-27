import React, { Fragment } from 'react'
import Base from '../../layout/base'
import CreateRecord from '../../modules/CreateRecord'

export default function MedicalRecord(props){
  return (
    <Fragment>
        <Base>
          <CreateRecord data={props.data}></CreateRecord>
        </Base>
    </Fragment>
  )
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}patient/get/${context.params.id}`, { 
    method: 'get', 
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
    

  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}