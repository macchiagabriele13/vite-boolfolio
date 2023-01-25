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
                    this.project = response.data.results
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

    <div class="single-project" v-if="project">
        <img v-if="project.cover_image" width="100" height="100" class="img-fluid "
            :src="api_base_url + '/storage/' + project.cover_image" :alt="project.title">
        <img v-else src="/img/bohgabbo-min.png" alt="">
        <div class="container">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.difficulty }}
            </div>
            <div class="card-footer text-muted">
                <div class="type">
                    <strong>type: </strong>
                    <span v-if="project.type">
                        {{ project.type.name }}
                    </span>
                    <span v-else>Untyped</span>
                </div>
                <div class="technologies">
                    <strong>technologies: </strong>
                    <template v-if="project.technologies.length > 0">
                        <span v-for="technology in project.technologies">
                            #{{ technology.name }}
                        </span>
                    </template>
                    <template v-else>
                        <span>No technologies.</span>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>








<style lang="scss" scoped>

</style>