<script>
import axios from 'axios'
import ProjectCard from './components/ProjectCard.vue'

export default {
    components: {

        ProjectCard,
    },
    name: 'ProjectList',
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
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/bohgabbo-min.png'
        },
        prevPage(url) {
            console.log(url)
            this.getPosts(url)
        },
        nextPage(url) {
            console.log(url)
            this.getPosts(url)
        }

    },
    mounted() {
        this.getProject(this.base_api_url + '/api/projects');
    }
}
</script>

<template>
    <section class="vue-home pt-5">
        <div class="container">
            <template v-if="projects">
                <div class="row row-cols-1 row-cols-sm-3 g-4">



                    <ProjectCard :project="project" v-for="project in projects"></ProjectCard>



                </div>
                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            projects.current_page
                        }}</a></li>

                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </template>
            <div v-else>
                <p> No posts here </p>
            </div>
        </div>
    </section>





</template>

<style lang="scss" scoped>

</style>