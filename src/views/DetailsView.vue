<template>
    <h1>{{ item.title }}</h1>
    <div>
        <carousel :items-to-show="1.5" :wrap-around="true">
            <slide v-for="(image, index) in item.images" :key="index">
                <img :src="image" :alt="item.title">
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    </div>
    <div>{{ item.price }} $</div>
    <div>{{ item.description }}</div>

</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import { defineComponent, ref } from 'vue';
import fakeShopApi from '@/api/fakeShopApi';
import { AxiosResponse } from 'axios';

export default defineComponent({
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
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
            item.value.images = response.data.images;
        })
        return {
            item,
        }
    }
})
</script>