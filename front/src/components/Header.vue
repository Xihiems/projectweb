<template>

  <c-flex  border-radius="10px" border-width="1px" w="100%" bg="gray" p="0.75em" flexWrap="no" color="white" justify-content="space-between" class="header">
    <c-box as="button" ><c-link as="router-link" to="/"> CompSell 🖥️</c-link></c-box>
    <c-box as="button"><c-link as="router-link" to="/catalog">Nos Produits</c-link></c-box>
    <c-box as="button" >
      <c-link as="router-link" to="/login" v-if="!this.isLoggedIn"> Login </c-link>
      <c-link as="router-link" to="/cart" v-else>Cart</c-link>
    </c-box>
  </c-flex>

</template>

<script>
import { CBox, CFlex, CLink } from '@chakra-ui/vue'

export default {
  name: 'Header',
  components: {
    CBox,
    CFlex,
    CLink
  },
  computed: {
    isLoggedIn: () => localStorage.getItem('token')
  }
}
</script>

<style scoped>

.header{
  position: fixed;
  top: 0;
}

</style>
