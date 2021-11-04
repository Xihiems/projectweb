<template>

  <c-flex  position="absolute" bottom="0" border-radius="10px" border-width="1px" w="100%" bg="gray" p="0.75em" flexWrap="no" color="white" justify-content="space-between"  >
    <c-box as="button" > Nous contacter </c-box>
  </c-flex>

</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'

export default {
  name: 'Footer',
  components: {
    CBox,
    CFlex
  }
}
</script>
