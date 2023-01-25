<script>
export default {
    name: 'NavBar',

}
</script>

<template>

    <nav class="d-flex justify-content-between">
        <div class="logo">
            <img class="h-100" src="/img/GM.png" alt="">
        </div>

        <!-- Nav tabs -->
        <ul class="nav" id="navId" role="nav">
            <li class="nav-item px-3">
                <router-link class="text-decoration-none text-white" :to="{ name: 'home' }"> Home </router-link>
            </li>
            <li class="nav-item px-3">
                <router-link class="text-decoration-none text-white" :to="{ name: 'project' }"> Project </router-link>
            </li>
            <li class="nav-item px-3">
                <router-link class="text-decoration-none text-white" :to="{ name: 'contacts' }"> Contacts </router-link>
            </li>
        </ul>
    </nav>






</template>

<style lang="scss" scoped>
.logo {
    padding: 0 !important;
}

nav {
    background-color: black;
}

router-link {
    color: white;
    text-decoration: none;

}

a:hover {
    color: blue !important;
}

ul {
    align-content: center;
}
</style>