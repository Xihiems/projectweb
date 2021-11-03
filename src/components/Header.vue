<template>

  <c-flex  border-radius="10px" border-width="1px" w="100%" bg="gray" p="20px" flexWrap="no" color="white" justify-content="space-between"  >
    <c-box as="button" href="/HomePage.vue"> Nomdusite</c-box>
    <c-box as="button"> Nos produits</c-box>

    <c-box as="button" > Login</c-box>

  </c-flex>

</template>


<script>
import { CBox,CFlex } from '@chakra-ui/vue';

export default {
  name: 'Header',
  components: {
    CBox,
    CFlex,

  },data() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
