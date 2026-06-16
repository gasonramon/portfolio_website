import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import ProjectInfo from '../pages/ProjectInfo.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/projects',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: ProjectInfo, 
    },
  ],
})

export default router