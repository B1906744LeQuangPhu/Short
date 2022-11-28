<!-- <template>
    
    <form v-on:submit="Login">
      <input id="username" name="username" type="text" v-model="username">
      <input id="pass" name="pass" type="password" v-model="pass">
      <button type="submit">123</button>
      
    </form>
  </template>
  <script>
    import router from "../router/index"    
    import axios from "axios"
    export default {    
        name: "Login",    
        methods: {    
            Login: (e) => {    
                e.preventDefault()    
                   
                let login = () => {    
                    let data = {    
                        username: username,    
                        pass: pass    
                    }    
                    axios.get("/login", data)    
                        .then((response) => {    
                            console.log("Logged in")    
                            router.render("/")    
                        })    
                        .catch((errors) => {    
                            console.log("Cannot log in")    
                        })    
                }    
                login()    
            }    
        }    
    }

  
  
  
  </script> -->
  <template>
    <form action="/login" method="POST">
        <input id="username" name="username" type="text" >
      <input id="pass" name="pass" type="password" >
      <button type="submit">123</button>
    </form>
  </template>