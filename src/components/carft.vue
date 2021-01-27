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
    </table>
  </div>
</template>

<script>
export default {
   props:['items']
};
</script>

<style>
</style>