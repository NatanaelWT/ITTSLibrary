<template>
  <div class="p-4 sm:ml-64">
    <div
      class="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-14"
    >
      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3 rounded-l-lg">Username</th>
              <th scope="col" class="px-6 py-3">Message</th>
              <th scope="col" class="px-6 py-3 rounded-r-lg">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Natanael Wijaya Tiono
              </th>
              <td class="px-6 py-4">
                Halaman pada buku yang berjudul "With You" tidak dapat dibuka
              </td>
              <td class="px-6 py-4">25-01-2022</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem, ipsum.
              </th>
              <td class="px-6 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti.
              </td>
              <td class="px-6 py-4">27-04-2023</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem, ipsum dolor.
              </th>
              <td class="px-6 py-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </td>
              <td class="px-6 py-4">25-01-2022</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem, ipsum.
              </th>
              <td class="px-6 py-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
                quaerat.
              </td>
              <td class="px-6 py-4">25-01-2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inbox",
};
</script>
