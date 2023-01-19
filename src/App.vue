<script>
import axios from 'axios'

export default {
    components: {

    },
    data() {
        return {
            projects: null,
            base_api_url: 'http://localhost:8000',
            error: null,
        }
    },
    methods: {
        getProject(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;

                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message

                })
        }

    },
    mounted() {
        this.getProject(this.base_api_url + '/api/projects')
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <div class="row">
                <h1>Projects</h1>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';

.vue-home {
    color: #2c3e50;
    background: #181818;
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
