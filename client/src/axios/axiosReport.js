import axios from 'axios'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const getReportAll = async (callback) => {
  try {
    const access_token = localStorage.getItem('access_token')
    let dataDestination = await axios({
      method: 'GET',
      headers: { access_token },
      url: URL + '/admin/reports/all',
    })
    callback(dataDestination.data)
  } catch (error) {
    console.log(error.response.data)
  }
}

const getReportPaid = async (callback) => {
  try {
    const access_token = localStorage.getItem('access_token')
    let dataDestination = await axios({
      method: 'GET',
      headers: { access_token },
      url: URL + '/admin/reports/paids',
    })
    callback(dataDestination.data)
  } catch (error) {
    console.log(error)
  }
}

export { getReportAll, getReportPaid }
