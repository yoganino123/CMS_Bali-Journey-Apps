import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getCategories = async (callback) => {
  try {
    let dataCategories = await axios({
      method: 'GET',
      url: URL + '/admin/categories',
    })
    callback(dataCategories.data)
  } catch (error) {
    console.log(error.response.data)
  }
}

const getCategoryById = async (id, cb) => {
  try {
    let dataCategory = await axios({
      method: 'GET',
      url: `${URL}/admin/categories/${id}`,
    })
    cb(dataCategory.data)
  } catch (err) {
    console.log(err.response.data)
  }
}

const addCategory = async (form) => {
  try {
    await axios({
      method: 'POST',
      url: `${URL}/admin/categories`,
      data: form,
    })
    Swal.fire('Create', 'Create Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

const delCategory = async (id) => {
  try {
    await axios({
      method: 'DELETE',
      url: `${URL}/admin/categories/${id}`,
    })
    Swal.fire('Delete', 'Delete Success', 'success')
    window.location.reload(false)
  } catch (err) {
    console.log(err.response.data)
  }
}

const updCategory = async (id, form) => {
  try {
    await axios({
      method: 'PUT',
      url: `${URL}/admin/categories/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

export { getCategories, getCategoryById, addCategory, delCategory, updCategory }
