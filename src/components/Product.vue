<template>
    <div>
        <router-link :to="'/products/'+id">
            <h4>
                {{ title }}
            </h4>
            {{ price }}$
            <p>
                {{ description }}
            </p>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: String,
        price: Number,
        description: String,
        id: Number,
    },
});
</script>