import axios from 'axios'

async function getCart () {
  const res = await axios.get('http://localhost:3000/getCart', {
    headers: {
      authorization: localStorage.getItem('token')
    }
  })
  console.log(res)
  return res
}

export { getCart }
