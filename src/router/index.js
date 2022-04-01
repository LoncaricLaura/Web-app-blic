import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HomePage.vue'
import CardBook from '/src/components/CardBook.vue'
import BookDetails from '/src/components/BookDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/CardBook',
        name: 'CardBook',
        component: CardBook,
    },
    {
        path: '/BookDetails/:id',
        name: 'BookDetails',
        component: BookDetails,
        props: true,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router