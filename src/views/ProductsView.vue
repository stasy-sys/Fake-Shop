<template>
    <h1>List of products</h1>
    <Product v-for="(item) in items" :id="item.id" :title="item.title" :price="item.price" :description="item.description" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Product from '@/components/Product.vue';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';
import { Item } from '@/interfaces/item';

export default defineComponent({
    // props: {
    //     items: Item[],
    // },
    components: {
        Product
    },
    setup() {
        const productRequest = fakeShopApi.get<unknown, AxiosResponse<any>>(
                `/products`
        );
        let items = ref<any>([]);
        productRequest.then((response)=> {
            response.data.forEach((element: any) => {
                items.value.push({
                    id: element.id,
                    title: element.title,
                    price: element.price,
                    description: element.description,
                })
            });
        })
        return {
            items,
        }
    }
})
</script>