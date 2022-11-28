<template>
    <div class="page">
        <h4 style="text-align: center; margin-top: 20px;">ĐĂNG NHẬP</h4>
        <LoginForm :contact="contact" @submit:contact="checkLogin" />
        <p class="text-danger">{{ message }}</p>

    </div>
</template>
    
<script>

import  AccountService from "../sevices/account.service";
import LoginForm from "../components/LoginForm.vue";

export default {
    components: {
        LoginForm,
    },

    data() {
        return {
            contact: {},
            message: "",
        };
    },

    methods: {
        async checkLogin(data) {
            try {

                const payload = await  AccountService.Login(data);
                if (payload === "") {
                    this.message = "Điện thoại hoặc Mật khẩu không đúng!!"
                }
                else {
                    await this.$store.commit("updateIdUser", payload._id)
                    await this.$store.commit("updatePass", payload.password)
                    await this.$store.commit("updateName", payload.name)
                    await this.$store.commit("updatePhone", payload.phone)
                    await this.$store.commit("updateisAuthenticated")
                    // alert("Đăng nhập thành công")
                    this.$router.push({ name: "Home" });
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
    