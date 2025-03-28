import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: () => import("../views/Home.vue"),
		meta: { title: "Home" },
		props: (route) => ({ darkMode: route.query.darkMode }),
	},
	{
		path: "/services",
		component: () => import("../views/Services.vue"),
		meta: { title: "Services" },
		props: (route) => ({ darkMode: route.query.darkMode }),
	},
	{
		path: "/portfolio",
		component: () => import("../views/Portfolio.vue"),
		meta: { title: "Portfolio" },
		props: (route) => ({ darkMode: route.query.darkMode }),
	},
	{
		path: "/qa",
		component: () => import("../views/QA.vue"),
		meta: { title: "QA" },
		props: (route) => ({ darkMode: route.query.darkMode }),
	},
	{
		path: "/contact",
		component: () => import("../views/Contact.vue"),
		meta: { title: "Contact" },
		props: (route) => ({ darkMode: route.query.darkMode }),
	},
	{
		path: "/courses",
		component: () => import("../views/Courses.vue"),
		meta: { title: "Courses" },
		props: (route) => ({ darkMode: route.query.darkMode }),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
