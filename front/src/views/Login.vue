<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <c-flex  display="flex" align="center" mt="7em" flexDirection="column" >
      <c-form-control  w="20em">
        <c-form-label for="email" >Email address :</c-form-label>
        <c-input  type="email" id="email" v-model="email"/>
      </c-form-control >
      <c-form-control  mt="1em" w="20em">
        <c-form-label for="password">Password :</c-form-label>
        <c-input   type="password" id="password"  v-model="password"/>
      </c-form-control>
      <c-button bg="lightgray" mt="2em" mb="1em" @click="handleClick()">Log in</c-button>
      <c-flex>
        If you don't have an account :
        <c-box as="button"  ><c-link as="router-link" to="/signup">Sign up</c-link></c-box>
      </c-flex>
    </c-flex>
    <c-flex>
      <Footer/>
    </c-flex>
  </div>
</template>

<script>

import router from '../router/index.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { login } from '../api/login.js'

import { CFlex, CFormControl, CFormLabel, CInput, CButton, CLink, CBox } from '@chakra-ui/vue'
export default {
  name: 'Login',
  components: {
    Header,
    CFlex,
    Footer,
    CFormControl,
    CFormLabel,
    CInput,
    CButton,
    CLink,
    CBox
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async handleClick () {
      var token = await login({ email: this.email, password: this.password })
      localStorage.setItem('token', token.data)
      console.log(localStorage)
      router.push('/').catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>
