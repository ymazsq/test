import bar from './views/bar.vue'
import distributor from './views/distributor.vue'
import order_manager from './views/order_manager.vue'
import order_list from './views/order_list.vue'

export default {
	'bar': {
		component: bar,
		subRoutes: {
			'order_manager': {
				component: order_manager
				
			},
			'order_list': {
				component: order_list
			}
		}
	},
	'distributor': {
		component: distributor
	}
}