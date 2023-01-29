<template>
    <h1>Login</h1>
    <form @submit="handleSubmitForm">
        <label for="email">e-mail: </label>
        <input type="email" name="email" />
        <label for="password">password: </label>
        <input type="password" name="password" />
        <button type="submit">Login</button>
    </form>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { AxiosResponse } from "axios";
import fakeShopApi from "@/api/fakeShopApi";

export default defineComponent({
    props: {
        shopName: String
    },
    setup() {
        return {
            handleSubmitForm: (event: any) => {
                event.preventDefault();  // prevent form submit
                let form = event.target.elements;
                let email = form.email.value;
                let password = form.password.value;
                // obtenemos los datos de manera asíncrona
                const loginRequest = fakeShopApi.post<unknown, AxiosResponse<any>>(
                `/auth/login`, {
                    email,
                    password,
                }
                );
                loginRequest.then((response: any) => {
                    localStorage.setItem('token', response.data.access_token);
                }).catch(() => {
                    alert("Login failed. Bad credentials.");
                });
            }
        }
    }
})
</script>


