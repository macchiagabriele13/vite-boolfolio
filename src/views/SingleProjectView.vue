<script>
import axios from 'axios'

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: null,
            loading: true,
            api_base_url: 'http://localhost:8000'
        }
    },
    mounted() {
        const url = this.api_base_url + '/api/projects/' + this.$route.params.slug
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.post = response.data.results
                    this.loading = false
                } else {

                }

            }).catch(error => {
                console.log(error)
            })
    }
}
</script>


<template>

    <div class="single-post" v-if="projects">
        <img class="img-fluid w-100" :src="api_base_url + '/storage/' + project.cover_image" :alt="project.title">
        <div class="container">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.difficulty }}
            </div>
        </div>
    </div>
</template>








<style lang="scss" scoped>

</style>