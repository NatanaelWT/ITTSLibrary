<template>
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700 mt-14"
    >
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-lg lg:text-2xl text-gray-400 dark:text-gray-500">
            Visitor : 10 &nbsp
          </p>
          <svg
            aria-hidden="true"
            class="hidden lg:block flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-md lg:text-2xl text-gray-400 dark:text-gray-500">
            New User : 3 &nbsp
          </p>
          <svg
            aria-hidden="true"
            class="hidden lg:block flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-md lg:text-2xl text-gray-400 dark:text-gray-500">
            Total User : 5 &nbsp
          </p>
          <svg
            aria-hidden="true"
            class="hidden lg:block flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-80 dark:bg-gray-800"
        >
          <pie-chart :data="Semester"></pie-chart>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-80 dark:bg-gray-800"
        >
          <pie-chart :data="user"></pie-chart>
        </div>
      </div>
      <div class="text-center">
        <p>Statistik Data Peminjaman</p>
        <line-chart :data="peminjaman[0]"></line-chart>
        <br /><br /><br />
      </div>
      <div class="text-center">
        <p>Statistik Data Genre Buku</p>
        <column-chart :data="buku"></column-chart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      peminjaman: [
        {
          "2022-011-13": 2,
          "2022-012-14": 5,
          "2023-01-15": 6,
          "2023-02-16": 8,
          "2023-03-17": 10,
        },
      ],
      user: [
        ["ITTS", 44],
        ["ITS", 23],
        ["ITB", 12],
      ],
      Semester: [
        ["Semester 1", 5],
        ["Semester 2", 2],
        ["Semester 3", 8],
        ["Semester 4", 14],
        ["Semester 5", 6],
        ["Semester 6", 19],
        ["Semester 7", 7],
        ["Semester 8", 4],
      ],
      buku: [
        ["Programming", 32],
        ["Romance", 32],
        ["Fantasy", 46],
        ["Action", 28],
        ["Cooking", 28],
      ],
    };
  },
};
</script>
