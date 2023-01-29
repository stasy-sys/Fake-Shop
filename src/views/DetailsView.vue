<template>
    <h1>{{ item.title }}</h1>
    <div>{{ item.price }} $</div>
    <div>{{ item.description }}</div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';

export default defineComponent({
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        const productRequest = fakeShopApi.get<unknown, AxiosResponse<any>>(
            `/products/${props.id}`
        );
        let item = ref<any>({});
        productRequest.then((response) => {
            item.value.title = response.data.title;
            item.value.price = response.data.price;
            item.value.description = response.data.description;
        })
        return {
            item,
        }
    }
})
</script>