import { createRouter, createWebHistory } from 'vue-router'
import { routes as cocktailRoutes } from '@/Cocktails/router'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '',
			component: () => import('@/layouts/DefaultLayout.vue'),
			children: [
				{
					path: '',
					component: () => import('@/views/AppWrapper.vue'),
					children: [
						...cocktailRoutes
					]
				},
				{
					path: '/:pathMatch(.*)*',
					component: () => import('@/views/PageNotFound.vue'),
					name: 'app.page-not-found'
				}
			]
		}
	],
	scrollBehavior() {
		window.scrollTo(0, 0);
	}
})

export default router
