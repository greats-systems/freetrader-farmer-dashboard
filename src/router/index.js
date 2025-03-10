import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FarmerProfileView from '@/views/FarmerProfileView.vue'
import FarmView from '@/views/FarmView.vue'
import CropManagementView from '@/views/CropManagementView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/farmer-profile',
            name: 'farmer-profile',
            component: FarmerProfileView
        },
        {
            path: '/farm',
            name: 'farm',
            component: FarmView
        },
        {
            path: '/crop-management',
            name: 'crop-management',
            component: CropManagementView
        }
    ]
})

export default router