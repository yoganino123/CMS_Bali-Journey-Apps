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

const Profile = () => {
  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Profile</strong>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" size="lg">
            Add Profile
          </CButton>
        </CCardBody>
        {/* Profile Table */}
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

export default Profile
