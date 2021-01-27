<template>
 <div class="">
    <navBar></navBar>
   
    <div class="container mt-4">
       <div class="row">
         <div class="col-lg-8">
           <inevntory></inevntory>
         </div>
         <div class="col-lg-4">
           <carft></carft>
         </div>
      </div>
    </div>
    
 </div>
</template>

<script>





import navBar from '@/components/navBar'
import inevntory from '@/components/inevntory'
import carft from '@/components/carft'
export default {
  name: 'App',
  components: {
   navBar,
   inevntory,
   carft
  }
}
</script>

<style>

</style>
