import React, { Fragment } from 'react'
import Base from '../layout/base';
import DropDownWhite from '../modules/DropDownWhite';
export default function reports() {
  return (
    <Fragment>
        <Base>
            <div className='p-5'>
                <div className='d-flex d-flex-wrap box-border mt-7 d-justify-space-between'>
                    <div className={`col-6 pr-2 mb-5 box-border`}>
                        <div className='bg-grey-7 min-400 p-5 rounded-12'>
                            <div className='d-flex d-flex-wrap mb-5 d-align-center d-justify-space-between'>
                                <h3 className='f-500 l-28 text-black col-9'>Top Diagnosis</h3>
                                <div className='d-flex d-align-center gap-2 col-3'>
                                    <h5 className='f-500 l-22 text-grey-2 mr-1 d-flex'>Sortby: </h5>
                                    <DropDownWhite placeholder="Daily"></DropDownWhite>
                                </div>
                            </div>
                            <img src="diagno.png" height="250"/>
                        </div>
                    </div>
                    <div className={`col-6 pl-2  box-border `}>
                    <div className='bg-grey-7 min-400 mb-5 p-5 rounded-12'>
                            <div className='d-flex d-flex-wrap  mb-5 d-align-center d-justify-space-between'>
                                <h3 className='f-500 l-28 text-black col-9'>No of patients</h3>
                                <div className='d-flex d-align-center gap-2 col-3'>
                                    <h5 className='f-500 l-22 text-grey-2 mr-1 d-flex'>Sortby: </h5>
                                    <DropDownWhite placeholder="Daily"></DropDownWhite>
                                </div>
                            </div>
                            <img src="stat.png" height="250"/>
                        </div>
                    </div>
                    <div className={`col-6 pr-2  box-border`}>
                        <div className='bg-grey-7 min-400 mb-5 p-5 rounded-12'>
                            <div className='d-flex d-flex-wrap mb-5 d-align-center d-justify-space-between'>
                                <h3 className='f-500 l-28 text-black col-9'>Age of patients</h3>
                                <div className='d-flex d-align-center gap-2 col-3'>
                                    <h5 className='f-500 l-22 text-grey-2 mr-1 d-flex'>Sortby: </h5>
                                    <DropDownWhite placeholder="Daily"></DropDownWhite>
                                </div>
                            </div>
                            <img src="stat.png" height="250"/>
                        </div>
                    </div>
                    <div className={`col-6 pl-2  box-border `}>
                        <div className='bg-grey-7 min-400 mb-5 p-5 rounded-12'>
                            <div className='d-flex d-flex-wrap mb-5 d-align-center d-justify-space-between'>
                                <h3 className='f-500 l-28 text-black col-9'>No of Appointments</h3>
                                <div className='d-flex d-align-center gap-2 col-3'>
                                    <h5 className='f-500 l-22 text-grey-2 mr-1 d-flex'>Sortby: </h5>
                                    <DropDownWhite placeholder="Daily"></DropDownWhite>
                                </div>
                            </div>
                            <img src="patient.png" height="250"/>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    </Fragment>
  )
}
