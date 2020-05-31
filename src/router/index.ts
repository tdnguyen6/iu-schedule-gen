import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/routes/Home.vue";
import About from "@/views/routes/About.vue";
import Courses from "@/views/routes/Courses.vue";
import Generator from "@/views/routes/Generator.vue";
import Profiles from "@/views/routes/Profiles.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/courses",
    name: "Courses",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Courses
  },
  {
    path: "/generator",
    name: "Generator",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Generator
  },
  {
    path: "/profiles",
    name: "Profiles",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Profiles
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
