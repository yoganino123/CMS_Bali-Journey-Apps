import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getUser = async (callback) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/admin/users',
    })
    callback(result.data)
  } catch (error) {
    console.log(error.response.data)
  }
}

const getUserById = async (id, cb) => {
  try {
    let result = await axios({
      method: 'GET',
      url: `${URL}/admin/users/${id}`,
    })
    cb(result.data)
  } catch (err) {
    console.log(err.response.data)
  }
}

const updUser = async (id, form) => {
  try {
    await axios({
      method: 'PUT',
      url: `${URL}/admin/users/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

const addUser = async (form) => {
  try {
    await axios({
      method: 'POST',
      url: `${URL}/admin/users`,
      data: form,
    })
    Swal.fire('Create', 'Create Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

export { getUser, getUserById, updUser, addUser }
