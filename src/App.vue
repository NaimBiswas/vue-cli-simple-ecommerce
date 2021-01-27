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
          <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="text" placeholder="Search">
             <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
       </div>
    </nav>
    <div class="container mt-4">
       <div class="row">
         <div class="col-lg-8">
            <div class="row">
               <!-- Card One  -->
             <div class="card border-primary mr-2">
               <img class="card-img-top" src="https://via.placeholder.com/240
C/O https://placeholder.com/" alt="">
               <div class="card-body">
                 <h4 class="card-title">Title</h4>
                 <p class="card-text">Text</p>
               </div>
             </div>
               <!-- Card One  -->
             <div class="card border-primary  mr-2">
               <img class="card-img-top" src="https://via.placeholder.com/240
C/O https://placeholder.com/" alt="">
               <div class="card-body">
                 <h4 class="card-title">Title</h4>
                 <p class="card-text">Text</p>
               </div>
             </div>
               <!-- Card One  -->
             <div class="card border-primary  mr-2">
               <img class="card-img-top" src="https://via.placeholder.com/240
C/O https://placeholder.com/" alt="">
               <div class="card-body">
                 <h4 class="card-title">Title</h4>
                 <p class="card-text">Text</p>
               </div>
             </div>
            </div>
         </div>
         <div class="col-lg-4">
            Card
         </div>
      </div>
    </div>
    
 </div>
</template>

<script>







export default {
  name: 'App',
  components: {
 
  }
}
</script>

<style>

</style>
