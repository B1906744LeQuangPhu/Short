<template>
    
    <div class="fs-5" v-if="!this.$store.state.isAuthenticated">
        <router-link :to="{ name: 'Login' }" style="text-decoration: none"> 
            Đăng nhập
        </router-link>
        để sử dụng chức năng này.
    </div>
  
    <div class="" v-else>
        <h3>History ShortenerLink</h3>
        <table class="table table-striped table-borderes" style="margin: auto">
            <thead>
                <tr>
                    
                    <th style="width:15%">ShortUrl</th>
                    <th scope="col">URL</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="s in test" :key="s._id">
                    <td ><a>{{s.shortURL}}</a></td>
                    <td>{{s.longURL}}</td>
                    
                </tr>
            </tbody>
        </table>
        
    </div>
    
</template>
<script>
import axios from "axios";
//import LinkCard from "./LinkCard.vue";
//import Link_List from "./LinkList.vue";
// import LinkService from "../sevices/shortener.service";
export default {
   
    data: () => {
      return {
        link: [],
        test: {},
      };
    },
    
    computed: {
        // Chuyển các đối tượng todo thành chuỗi để tiện cho tìm kiếm.
        // linkStrings() {
        //     return this.links.map((link) => {
        //         const { name, longUrl, shortURL, phone } = link;
        //         return [name, longUrl, shortURL, phone].join("");
        //     });
        // },
        // Trả về các todo có chứa thông tin cần tìm kiếm.
        // filteredLinks() {
        //     if (!this.searchText) return this.link;
        //     return this.links.filter((_link, index) =>
        //         this.linkStrings[index].includes(this.searchText)
        //     );
        // },
        // activeLink() {
        //     if (this.activeIndex < 0) return null;
        //     return this.filteredLinks[this.activeIndex];
        // },
        // filteredLinksCount() {
        //     return this.filteredLinks.length;
        // },
        getPhone() {
          return this.$store.getters.getPhone
        },
    },
//     methods: {
//         submit: async function (phone) {
//         try {
//           console.log(this.$store.getters.phone)
//           const api = "http://localhost:5000/test";
//           const response = await axios.post(api, {
//            phone,
//           });
//           this.shortUrl = response.data.shortUrl;
//           this.Url=response.data.shortUrl;
//         } catch (error) {
//           console.log(error);
//         }
//       },
//         // async retrieveLinks() {
//         //     try {
//         //         this.links = await LinkService.getAll();
//         //     } catch (error) {
//         //         console.log(error);
//         //     }
//         // },
//         // refreshList() {
//         //     this.retrieveLinks();
//         //     this.activeIndex = -1;
//         // },
        
        
//     },
//     // mounted() {
//     //     this.refreshList();
//     // },
  mounted(){
    const  phone =this.$store.getters.getPhone;
    axios.post("http://localhost:5000/test",{phone})

    .then((response) => {
        console.log(response.data);
        this.test= response.data
        
    })
    .catch((error)=>{
        console.log(error)
    })
  }  
  
  
};


</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}
</style>    