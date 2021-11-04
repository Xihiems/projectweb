<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <c-flex  display="flex" align="center" mt="7em" flexDirection="column" >
      <c-form-control  w="20em">
        <c-form-label for="email">Email address :</c-form-label>
        <c-input  type="email" id="email" />
      </c-form-control >
      <c-form-control  mt="1em" w="20em">
        <c-form-label for="password">Password :</c-form-label>
        <c-input   type="password" id="password"  />
      </c-form-control>
      <c-button bg="lightgray" mt="2em" mb="1em">Sign Up</c-button>

    </c-flex>
    <c-flex>
      <Footer/>
    </c-flex>
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

import { CFlex, CFormControl, CFormLabel, CInput, CButton } from '@chakra-ui/vue'
export default {
  name: 'SignUp',
  components: {
    Header,
    CFlex,
    Footer,
    CFormControl,
    CFormLabel,
    CInput,
    CButton

  }
}
</script>

<style scoped>

</style>
