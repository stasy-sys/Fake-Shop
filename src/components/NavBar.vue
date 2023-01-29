<template>
    <div class="nav-bar" v-if="$route.name !== 'login'">
        <div class="logo">
            <img class="logo-img" src="@/assets/logo.png" alt="">
            <p class="logo-text">{{shopName}}</p>
        </div>
        <nav>
            <router-link to="/products">Products</router-link> |
            <router-link to="/profile">Profile</router-link>
        </nav>
        <button v-on:click="handleLogout"> Log out </button>
    </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        shopName: String
    },
    setup() {
        return {
            handleLogout:() => {
                localStorage.removeItem("token");
                router.push("home");
            }
        }
    }
})
</script>


<style scoped>
* { 
    padding: 0;
    margin: 0
}
.nav-bar {
    background-color: rgb(166, 211, 142);
    display: flex;
    width: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    
}

.logo {
    display: flex;
}
.logo-img {
    max-height: 2em;
    align-self: center;
}

.logo-text {
    font-size: large;
    align-self: center;
    text-shadow: 1px 1px 2px green;
    color: white;
}
</style>