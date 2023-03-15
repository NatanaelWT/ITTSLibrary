<template>
  <div class="">
    <adminNavbar />
    <sidebar />
    <div id="dashboardContent">
      <dashboard />
    </div>
    <div class="hidden" id="inboxContent">
      <inbox />
    </div>
    <div class="hidden" id="usersContent">
      <users />
    </div>
    <div class="hidden" id="productsContent">
      <products />
    </div>
    <!-- <speedDial /> -->
  </div>
</template>
<script>
import adminNavbar from "./adminNavbar.vue";
import sidebar from "./sidebar.vue";
import dashboard from "./dashboard.vue";
import speedDial from "./speedDial.vue";
import inbox from "./inbox.vue";
import users from "./users.vue";
import products from "./products.vue";
export default {
  name: "admin",
  methods: {},
  mounted() {
    let user = localStorage.getItem("name");
    if (!user) {
      this.$router.push({ name: "login" });
    }
  },
  components: {
    adminNavbar,
    sidebar,
    dashboard,
    speedDial,
    inbox,
    users,
    products,
  },
};
</script>
