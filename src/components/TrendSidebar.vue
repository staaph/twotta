<template>
  <div
    class="md:flex md:flex-col sm:w-1/3 hidden h-full border-l border-lighter py-2 px-6 overflow-y-scroll"
  >
    <!-- SEARCHBAR -->
    <div class="flex w-full justify-center mb-4">
      <div class="relative w-full block">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            stroke="currentCollor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          class="p-2 pl-12 w-full bg-lighter rounded-full border border-gray-300 text-sm outline-none"
          placeholder="Search Twotta"
        />
      </div>
    </div>
    <!-- END SEARCHBAR -->
    <!-- Trends -->
    <div class="w-full rounded-lg bg-lightest">
      <div class="flex items-center justify-between p-3">
        <p class="text-lg font-bold">Trends</p>
      </div>
      <button
        v-for="trend in trending"
        :key="trend"
        class="w-full flex hover:bg-lighter p-3 border-t border-lighter"
      >
        <div class="">
          <p class="text-xs text-left leading-tight text-dark">
            {{ trend.top }}
          </p>
          <p class="font-semibold text-sm text-left leading-tight">
            {{ trend.title }}
          </p>
          <p class="text-left text-sm leading-tight text-dark">
            {{ trend.bottom }}
          </p>
        </div>
        <i class="fas fa-angle-down text-lg text-dark"></i>
      </button>
      <button
        class="p-3 w-full hover:bg-lighter text-left text-blue border-t border-lighter"
      >
        Show More
      </button>
    </div>
    <!-- End Trends -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      trending: [
        { top: '1. Trends', title: 'Programming', bottom: '14.874 Tweets' },
        { top: '2. Trends', title: 'VueJS', bottom: '8.235 Tweets' },
        { top: '3. Trends', title: 'NuxtJS', bottom: '5.783 Tweets' },
        { top: '4. Trends', title: 'NestJS', bottom: '3.462 Tweets' },
        { top: '5. Trends', title: 'TailwindCSS', bottom: '1.236 Tweets' },
      ],
    };
  },
};
</script>
