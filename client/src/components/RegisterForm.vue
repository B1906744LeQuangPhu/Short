<template>
    <Form @submit="submitContact" v-if="!isHidden" :validation-schema="contactFormSchema">
        <div class="form-group">
            <label for="name">Tên</label>
            <Field name="name" type="text" class="form-control" v-model="contactLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="phone">Điện thoại</label>
            <Field name="phone" type="tel" class="form-control" v-model="contactLocal.phone" />
            <ErrorMessage name="phone" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="contactLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Đăng ký</button>
        </div>
    </Form>
</template>
    
    
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form, Field,
        ErrorMessage,
    },
    
    emits: ["submit:contact"],
    props: {
        contact: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Tên phải có giá trị.")
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            phone: yup
                .string()
                .required("Phone phải có giá trị.")
                .matches(
                    /((09|03|07|08|05)+([0-9]{8})\b)/g,
                    "Số điện thoại không hợp lệ."
                ),
            password: yup.string().min(3,"Mật khẩu ít nhất 3 ký tự").required("Mật khẩu phải có giá trị.").matches(/(\w)/g, 'Mật khẩu không chứa ký tự đặc biệt')
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            //	contactLocal để liên kết với các input trên form 
            contactLocal: this.contact,
            contactFormSchema,
        };
    },
    methods: {
        submitContact() {
            this.$emit("submit:contact", this.contactLocal);
            this.contactLocal.name="",
            this.contactLocal.phone=""
            this.contactLocal.password=""
        },
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>

     
     
    