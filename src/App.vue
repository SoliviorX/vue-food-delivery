<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <tab :tabs="tabs" :initialIndex=0></tab>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header'
import Goods from 'components/goods/goods'
import Seller from 'components/seller/seller'
import Ratings from 'components/ratings/ratings'
import { getSeller } from 'api/index.js'
import Tab from 'components/tab/tab'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  computed: {
    tabs() {
      return [
        {
          label: '商品',
          component: Goods,
          data: {
            seller: this.seller
          }
        },
        {
          label: '评价',
          component: Ratings,
          data: {
            seller: this.seller
          }
        },
        {
          label: '商家',
          component: Seller,
          data: {
            seller: this.seller
          }
        }
      ]
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((seller) => {
        this.seller = seller
      })
    }
  },
  components: {
    VHeader,
    Tab
  }
}
</script>
<style lang="stylus">

</style>
