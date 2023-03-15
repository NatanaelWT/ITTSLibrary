<template>
  <!-- <div class="container mx-auto text-center">
    <div class="bg-slate-700 m-auto w-fit">
      <h3 class="text-xl">Login</h3>
      <div>
        <div>
          <input type="text" v-model="name" placeholder="Enter Name" />
        </div>
        <div>
          <input
            type="password"
            v-model="password"
            placeholder="Enter Password"
          />
        </div>
        <button v-on:click="login">Login</button>
      </div>
    </div>
  </div> -->
  <div class="container text-center mx-auto h-full pt-16">
    <div class="w-fit border border-slate-200 mx-auto p-12 rounded-lg">
      <h1 class="text-black text-2xl mb-4 font-semibold">Login</h1>
      <div
        id="alert"
        class="pt-2.5 pl-2.5 pr-4 hidden w-full h-12 bg-[#f8d7da] border border-[#f1aeb5] text-[#b02a37] rounded-lg mx-auto text-left"
      >
        <div class="flex">
          <h1 class="leading-12">Username/Password Salah!!</h1>
          <button v-on:click="close" class="font-semibold ml-auto">X</button>
        </div>
      </div>
      <div class="mb-6 mt-4">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Name</label
        >
        <input
          v-model="name"
          type="name"
          id="name"
          class="md:w-72 w-56 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Name"
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Password</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="md:w-72 w-56 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Password"
        />
      </div>
      <button
        v-on:click="login"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
      // console.warn("signup", this.name, this.password);
      if (this.name == "admin" && this.password == "admin") {
        localStorage.setItem("name", this.name);
        this.$router.push({ name: "admin" });
      } else {
        // document.getElementById("password").classList.remove("border-gray-300");
        document.querySelector("#alert").classList.remove("hidden");
      }
    },
    close() {
      document.querySelector("#alert").className += " hidden";
    },
  },
  mounted() {
    let user = localStorage.getItem("name");
    if (user) {
      this.$router.push({ name: "admin" });
    }
  },
};
</script>

<style scoped></style>
