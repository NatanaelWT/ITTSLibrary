<template>
  <nav
    class="z-50 px-2 sm:px-4 py-2.5 inline-block bg-gray-900/40 fixed w-full top-0 left-0 border-b border-none dark:border-gray-600"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <img src="/favicon.ico" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span
          class="self-center text-xl font-semibold whitespace-nowrap text-[#ff7236]"
          >ITTS Library</span
        >
      </router-link>
      <div class="flex md:order-2">
        <button
          type="button"
          class="text-white bg-[#ff7236] hover:bg-[#ed591a] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Get started
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-[#ff7236] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-[#ed591a] dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#ed591a] rounded bg-transparent md:p-0 text-[#ff7236]"
              aria-current="page"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#ed591a] md:p-0 md:dark:hover:text-[#ff7236] dark:text-gray-400 dark:hover:bg-gray-700 text-[#ff7236] md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#ed591a] md:p-0 md:dark:hover:text-[#ff7236] dark:text-gray-400 dark:hover:bg-gray-700 text-[#ff7236] md:dark:hover:bg-transparent dark:border-gray-700"
              >Testimony</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-600 md:hover:bg-transparent md:hover:text-[#ed591a] md:p-0 md:dark:hover:text-[#ff7236] dark:text-gray-400 dark:hover:bg-gray-700 text-[#ff7236] md:dark:hover:bg-transparent dark:border-gray-700"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "header2",
};
</script>
