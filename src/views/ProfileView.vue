<template>
    <div>
        <h1>{{ name }}</h1>
        <img src="" alt="">
        <h2>{{ email }}</h2>
        <h2>{{ role }}</h2>
    </div>
</template>

<script lang="ts">import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const productRequest = fakeShopApi.get<unknown, AxiosResponse<any>>(
            `/auth/profile`
        );
        let name = ref<string>();
        let email = ref<string>();
        let role = ref<string>();

        productRequest.then((response) => {
            name.value = response.data.name;
            email.value = response.data.email;
            role.value = response.data.role;
        })
        return {
            name,
            email,
            role,
        }
    }
});
</script>