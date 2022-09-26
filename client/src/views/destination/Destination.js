import React, { useState, useEffect } from 'react'

import {
  getDestination,
  getDestinationById,
  addDestination,
  delDestination,
  updDestination,
} from '../../axios/axiosDestination'
import { getCategories } from '../../axios/axiosCategory'

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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormInput,
  CForm,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CAlert,
} from '@coreui/react'
import { cilTrash, cilBurn } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Category = () => {
  // ! bagian tampil destination
  // tampilkan destination
  const [destination, setDestination] = useState([])
  useEffect(() => {
    getDestination((res) => setDestination(res))
  }, [])
  // console.log(destination)

  //tambah destination
  const [formAdd, setFormAdd] = useState({
    name: '',
    categoryId: 0,
    description: '',
    address: '',
    open_day: '',
    open_time: '',
    map_link: '',
  })

  const [msg, setMsg] = useState(false)

  const submitAdd = () => {
    if (img) {
      const formData = new FormData()
      formData.append('img', img)
      formData.append('name', formAdd.name)
      formData.append('categoryId', formAdd.categoryId)
      formData.append('description', formAdd.description)
      formData.append('address', formAdd.address)
      formData.append('open_day', formAdd.open_day)
      formData.append('open_time', formAdd.open_time)
      formData.append('map_link', formAdd.map_link)
      console.log(formData)
      addDestination(formData)
    } else {
      setMsg(true)
    }
  }

  // ! bagian edit destination
  // edit destination
  const [catId, setCatId] = useState()
  const [formEdit, setFormEdit] = useState({})

  const btnEdit = (id) => {
    getDestinationById(id, (res) => {
      setCatId(id)
      setFormEdit({
        name: res.name,
        categoryId: res.categoryId,
        description: res.description,
        address: res.address,
        open_day: res.open_day,
        open_time: res.open_time,
        map_link: res.map_link,
        img: res.img,
      })
    })
  }

  const submitEdit = () => {
    // console.log(formEdit)
    updDestination(catId, formEdit)
  }
  // console.log(catId)

  let tempImgEdit = []
  const [img, setImg] = useState()
  const [preview, setPreview] = useState('')

  const loadImage = (e) => {
    setImg(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  }

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  // ! bagian tampil category
  // tampilkan category
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories((res) => setCategories(res))
  }, [])
  // console.log(categories)

  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Destination</strong>
        </CCardHeader>

        {/* Button Add Category */}
        <CCardBody>
          <CButton onClick={() => (setVisible(!visible), setMsg(false))}>
            Add New Destination
          </CButton>
          <CModal size="xl" visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader onClose={() => setVisible(false)}>
              <CModalTitle>Add New Destination</CModalTitle>
            </CModalHeader>
            <CModalBody>
              {msg ? (
                <CAlert color="danger" className="d-flex align-items-center">
                  <CIcon icon={cilBurn} className="flex-shrink-0 me-2" width={24} height={24} />
                  <div>Image cannot be empty</div>
                </CAlert>
              ) : (
                ''
              )}
              <CForm>
                {/* Name */}
                <CFormLabel htmlFor="exampleFormControlInput1">Name</CFormLabel>
                <CFormInput
                  type="text"
                  onChange={(e) => setFormAdd({ ...formAdd, name: e.target.value })}
                  required
                  className="form-control"
                  id="name"
                  placeholder="Insert Destination Name..."
                />

                {/* Category */}
                <CFormLabel htmlFor="exampleFormControlInput1">Category</CFormLabel>
                <CFormSelect
                  id="inputGroupSelect01"
                  onChange={(e) => setFormAdd({ ...formAdd, categoryId: e.target.value })}
                  required
                >
                  <option hidden>Choose Category...</option>
                  {categories.map((cat, index) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </CFormSelect>

                {/* Address */}
                <CFormLabel htmlFor="exampleFormControlInput1">Address</CFormLabel>
                <CFormInput
                  type="text"
                  onChange={(e) => setFormAdd({ ...formAdd, address: e.target.value })}
                  required
                  className="form-control"
                  id="address"
                  placeholder="Insert Address..."
                />

                {/* Open Day */}
                <CFormLabel htmlFor="exampleFormControlInput1">Open Day</CFormLabel>
                <CFormInput
                  type="text"
                  onChange={(e) => setFormAdd({ ...formAdd, open_day: e.target.value })}
                  required
                  className="form-control"
                  id="open_day"
                  placeholder="Insert Open Day..."
                />

                {/* Open Time */}
                <CFormLabel htmlFor="exampleFormControlInput1">Open Time</CFormLabel>
                <CFormInput
                  type="text"
                  onChange={(e) => setFormAdd({ ...formAdd, open_time: e.target.value })}
                  required
                  className="form-control"
                  id="open_time"
                  placeholder="Insert Open Time..."
                />

                {/* Maps Link */}
                <CFormLabel htmlFor="exampleFormControlInput1">Map Link</CFormLabel>
                <CFormInput
                  type="text"
                  onChange={(e) => setFormAdd({ ...formAdd, map_link: e.target.value })}
                  required
                  className="form-control"
                  id="map_link"
                  placeholder="Insert Map Link..."
                />

                {/* Description */}
                <CFormLabel htmlFor="exampleFormControlInput1">Description</CFormLabel>
                <CFormTextarea
                  type="text"
                  onChange={(e) => setFormAdd({ ...formAdd, description: e.target.value })}
                  required
                  className="form-control"
                  id="description"
                  placeholder="Insert Description..."
                />

                {/* Image */}
                <CFormLabel htmlFor="exampleFormControlInput1">Image</CFormLabel>
                <CFormInput
                  type="file"
                  id="inputGroupFile01"
                  onChange={(e) => loadImage(e)}
                  required
                />
                {preview ? (
                  <div className="col-auto">
                    <img src={preview} height="300px" className="preview-gambar" />
                  </div>
                ) : (
                  ''
                )}
              </CForm>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton color="primary" onClick={() => submitAdd()}>
                Add
              </CButton>
            </CModalFooter>
          </CModal>
        </CCardBody>

        {/* Category Table */}
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead color="light">
            <CTableRow>
              <CTableHeaderCell>Id</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Category</CTableHeaderCell>
              <CTableHeaderCell>Address</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>

          {/* ISI TABLE CATEGORY */}
          <CTableBody>
            {destination.map((dest, index) => (
              <CTableRow v-for="item in tableItems" key={dest.id}>
                <CTableDataCell>
                  <strong>{dest.id}</strong>
                </CTableDataCell>
                <CTableDataCell>
                  <div>{dest.name}</div>
                  <div className="small text-medium-emphasis">
                    <span>{dest.open_day}</span>
                  </div>
                  <div className="small text-medium-emphasis">
                    <span>{dest.open_time}</span>
                  </div>
                </CTableDataCell>

                <CTableDataCell>
                  <div>{dest.category.name}</div>
                </CTableDataCell>

                {/* DETAIL */}
                <CTableDataCell>
                  <div>{dest.address}</div>
                  <div className="small text-medium-emphasis">
                    <span>{dest.map_link}</span>
                  </div>
                </CTableDataCell>

                {/* ACTION */}
                <CTableDataCell className="text-center">
                  <CButton
                    color="primary"
                    shape="rounded-pill"
                    onClick={() => (btnEdit(dest.id), setVisible2(!visible))}
                  >
                    Edit
                  </CButton>
                  <CModal visible={visible2} onClose={() => setVisible2(false)}>
                    <CModalHeader onClose={() => setVisible2(false)}>
                      <CModalTitle>Edit Category </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                      <CForm>
                        <CFormInput
                          type="text"
                          value={formEdit.name}
                          className="form-control"
                          id="name"
                          onChange={(e) => setFormEdit({ name: e.target.value })}
                        />
                      </CForm>
                    </CModalBody>
                    <CModalFooter>
                      <CButton color="secondary" onClick={() => setVisible2(false)}>
                        Close
                      </CButton>
                      <CButton color="primary" type="submit" onClick={() => submitEdit()}>
                        Submit
                      </CButton>
                    </CModalFooter>
                  </CModal>

                  {/* Button Delete */}
                  <CButton
                    color="danger"
                    shape="rounded-pill"
                    onClick={() => delDestination(dest.id)}
                  >
                    <CIcon icon={cilTrash}></CIcon>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCard>
    </CRow>
  )
}

export default Category
