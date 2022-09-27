import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getPackageTrip = async (callback) => {
  try {
    let dataDestination = await axios({
      method: 'GET',
      url: URL + '/admin/packageTrips',
    })
    callback(dataDestination.data)
  } catch (error) {
    console.log(error.response.data)
  }
}

const addPackageTrip = async (form) => {
  try {
    await axios({
      method: 'POST',
      url: `${URL}/admin/packageTrips`,
      data: form,
    })
    Swal.fire('Create', 'Create Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

const addPackDestination = async (id, form) => {
  try {
    await axios({
      method: 'POST',
      url: `${URL}/admin/packageTrips/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

const delDestPack = async (id) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${URL}/admin/packageTrips/dest/${id}`,
    })
    Swal.fire('Delete', 'Delete Success', 'success')
    window.location.reload(false)
  } catch (err) {
    console.log(err.response.data)
  }
}

const addImgPackageTrip = async (id, form) => {
  try {
    await axios({
      method: 'POST',
      url: `${URL}/admin/packageTrips/img/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}
const getImgPackageTripId = async (id, cb) => {
  try {
    let result = await axios({
      method: 'GET',
      url: `${URL}/admin/packageTrips/img/${id}`,
    })
    cb(result.data)
  } catch (err) {
    console.log(err.response.data)
  }
}

const delImgPackageTrip = async (id) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${URL}/admin/packageTrips/img/${id}`,
    })
    Swal.fire('Delete', 'Delete Success', 'success')
    window.location.reload(false)
  } catch (err) {
    console.log(err.response.data)
  }
}

const getPackageTripById = async (id, cb) => {
  try {
    let dataDestination = await axios({
      method: 'GET',
      url: `${URL}/admin/packageTrips/${id}`,
    })
    cb(dataDestination.data)
  } catch (err) {
    console.log(err.response.data)
  }
}

const updPackageTrip = async (id, form) => {
  try {
    await axios({
      method: 'PUT',
      url: `${URL}/admin/packageTrips/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

const delPackageTrip = async (id) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${URL}/admin/packageTrips/${id}`,
    })
    Swal.fire('Delete', 'Delete Success', 'success')
    window.location.reload(false)
  } catch (err) {
    console.log(err.response.data)
  }
}

export {
  getPackageTrip,
  addPackageTrip,
  addPackDestination,
  delDestPack,
  addImgPackageTrip,
  getImgPackageTripId,
  delImgPackageTrip,
  getPackageTripById,
  updPackageTrip,
  delPackageTrip,
}
