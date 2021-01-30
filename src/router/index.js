import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import VideoWatch from '../views/VideoWatch.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/video/:id',
        name: 'video-watch',
        component: VideoWatch
    }

]

const router = new VueRouter({
    routes
})

export default router;