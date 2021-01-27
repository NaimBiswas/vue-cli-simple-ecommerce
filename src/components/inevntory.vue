<template>
  <div class="">
      <div class="row">
         
            <div class="card border-primary mr-2 col-lg-5 mb-2" v-for="(item, index) in items" :key="index">
               <img class="card-img-top mt-2" :src="item.photo" alt="">
               <div class="card-body">
               <h4 class="card-title">{{ item.title }}</h4>
               <p class="card-text">This is a dummy text for for all div</p>
                <div class="d-flex justify-content-between">
                   <a href="#" class="btn btn-info">{{ item.price }}</a>
                   <button class="btn btn-outline-success">+ Add</button>
                </div>
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