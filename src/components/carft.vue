<template>
  <div class="">
    <table class="table table-bordered">
       <tr>
          <td>Name</td>
          <td>Price</td>
          
          
       </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
      </tr>
      <tr>
         <td class="text-center">Total</td>
         <td>${{ TotaPrice }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
   props:['items'],
   computed:{
      TotaPrice() {
        var total = 0 
        this.items.forEach(item => {
           total += parseFloat(item.price);
        });
        return total;
      },
   }
};
</script>

<style>
</style>