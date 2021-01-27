<template>
  <div class="">
      <div class="row">
         
            <div class="card border-primary mr-2 col-lg-3 mb-2" v-for="(item, index) in items" :key="index">
               <img class="card-img-top" :src="item.photo" alt="">
               <div class="card-body">
               <h4 class="card-title">{{ item.title }}</h4>
               <p class="card-text"></p>
               </div>
            </div>
        
      </div>
  </div>
</template>

<script>
export default {
   props:['items']
}
</script>

<style>

</style>