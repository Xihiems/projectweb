<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div><c-heading mt="1em">All our product</c-heading></div>
    <c-flex ml="10em" mt="1em" w="12.5em">
      <c-select v-model="Sorttype" placeholder="Default">
        <option value="alphabétique"> Alphabetical</option>
        <option value="Priceascending"> Ascending price</option>
        <option value="Pricedecreasing"> Decreasing price</option>
      </c-select>
    </c-flex>
    <c-flex>
      <Footer/>
    </c-flex>
  </div>
</template>

<script>

import Header from '../components/Header'
import Footer from '../components/Footer'

import { CHeading, CFlex, CSelect } from '@chakra-ui/vue'
export default {
  name: 'HomePage',
  components: {
    Header,
    CHeading,
    CFlex,
    CSelect,
    Footer
  }
}
</script>

<style scoped>

</style>
