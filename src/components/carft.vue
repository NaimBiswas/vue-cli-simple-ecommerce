<template>
  <div class="">
    <table class="table table-bordered">
       <tr>
          <td>Name</td>
          <td>Price</td>
          
          
       </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.title }}</td>
        <td class="text-center">
           {{ item.price }}  
           <button @click="RemoveToItem(index)" class="btn btn-danger btn-md ml-4 float-right">Remove</button>
         </td>
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
    methods: {
         RemoveToItem(index){
            this.$emit('RemoveFromCart', index)
         }
      },
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