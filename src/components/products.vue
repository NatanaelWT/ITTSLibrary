<template>
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-14"
    >
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">5 &nbsp</p>
          <svg
            aria-hidden="true"
            class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">4 &nbsp</p>
          <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">1 &nbsp</p>
          <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">Book Name</th>
              <th scope="col" class="px-6 py-3">Author</th>
              <th scope="col" class="px-6 py-3">Genre</th>
              <th scope="col" class="px-6 py-3">Status</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Belajar Vue JS
              </th>
              <td class="px-6 py-4">Natanael Wijaya Tiono</td>
              <td class="px-6 py-4">Programming</td>
              <td class="px-6 py-4">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Menjadi Peri
              </th>
              <td class="px-6 py-4">Dharma Wiguna Limmarga</td>
              <td class="px-6 py-4">Fantasy</td>
              <td class="px-6 py-4">
                <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                With You
              </th>
              <td class="px-6 py-4">Yoga Maulana</td>
              <td class="px-6 py-4">Romance</td>
              <td class="px-6 py-4">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr
              class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Belajar Bahasa Javascript
              </th>
              <td class="px-6 py-4">Natanael Wijaya Tiono</td>
              <td class="px-6 py-4">Programming</td>
              <td class="px-6 py-4">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Cooking Recipe's
              </th>
              <td class="px-6 py-4">Yolanda Vannessa</td>
              <td class="px-6 py-4">Cooking</td>
              <td class="px-6 py-4">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              </td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
};
</script>
