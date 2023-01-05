import React, { Fragment } from 'react'
import Base from '../../layout/base'
import Prescription from '../../modules/Prescription'

export default function Home(props){
  return (
    <Fragment>
      <Base>
        <Prescription data={props.data}></Prescription>
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