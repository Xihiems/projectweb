<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div><c-heading mt="1em" class="productTitle">All our product</c-heading></div>
    <c-flex ml="10em" mt="1em" w="12.5em">
      <c-select v-model="sortType" @change="sort()" placeholder="Default">
        <option value="A">Ascending price</option>
        <option value="D">Decreasing price</option>
        <option value="GPU">GPU</option>
        <option value="CPU">CPU</option>
        <option value="Motherboard">Motherboard</option>
      </c-select>
    </c-flex>
    <c-grid templateColumns="repeat(6,1fr)" class="cgridl">
        <c-grid-item>image</c-grid-item>
        <c-grid-item>name</c-grid-item>
        <c-grid-item>brand</c-grid-item>
        <c-grid-item>type</c-grid-item>
        <c-grid-item>price</c-grid-item>
      </c-grid>
    <div v-for="product in sortedProducts" :key="product.id">
      <c-grid templateColumns="repeat(6,1fr)" class="cgrid">
        <c-grid-item class="citem"><img :src="product.image" alt="" class="image"></c-grid-item>
        <c-grid-item>{{product.name}}</c-grid-item>
        <c-grid-item>{{product.brand}}</c-grid-item>
        <c-grid-item>{{product.type}}</c-grid-item>
        <c-grid-item>{{product.price}}</c-grid-item>
        <button type="button" @click="handleClick(product.id)">add to cart</button>
      </c-grid>
    </div>
    <c-flex>
      <Footer/>
    </c-flex>
  </div>
</template>

<script>
import { getProducts } from '../api/getProducts.js'
import { addToCart } from '../api/addToCart.js'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { CHeading, CFlex, CSelect, CGrid, CGridItem } from '@chakra-ui/vue'
export default {
  mounted: async function () {
    this.products = (await getProducts()).data
    this.sortedProducts = [...this.products]
  },
  data () {
    return {
      products: [],
      sortType: '',
      sortedProducts: []
    }
  },
  watch: {

  },
  name: 'HomePage',
  components: {
    Header,
    CHeading,
    CFlex,
    CSelect,
    Footer,
    CGrid,
    CGridItem
  },
  methods: {
    async handleClick (idProduct) {
      await addToCart(idProduct)
    },
    sort () {
      if (['GPU', 'CPU', 'Motherboard'].includes(this.sortType)) {
        this.sortedProducts = this.products.filter(p => p.type === this.sortType)
      } else if (this.sortType === 'A') {
        this.sortedProducts = this.products.sort((p1, p2) => p1.price - p2.price)
      } else if (this.sortType === 'D') {
        this.sortedProducts = this.products.sort((p1, p2) => p2.price - p1.price)
      } else {
        this.sortedProducts = [...this.products]
      }
    }
  }
}
</script>

<style scoped>

.cgrid{
  align-items: center;
}

.citem{
  justify-content: center;
  display: flex;
}

.cgridl{
  font-weight: bold;
}

.productTitle{
  margin-top: 60px;
}

.image{
  max-height: 200px;
  max-width: 200px;
  object-fit: cover;
}

button {
        display: inline-block;
        background-color: grey;
        border-radius: 10px;
        border: 4px double #cccccc;
        color: #eeeeee;
        text-align: center;
        font-size: 20px;
        padding: 10px;
        width: 150px;
        cursor: pointer;
        margin: 5px;
      }
</style>
