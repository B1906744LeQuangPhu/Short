<template>
    <div class="page">
        <div v-if="Register">
            <h4 style="text-align: center; margin-top: 20px;">ĐĂNG KÝ</h4>
            <RegisterForm :contact="contact" @submit:contact="createUser" />
            <p>{{ message }}</p>
        </div>
        <div v-else>
            <h2>Đăng ký thành công</h2>
            <router-link :to="{ name: 'Login' }" > 
                Đăng nhập để có thể sử dụng ứng dụng
            </router-link>
        </div>
    </div>
</template>
    
<script>

import AccountService from "../sevices/account.service";
import RegisterForm from "../components/RegisterForm.vue";

export default {
    components: {
        RegisterForm,
    },

    data() {
        return {
            contact: {},
            Register: true,
        };
    },

    methods: {
        async createUser(data) {
            try {

                const payload = await AccountService.Register(data);
                if (payload === false) {
                    alert("Đăng ký thất bại. Có thể số điện thoại đã được đăng ký!!")
                }
                else {
                    this.Register = false

                }



            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
    