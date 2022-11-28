<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link :to="{ name: 'Home' }" class="nav-link text-light fs-5"> LinkShorten
    </router-link>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div class=" navbar-brand float-end ">
            <a class="fs-7 text-light" style= "text-decoration: none; margin:auto;">{{ getName }}</a>
            
            <a class="btn btn-primary hide" role="button" style="margin-left: 20px;" v-if="!this.$store.state.isAuthenticated">
                <router-link :to="{ name: 'Login' }" class="nav-link"> 
                  Log in
                </router-link>
              </a>
            <a class="btn btn-primary hide" role="button" style="margin-left: 20px;" v-else>
                <router-link :to="{ name: 'Login' }" @click="logOut" class="nav-link"> 
                  Log out
                </router-link>
            </a>
            <a class="btn btn-primary hide" role="button" style="margin-left: 20px;">
                <router-link :to="{ name: 'Register' }" @click="logOut" class="nav-link"> 
                  Sign Up
                </router-link>
            </a>
        
      </div>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {
    computed: {
        getName() {
            return this.$store.getters.getName
        }
    },
    methods: {
        logOut() {
            this.$store.commit("updateisAuthenticated")
            this.$store.commit("updateName","")
        }
    }
}
</script>

