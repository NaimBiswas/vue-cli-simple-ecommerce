<template>
  <div class="">
     <!-- Header Nav Bar Section  -->
    <navBar @search="theResult"></navBar>

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8">
           <!-- inventory section  -->
          <inevntory @AddItemOnCart="addCartItem" :items='items'></inevntory>
        </div>
        <div class="col-lg-4">
           <!-- cart section  -->
          <carft @RemoveFromCart="RemoveItem" :items='cart'></carft>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
import inevntory from "@/components/inevntory";
import carft from "@/components/carft";
import data from '@/data'
export default {
  name: "App",
  data() {
     return {
        items: [],
        cart: [],
     }
  },
  components: {
    navBar,
    inevntory,
    carft,
   
  },
  mounted() {
    this.items = data;
  },
  methods: {
     addCartItem(item){
        this.cart.push(item);
     },
     RemoveItem(index){
        this.cart.splice(index, 1)
     },
     theResult(keyWord){
       this.items = data.filter(item =>{
          return item.title.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
        });
     }
  },
};
</script>

<style>
</style>
