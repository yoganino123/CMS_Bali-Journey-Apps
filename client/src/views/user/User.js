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

const User = () => {
  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>User</strong>
        </CCardHeader>
        <CCardBody>
          <CButton color="primary" size="lg">
            Add User
          </CButton>
        </CCardBody>
        {/* User Table */}
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

export default User
