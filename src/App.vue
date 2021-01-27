<template>
 <div class="">
    <navBar></navBar>
   
    <div class="container mt-4">
       <div class="row">
         <div class="col-lg-8">
           <inevntory></inevntory>
         </div>
         <div class="col-lg-4">
           
         </div>
      </div>
    </div>
    
 </div>
</template>

<script>





import navBar from '@/components/navBar'
import inevntory from '@/components/inevntory'

export default {
  name: 'App',
  components: {
   navBar,
   inevntory
  }
}
</script>

<style>

</style>
