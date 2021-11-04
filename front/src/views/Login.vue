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
      <c-button bg="lightgray" mt="2em" mb="1em">Log in</c-button>
      <c-flex>
        If you don't have an account :
        <c-box as="button"  ><c-link as="router-link" to="/">Sign up</c-link></c-box>
      </c-flex>
    </c-flex>
    <c-flex>
      <Footer/>
    </c-flex>
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

import { CFlex, CFormControl, CFormLabel, CInput, CButton, CLink, CBox } from '@chakra-ui/vue'
export default {
  name: 'HomePage',
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
  }
}
</script>

<style scoped>

</style>
