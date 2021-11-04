<template>

  <c-flex  border-radius="10px" border-width="1px" w="100%" bg="gray" p="0.75em" flexWrap="no" color="white" justify-content="space-between"  >
    <c-box as="button" > CompSell 🖥️</c-box>
    <c-box as="button"> Nos Produits</c-box>
    <c-box as="button" > Login </c-box>
  </c-flex>

</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'

export default {
  name: 'Header',
  components: {
    CBox,
    CFlex
  }
}
</script>
