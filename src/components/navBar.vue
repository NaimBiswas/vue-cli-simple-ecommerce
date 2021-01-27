<template>
  <div class="">
      <nav class="navbar navbar-expand-sm navbar-light bg-warning">
       <a class="navbar-brand" href="#">Awesome Store</a>
       <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
           aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
             </li>
             
             <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                   <a class="dropdown-item" href="#">Github</a>
                   <a class="dropdown-item" href="#">LinkedIn</a>
                </div>
             </li>
          </ul>
          <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
             <input v-model="keyWord" class="form-control mr-sm-2" type="text" placeholder="Search">
             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
       </div>
    </nav>
  </div>
</template>

<script>
export default {
   data() {
      return {
         keyWord: ''
      }
   },
   methods:{
      search(){
         this.$emit('search', this.keyWord)
      }
   }

}
</script>

<style>

</style>