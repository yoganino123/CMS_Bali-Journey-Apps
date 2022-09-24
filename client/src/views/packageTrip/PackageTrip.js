import React from 'react'
import {
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
} from '@coreui/react'

const PackageTrip = () => {
  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Package Trip</strong>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" size="lg">
            Add Package Trip
          </CButton>
        </CCardBody>
        {/* PackageTrip Table */}
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>Id</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Name</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
        </CTable>
      </CCard>
    </CRow>
  )
}

export default PackageTrip