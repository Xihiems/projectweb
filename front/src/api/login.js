import axios from 'axios'

async function login (identifiers) {
  console.log(identifiers)
  var token = await axios.post('http://localhost:3000/login', identifiers)
  return token
}

export { login }
