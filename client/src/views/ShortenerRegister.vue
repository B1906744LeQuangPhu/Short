<template>
    <div class="page">
        <div v-if="Register">
            <h4 style="text-align: center; margin-top: 20px;">ĐĂNG KÝ</h4>
            <RegisterForm :contact="contact" @submit:contact="createUser" />
            <p>{{ message }}</p>
        </div>
    </div>
</template>
    
<script >

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
            isHidden: false,
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
                    alert("Đăng ký thành công sẽ chuyển sang trang đăng nhập")
                    window.location.href = "/Shortener/Login";
                    this.isHidden= true,
                    this.Register = false
                    
                }



            } catch (error) {
                console.log(error);
            }
        },
    },
};

</script>

    