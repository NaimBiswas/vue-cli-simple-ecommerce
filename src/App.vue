<template>
  <div class="">
     <!-- Header Nav Bar Section  -->
    <navBar></navBar>

    <div class="container mt-4">
      <div class="row">
        <div class="col-lg-8">
           <!-- inventory section  -->
          <inevntory :items='items'></inevntory>
        </div>
        <div class="col-lg-4">
           <!-- cart section  -->
          <carft></carft>
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
};
</script>

<style>
</style>
