import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getReviewPackageTrip = async (callback) => {
  try {
    let result = await axios({
      method: 'GET',
      url: URL + '/admin/reviews/packageTrips',
    })
    callback(result.data)
  } catch (error) {
    console.log(error.response.data)
  }
}
const updIsVioloation = async (id, form) => {
  try {
    await axios({
      method: 'PUT',
      url: `${URL}/admin/reviews/violations/${id}`,
      data: form,
    })
    Swal.fire('Update', 'Update Success', 'success')
    window.location.reload(true)
  } catch (err) {
    console.log(err.response.data)
  }
}

export { getReviewPackageTrip, updIsVioloation }
