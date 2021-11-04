<template>
  <div>
  <div>
    <Header></Header>
  </div>
    <div><c-heading mt="1em">Welcome to CompSell 🖥️</c-heading></div>
    <c-flex mt="2em" ml="12.5em">
      <c-image :src="require('@/assets/COMPSELL.png')" w="20em" h="20em" />
      <c-text mt="5em" ml="5em" textAlign="left" w="25em" > Compsell is a website selling many computer products. You can have access to the different products we offer in the tab Our products. This website is only. This website is only available for shipping in France you can create your account and can add many items to your shpping cart.</c-text>
    </c-flex>
    <c-flex>
      <Footer/>
    </c-flex>
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'
import { CHeading, CText, CImage, CFlex } from '@chakra-ui/vue'
export default {
  name: 'HomePage',
  components: {
    Header,
    CHeading,
    CText,
    CImage,
    CFlex,
    Footer
  }
}
</script>

<style scoped>

</style>
