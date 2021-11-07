import axios from 'axios'

async function addToCart (idProduct) {
  const res = await axios.post('http://localhost:3000/addToCart', { idproduct: idProduct }, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  return res
}

export { addToCart }
