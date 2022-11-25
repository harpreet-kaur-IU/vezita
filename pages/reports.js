import React, { Fragment, useState } from 'react'
import Base from '../layout/base';
import DropDownWhite from '../modules/DropDownWhite';
import dynamic from 'next/dynamic';
import Header from '../modules/Header';
export default function Reports() {
    const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false});
    const[chart,setChart] = useState({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    })

    const[pie,setPie] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    });
  return (
    <Fragment>
        <Base>
            <Header title="Reports"></Header>
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
                            <Chart options={pie.options} series={pie.series} type="donut" height={330} />
                            
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
                            <Chart options={chart.options} series={chart.series} type="line" />
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
                            <Chart options={chart.options} series={chart.series} type="line" />
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
                            <Chart options={chart.options} series={chart.series} type="bar"  />
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    </Fragment>
  )
}
