<script>


export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {

            base_api_url: 'http://localhost:8000',

        }
    },
    methods: {
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/bohgabbo-min.png'
        },
    }

}

</script>

<template>





    <div class="col">
        <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
            <img class="card-image rounded-top" :src="getImagePath(project.cover_image)" alt="">
            <div class="card-body">
                <h4>{{ project.title }}</h4>
                <p>
                    {{ project.difficulty }}
                </p>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                    More</router-link>
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