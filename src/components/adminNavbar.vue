<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <router-link to="/" href="" class="flex ml-2 md:mr-24">
            <img src="/favicon.ico" class="h-8 mr-3" alt="FlowBite Logo" />
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
              >ITTS Library</span
            >
          </router-link>
        </div>
        <div class="flex items-center"></div>
      </div>
    </div>
  </nav>
  <!-- <nav class="w-full h-16 border-b flex px-10 min-w-[470px]">
    <div v-on:click="sidebar" class="min-w-[100] h-fit my-auto">
      <h1 class="font-bold cursor-pointer">Admin Dashboard</h1>
    </div>
    <div class="h-fit my-auto ml-auto flex">
      <h1
        v-on:click="logout"
        class="hover:text-blue-600 font-semibold cursor-pointer my-auto h-fit mr-5"
      >
        Logout
      </h1>
    </div>
  </nav> -->
</template>
<script>
export default {
  name: "adminNavbar",
};
</script>
