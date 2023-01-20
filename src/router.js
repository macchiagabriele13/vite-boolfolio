import { createRouter, createWebHistory } from vue - router
import HomeView from './views/HomeView'
import ProjectView from '.views/ProjectView'
import ContactsView from '.views/ContactsView'
import SingleProjectView from '.views/SingleProjectView'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/project',
            name: 'project',
            component: ProjectView
        },
        {
            path: '/project/:slug',
            name: 'single-project',
            component: SingleProjectView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },
    ]
});

export { router };