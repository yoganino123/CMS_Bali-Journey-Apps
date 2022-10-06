import React, { useState, useEffect } from 'react'

import {
  CRow,
  CCol,
  CWidgetStatsF,
  CLink,
  CWidgetStatsA,
  CCard,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CAvatar,
  CBadge,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilCursor,
  cilDollar,
  cilFlightTakeoff,
  cilGroup,
  cilPeople,
  cilPuzzle,
  cilCalendarCheck,
  cilCart,
} from '@coreui/icons'
import { getUser } from '../../axios/axiosUser'
import { getDestination } from '../../axios/axiosDestination'
import { getPackageTrip } from '../../axios/axiosPackageTrip'
import { getCategories } from '../../axios/axiosCategory'
import { getReportPaid, getReportAll } from '../../axios/axiosReport'

const WidgetsDropdown = () => {
  // ! bagian tampil category
  // tampilkan category
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories((res) => setCategories(res))
  }, [])
  // ! bagian tampil USER
  // tampilkan USER
  const [user, setUser] = useState([])
  useEffect(() => {
    getUser((res) => setUser(res))
  }, [])

  // ! bagian tampil destination
  // tampilkan destination
  const [destination, setDestination] = useState([])
  useEffect(() => {
    getDestination((res) => setDestination(res))
  }, [])

  // GET ALL PACKAGE TRIP
  const [packageTrip, setPackageTrip] = useState([])
  useEffect(() => {
    getPackageTrip((res) => setPackageTrip(res))
  }, [])

  // ! bagian tampil ORDER
  // tampilkan oRDER
  const [reportOrder, setReportOrder] = useState([])
  useEffect(() => {
    getReportPaid((res) => setReportOrder(res))
  }, [])

  // ! bagian tampil transactipn
  // tampilkan transaction
  const [reportTransaction, setReportTransaction] = useState([])
  useEffect(() => {
    getReportAll((res) => setReportTransaction(res))
  }, [])

  // Total Pemasukan
  const [orderIn, setOrderIn] = useState([])
  useEffect(() => {
    getReportPaid((res, i) => {
      let a = []

      for (let i in res) {
        a.push(+res[i].total)
      }
      let total = 0

      for (i = 0; i < a.length; i++) {
        total += a[i]
      }
      setOrderIn(total)
    })
  })
  // console.log(orderIn)

  return (
    <CRow>
      {/* Category */}
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="secondary"
            footer={
              <CLink
                className="font-weight-bold font-xs text-medium-emphasis"
                href="http://localhost:3001/admin/category"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilPuzzle} height={24} />}
            title="Category"
            value={categories.length}
          />
        </CCol>
        {/* Destination */}
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="primary"
            footer={
              <CLink
                className="font-weight-bold font-xs text-medium-emphasis"
                href="http://localhost:3001/admin/destination"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilCursor} height={24} />}
            title="Destination"
            value={destination.length}
          />
        </CCol>
        {/* Package Trip */}
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="info"
            footer={
              <CLink
                className="font-weight-bold font-xs text-medium-emphasis"
                href="http://localhost:3001/admin/package-trip"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilFlightTakeoff} height={24} />}
            title="Package Trip"
            value={packageTrip.length}
          />
        </CCol>
        {/* USER */}
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="warning"
            footer={
              <CLink
                className="font-weight-bold font-xs text-medium-emphasis"
                href="http://localhost:3001/admin/user"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilGroup} height={24} />}
            title="User"
            value={user.length}
          />
        </CCol>
      </CRow>
      {/* Transaction */}
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            color="danger"
            footer={
              <CLink
                className="font-weight-bold font-xs text-medium-emphasis"
                href="http://localhost:3001/admin/transaction"
                rel="noopener norefferer"
                target="_blank"
              >
                View more
                <CIcon icon={cilArrowRight} className="float-end" width={16} />
              </CLink>
            }
            icon={<CIcon icon={cilCart} height={24} />}
            title="Transaction"
            value={reportTransaction.length}
          />
        </CCol>
      </CRow>
      {/* ORDER */}
      <CRow>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Order In</strong>
          </CCardHeader>
          <br></br>
          {/* Order In*/}
          <CRow className="mb-4">
            <CCol sm={6} lg={3}>
              <CWidgetStatsF
                className="mb-3"
                color="success"
                icon={<CIcon icon={cilDollar} height={24} />}
                title={`Total Order In = ${reportOrder.length}`}
                value={new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                }).format(orderIn)}
              />
            </CCol>
          </CRow>
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

            {/* isi table */}

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
                            {/* Amount */}
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
                    <div>
                      <strong>
                        {new Intl.NumberFormat('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        }).format(rpt.total)}
                      </strong>
                    </div>
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
                  </CTableDataCell>
                  {/* Status */}
                  <CTableDataCell className="text-center">
                    <CBadge color="success">{rpt.status === 'paid' ? 'PAID' : ' '}</CBadge>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCard>
      </CRow>
    </CRow>
  )
}

export default WidgetsDropdown
