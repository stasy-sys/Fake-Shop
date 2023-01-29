<template>
    <div>
        <h1>{{ name }}</h1>
        <img :src="avatar" alt="avatar">
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
        let avatar = ref<string>();

        productRequest.then((response) => {
            name.value = response.data.name;
            email.value = response.data.email;
            role.value = response.data.role;
            avatar.value = response.data.avatar;
        })
        return {
            name,
            email,
            role,
            avatar,
        }
    }
});
</script>