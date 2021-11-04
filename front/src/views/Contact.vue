<template>
  <div>
  <Header></Header>
    <div><c-heading mt="1em">Contact Us 📞 </c-heading></div>
    <c-flex mt="2em" justify-content="space-between">
        <c-box pl="10em" mt="3em">
          <c-flex mt="1em"> Company 🏢 : CompSell </c-flex>
          <c-flex mt="1em"> Address 📍 : 32 Rue du Bac, Paris</c-flex>
          <c-flex mt="1em"> Mobile Phone 📞 : 00.54.72.45.39</c-flex>
          <c-flex mt="1em"> Email 📧 : compsell@gmail.com</c-flex>
        </c-box>

        <c-box pr="10em">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.043709386957!2d2.32631913328624!3d48.857376894055164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2a1dab4901%3A0x931e5ebbdec51948!2s32%20Rue%20du%20Bac%2C%2075007%20Paris!5e0!3m2!1sfr!2sfr!4v1636067471603!5m2!1sfr!2sfr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>        </c-box>

    </c-flex>
    <Footer></Footer>
  </div>
</template>

<script>

import { CHeading, CFlex, CBox } from '@chakra-ui/vue'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'Contact',
  components: {
    CFlex,
    CHeading,
    Header,
    Footer,
    CBox
  }
}
</script>

<style scoped>

</style>
