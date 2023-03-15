<template>
  <header2 />

  <div id="controls-carousel" class="relative" data-carousel="static">
    <div class="z-10 text-center absolute inset-0">
      <div class="w-full h-44 md:h-60 absolute bottom-0">
        <h2 class="text-white md:text-xl md:font-semibold w-fit mx-auto">
          Online Learning Anytime, Anywhere!
        </h2>
        <h1
          class="text-[#ff7236] text-2xl md:text-5xl font-semibold my-auto w-fit mx-auto"
        >
          DISCOVER YOUR ROOTS
        </h1>
        <h2 class="w-8/12 lg:w-6/12 mx-auto text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humor,
          or randomized words.
        </h2>
      </div>
    </div>
    <!-- Carousel wrapper -->
    <div class="relative h-60 overflow-hidden md:h-[400px] brightness-[0.25]">
      <!-- Item 1 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/img/header-slide.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <img
          src="/img/header-slide.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/img/header-slide.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 4 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/img/header-slide.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 5 -->
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src="/img/header-slide.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-6 h-6 text-white dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-6 h-6 text-white dark:text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>

  <div class="w-full text-center p-2">
    <div class="shadow py-4">
      <h1 class="font-bold text-xl">
        What are you looking for at the library?
      </h1>
      <div class="mt-4 space-y-4 lg:flex lg:space-y-0">
        <div class="md:flex space-y-4 md:space-y-0 lg:w-6/12">
          <div class="w-9/12 md:w-5/12 lg:w-5/12 m-auto md:h-fit">
            <input class="w-full" type="text" placeholder="Search by keyword" />
          </div>
          <div class="w-9/12 md:w-5/12 lg:w-5/12 m-auto">
            <select class="w-full" name="" id="">
              <option value="">Search The Catalog</option>
            </select>
          </div>
        </div>
        <div class="md:flex space-y-4 md:-space-y-0 lg:w-6/12">
          <div class="w-9/12 md:w-5/12 lg:w-5/12 m-auto">
            <select class="w-full" name="" id="">
              <option value="">All Categories</option>
            </select>
          </div>
          <div class="w-9/12 md:w-5/12 lg:w-5/12 h-11 m-auto">
            <button class="w-full h-full bg-[#ff7236] text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="lg:flex my-5">
    <div class="p-3 lg:w-6/12">
      <div class="space-y-4">
        <div>
          <h1 class="text-3xl font-bold">Welcome To The ITTS Library</h1>
          <h2 class="text-[#6b6b6b] italic">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio
            eum error adipisci! Error nam sequi dolor tenetur cumque iusto,
            quidem adipisci hic eum iste facere, eligendi in quibusdam nihil qui
            sapiente nesciunt rerum culpa odio. Fugiat perferendis repellat
            laboriosam doloribus animi voluptate numquam quam sint ipsum esse
            porro tempore recusandae incidunt odio dolores nesciunt, error illo.
            Eum minima, velit nemo corporis eos quia doloribus sint recusandae
            molestiae. Laboriosam recusandae corporis dolores eum animi dolore
            vitae, suscipit itaque quaerat, odit voluptatibus velit. Illo,
            maxime reiciendis. Dolorum voluptas eaque necessitatibus quae non
            aspernatur, expedita autem facere possimus cupiditate, optio illum!
            Cumque.
          </p>
        </div>
        <div class="w-40 h-10">
          <button class="w-full h-full bg-[#ff7236] text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
    <div class="p-3 text-white lg:w-6/12">
      <div class="md:flex">
        <div class="bg-[#84bb45] w-full h-44 mx-auto pt-14 px-3">
          <div class="flex mx-auto w-fit space-x-3">
            <div class="bg-[url(./img/fact.png)] w-16 h-16"></div>
            <div class="">
              <h1 class="text-3xl">eBooks</h1>
              <h2 class="text-3xl font-bold">1537</h2>
            </div>
          </div>
        </div>
        <div class="bg-[#43c5b9] w-full h-44 mx-auto pt-14 px-3">
          <div class="flex mx-auto w-fit space-x-3">
            <div class="bg-[url(./img/fact.png)] w-16 h-16 bg-[192px_0]"></div>
            <div class="">
              <h1 class="text-3xl">eAudio</h1>
              <h2 class="text-3xl font-bold">2563</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex">
        <div class="bg-[#f56363] w-full h-44 mx-auto pt-14 px-3">
          <div class="flex mx-auto w-fit space-x-3">
            <div class="bg-[url(./img/fact.png)] w-16 h-16 bg-[128px_0]"></div>
            <div class="">
              <h1 class="text-3xl">Magazine</h1>
              <h2 class="text-3xl font-bold">1184</h2>
            </div>
          </div>
        </div>
        <div class="bg-[#00adef] w-full h-44 mx-auto pt-14 px-3">
          <div class="flex mx-auto w-fit space-x-3">
            <div class="bg-[url(./img/fact.png)] w-16 h-16 bg-[-192px_0]"></div>
            <div class="">
              <h1 class="text-3xl">Videos</h1>
              <h2 class="text-3xl font-bold">1967</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#f4f4f4] text-center p-5 my-5">
    <h1 class="text-4xl font-semibold">SUBSCRIBE TO OUR NEWSLETTERS</h1>
    <h2 class="text-[#6b6b6b] italic">
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested.
    </h2>
    <div class="w-4/5 mx-auto mt-5 text-left p-2 sm:flex sm:bg-white">
      <input
        class="text-[#6b6b6b] border-none w-full sm:w-8/12"
        type="email"
        placeholder="ENTER YOUR EMAIL!"
      />
      <div class="w-full mt-5 sm:w-4/12 sm:mt-0">
        <button class="bg-[#ff7236] text-white w-full h-full">SUBSCRIBE</button>
      </div>
    </div>
  </div>
  <footer2 />
</template>
<script>
import header2 from "./header2.vue";
import footer2 from "./footer2.vue";
export default {
  name: "landingPage",
  components: {
    header2,
    footer2,
  },
};
</script>
