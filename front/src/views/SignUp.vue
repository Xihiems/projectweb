<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <c-flex  display="flex" align="center" mt="7em" flexDirection="column" >
      <c-form-control  w="20em">
        <c-form-label for="email">Email address :</c-form-label>
        <c-input  type="email" id="email" v-model="email"/>
      </c-form-control >
      <c-form-control  mt="1em" w="20em">
        <c-form-label for="password">Password :</c-form-label>
        <c-input   type="password" id="password"  v-model="password"/>
      </c-form-control>
      <c-button bg="lightgray" mt="2em" mb="1em" @click="registerOnClick()">Sign Up</c-button>

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
import { register } from '../api/register.js'
import { CFlex, CFormControl, CFormLabel, CInput, CButton } from '@chakra-ui/vue'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  name: 'SignUp',
  components: {
    Header,
    CFlex,
    Footer,
    CFormControl,
    CFormLabel,
    CInput,
    CButton
  },
  methods: {
    async registerOnClick () {
      const res = await register({ email: this.email, password: this.password })
      console.log(res)
      router.push('/').catch(() => {})
    }
  }
}
</script>

<style scoped>

</style>
