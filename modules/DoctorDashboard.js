import React from 'react'
import Header from './Header'
import BookingTable from './BookingTable'
const DoctorDashboard = () => {
  return (
    <div>
      <Header title="Bookings"></Header>
      <div className="header-wrapper">
        <BookingTable></BookingTable>
      </div>
    </div>
  )
}

export default DoctorDashboard