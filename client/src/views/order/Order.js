import React, { useState, useEffect } from 'react'

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
  CTableBody,
  CTableDataCell,
  CAvatar,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CFormLabel,
  CFormSelect,
  CModalFooter,
  CFormInput,
  CBadge,
} from '@coreui/react'
import { getReportPaid } from '../../axios/axiosReport'
import CIcon from '@coreui/icons-react'
import { cilCalendar, cilCalendarCheck, cilNotes, cilPeople, cilTrash } from '@coreui/icons'

const Order = () => {
  // ! bagian tampil ORDER
  // tampilkan oRDER
  const [reportOrder, setReportOrder] = useState([])
  useEffect(() => {
    getReportPaid((res) => setReportOrder(res))
  }, [])

  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Order In</strong>
        </CCardHeader>

        {/* report Table */}
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell className="text-center">
                <CIcon icon={cilPeople} />
              </CTableHeaderCell>

              <CTableHeaderCell>Order ID</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Product Order</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Total</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {reportOrder.map((rpt, index) => (
              <CTableRow v-for="item in tableItems" key={rpt.id}>
                {/* USER */}
                <CTableDataCell className="text-center">
                  <CAvatar size="xl" src={'http://localhost:3000/' + rpt.user_images} />
                  <div>
                    <strong>{rpt.name_user}</strong>
                    <div className="small text-medium-emphasis">
                      <span>{rpt.user_email}</span>
                    </div>
                  </div>
                </CTableDataCell>

                {/* OrderID */}
                <CTableDataCell>
                  <strong className="text-primary">{rpt.payment_code}</strong>
                </CTableDataCell>
                {/* Product */}
                <CTableDataCell>
                  <CTable align="middle" className="mb-5 border" hover responsive>
                    <CTableHead color="light">
                      <CTableRow>
                        <CTableHeaderCell>Package Trip</CTableHeaderCell>

                        <CTableHeaderCell>Amount</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {rpt.cart_items.map((ci, index) => (
                        <CTableRow v-for="item in tableItems" key={ci.id}>
                          {/* Package Trip */}
                          <CTableDataCell>
                            <div>
                              <strong>{ci.name}</strong>

                              <div>
                                <strong className="text-success">
                                  {' '}
                                  <CIcon icon={cilCalendarCheck} /> {ci.date}
                                </strong>
                              </div>
                            </div>
                          </CTableDataCell>
                          {/* amount */}
                          <CTableDataCell>
                            {new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            }).format(ci.price)}
                            <div>
                              <strong className="text-warning">
                                {' '}
                                <CIcon icon={cilPeople} /> {ci.amount}
                              </strong>
                            </div>
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </CTableDataCell>
                {/* Total */}
                <CTableDataCell className="text-center">
                  <strong>
                    {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(
                      rpt.total,
                    )}
                  </strong>
                  <div>
                    {rpt.bank === 'bni' ? (
                      <CAvatar
                        src="http://localhost:3000/images/BNI.png"
                        size="lg"
                        shape="rounded-0"
                      ></CAvatar>
                    ) : rpt.bank === 'bca' ? (
                      <CAvatar
                        src="http://localhost:3000/images/BCA.jpg"
                        size="lg"
                        shape="rounded-0"
                      ></CAvatar>
                    ) : (
                      <CAvatar
                        src="http://localhost:3000/images/BRI.png"
                        size="lg"
                        shape="rounded-0"
                      ></CAvatar>
                    )}
                  </div>
                </CTableDataCell>
                {/* Status */}
                <CTableDataCell className="text-center">
                  <CBadge color="success">{rpt.status === 'paid' ? 'PAID' : '-'}</CBadge>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCard>
    </CRow>
  )
}

export default Order
