<script>
import axios from 'axios';

export default {
    name: 'ContactsView',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {},
            base_api_url: 'http://localhost:8000',
        }
    },

    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {};

            console.log(this.name);
            console.log(this.email);
            console.log(this.message);

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(`${this.base_api_url}/api/contacts`, data).then(response => { //se ho lo state   	
                this.success = response.data.success;
                console.log(response);
                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    this.errors = response.data.errors;
                }
                this.loading = false;
            });
        }
    }

}
</script>

<template>
    <div class="container">

        <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, adipisci optio, tempore maiores sit
            asperiores
            sed est nulla esse quos quam laudantium, voluptatibus minus officiis assumenda. Ex vitae eos earum.
        </p>

        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" name="name" id="name" v-model='name' class="form-control" placeholder="Mario Rossi"
                    aria-describedby="fullNameHelper">
                <small id="fullNameHelper" class="text-muted">Add your full name</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control"
                    placeholder="mario.rossi@example.com" aria-describedby="emailHelper">
                <small id="emailHelper" class="text-muted">Add your email address</small>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" :disable="loading">{{
                loading? 'Sending...': 'Contact Me'
            }}</button>
        </form>


    </div>
</template>


<style lang="scss" scoped>

</style>