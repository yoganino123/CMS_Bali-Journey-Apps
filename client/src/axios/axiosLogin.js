import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const URL = 'http://localhost:3000'

const login = async (form, cb) => {
  try {
    let result = await axios({
      method: 'POST',
      url: URL + '/home/login',
      data: form,
    })
    console.log(result.data)
    const access_token = result.data.accessToken
    localStorage.setItem('access_token', access_token)
    // const data = JSON.stringify(result.data.valUser)
    // Swal.fire({
    //   title: 'Login',
    //   text: 'Login Success',
    //   icon: 'success',
    //   confirmButtonText: 'Oke',
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     Cookies.set('user', data)
    //     window.location.reload(true)
    //   }
    // })
    // cb(result.data.valUser)
  } catch (error) {
    // Swal.fire({
    //   icon: 'error',
    //   title: `Error Status ${error.response.status}`,
    //   text: `Email and Password didn't match`,
    // })
    console.log(error)
  }
}

export { login }
