import {
	createRouter,
	createWebHashHistory,
	RouteRecordRaw,
	Router,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/login",
		name: "Login",
		component: () =>
			import(/* webpackChunkName: "About" */ "../views/login/login.vue"),
	},
];

const router: Router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
