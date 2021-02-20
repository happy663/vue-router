import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import UsersProfile from "./views/UsersProfile.vue";
import UsersPosts from "./views/UsersPosts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/users/:id",
      component: Users,
      props: true,
      children: [
        { path: "post", component: UsersPosts },
        { path: "profile", component: UsersProfile, name: "user-id-profile" },
      ],
    },
    {
      path: "/hello",
      redirect: "/",
    },
  ],
});
