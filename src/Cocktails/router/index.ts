import { navItems } from './items';

export const routes = [{
	path: '',
	redirect: () => {
		return { path: navItems[0].path }
	},
},
...navItems.map(item => ({
	path: item.path,
	name: item.path,
	component: () => import('../views/CardPage.vue'),
}))]