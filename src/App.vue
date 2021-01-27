<template>
 <div class="">
    <navBar></navBar>
   
    <div class="container mt-4">
       <div class="row">
         <div class="col-lg-8">
           
         </div>
         <div class="col-lg-4">
           <table class="table table-bordered">
              <tr>
                 <td>Name</td>
                 <td>Price</td>
              </tr>
              
           </table>
         </div>
      </div>
    </div>
    
 </div>
</template>

<script>





import navBar from '@/components/navBar'

export default {
  name: 'App',
  components: {
   navBar
  }
}
</script>

<style>

</style>
