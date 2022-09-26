import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getDestination = async (callback) => {
  try {
    let dataDestination = await axios({
      method: 'GET',
      url: URL + '/admin/destinations',
    })
    callback(dataDestination.data)
  } catch (error) {
    console.log(error.response.data)
  }
}

const getDestinationById = async (id, cb) => {
  try {
    let dataDestination = await axios({
      method: 'GET',
      url: `${URL}/admin/destinations/${id}`,
    })
    cb(dataDestination.data)
  } catch (err) {
    console.log(err.response.data)
  }
}

const addDestination = async (form) => {
  try {
    await axios({
      method: 'POST',
      url: `${URL}/admin/destinations`,
      data: form,
    })
    Swal.fire('Create', 'Create Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

const delDestination = async (id) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${URL}/admin/destinations/${id}`,
    })
    Swal.fire('Delete', 'Delete Success', 'success')
    window.location.reload(false)
  } catch (err) {
    console.log(err.response.data)
  }
}

const getImgDestiId = async (id, cb) => {
  try {
    let result = await axios({
      method: 'GET',
      url: `${URL}/admin/destinations/img/${id}`,
    })
    cb(result.data)
  } catch (err) {
    console.log(err.response.data)
  }
}

const updDestination = async (id, form) => {
  try {
    await axios({
      method: 'PUT',
      url: `${URL}/admin/destinations/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

export {
  getDestinationById,
  getDestination,
  addDestination,
  delDestination,
  updDestination,
  getImgDestiId,
}
