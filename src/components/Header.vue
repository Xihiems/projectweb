<template>

  <c-flex  border-radius="10px" border-width="1px" w="100%" bg="gray" p="20px" flexWrap="no" color="white" justify-content="space-between"  >
    <c-box> Nomdusite</c-box>
    <c-box> Nos produits</c-box>
    <c-box> Login</c-box>

  </c-flex>

</template>


<script>
import { CBox,CFlex } from '@chakra-ui/vue';

export default {
  name: 'Header',
  components: {
    CBox,
    CFlex,

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
