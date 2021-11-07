import axios from 'axios'

async function getProducts () {
  const res = await axios.get('http://localhost:3000/products')
  return res
}

export { getProducts }
