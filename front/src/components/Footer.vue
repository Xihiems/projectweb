<template>

  <c-flex  position="absolute" bottom="0" border-radius="10px" border-width="1px" w="100%" bg="gray" p="0.75em" flexWrap="no" color="white" justify-content="space-between"  >
    <c-box as="button" ><c-link as="router-link" to="/contact"> Nous contacter</c-link> </c-box>
  </c-flex>

</template>

<script>
import { CBox, CFlex, CLink } from '@chakra-ui/vue'

export default {
  name: 'Footer',
  components: {
    CBox,
    CFlex,
    CLink
  }
}
</script>
