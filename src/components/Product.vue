<template>
    <div>
        <h4>
            {{title}}
        </h4>
        {{ price }}$
        <p>
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: String,
        price: Number,
        description: String,
    },
});
</script>