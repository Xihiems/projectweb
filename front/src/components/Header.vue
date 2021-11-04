<template>

  <c-flex  border-radius="10px" border-width="1px" w="100%" bg="gray" p="0.75em" flexWrap="no" color="white" justify-content="space-between"  >
    <c-box as="button" ><c-link as="router-link" to="/"> CompSell 🖥️</c-link></c-box>
    <c-box as="button"><c-link as="router-link" to="/catalog">Nos Produits</c-link></c-box>
    <c-box as="button" ><c-link as="router-link" to="/login"> Login </c-link></c-box>
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
  }
}
</script>
