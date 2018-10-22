import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: resolve => require(['@/pages/login'], resolve)
		},
		{
			path: '/nav',
			name: 'nav',
			component: resolve => require(['@/pages/nav'], resolve),
			children: [
				// 原生js模块---------------------------
				{
					path: 'js/array',
					name: 'js/array',
					component: resolve => require(['@/pages/js/array'], resolve)
				},
				{
					path: 'js/function',
					name: 'js/function',
					component: resolve => require(['@/pages/js/function'], resolve)
				},
				{
					path: 'js/object',
					name: 'js/object',
					component: resolve => require(['@/pages/js/object'], resolve)
				}
			]
		}
	]
})