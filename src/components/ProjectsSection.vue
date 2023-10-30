<script lang="ts" setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";
const projects = ref([
  {
    id: 1,
    name: "last drink",
    thumbnail: "/images/lastdrink-thumb.png",
    link: "https://last-drink.vercel.app/",
  },
  {
    id: 2,
    name: "infinity store",
    thumbnail: "/images/infinitystore-thumb.png",
    link: "https://infinity-store-eudes-silva.vercel.app/",
  },
]);
const projectId = ref(0);
function showDetailsBtn(id: number) {
  projectId.value = id;
}
</script>
<template>
  <div class="h-24"></div>
  <div
    class="container mx-auto px-6 sm:px-12 md:px-24 lg:px-48 h-96 flex items-center"
  >
    <section class="bg-transparent w-100">
      <h1 class="text-4xl sm:text-6xl font-black whitespace-nowrap select-none">
        Feito com dedicação.
        <hr
          class="bg-neutral-800 h-[1.5px] w-1/6 ml-auto -mr-36 -translate-y-6 border-none"
        />
      </h1>
      <p class="font-light mt-5 text-lg whitespace-nowrap select-none">
        Alguns dos meus últimos projetos.
      </p>
    </section>
  </div>
  <div>
    <section
      v-for="project in projects"
      :key="project.id"
      :class="project.id === 1 ? 'border-y-2' : 'border-b-2'"
      class="h-96 bg-transparent transition-colors duration-500 ease-in-out bg-white sm:bg-transparent hover:bg-white hover:border-transparent cursor-pointer"
    >
      <ul
        class="flex flex-col sm:flex-row h-full"
        @mouseover="showDetailsBtn(project.id)"
        @mouseleave="projectId = 0"
      >
        <li class="flex items-center w-full sm:w-3/4 py-16">
          <hr class="bg-gray-300 h-0.5 w-24 ml-0 border-none" />
          <span class="text-xl sm:text-3xl font-light mx-10 select-none">{{
            project.id < 10 ? "0" + project.id : project.id
          }}</span>
          <h1
            class="font-black text-3xl sm:text-5xl -translate-y-1 sm:-translate-y-1.5 whitespace-nowrap select-none"
          >
            {{ project.name }}
          </h1>
        </li>
        <li
          :class="project.thumbnail"
          class="w-full sm:w-1/2 xl:w-1/3 h-56 sm:h-full flex-none relative"
        >
          <img
            class="brightness-50 h-full"
            :src="project.thumbnail"
            alt="Project thumbnail image"
            object-cover
          />
          <button
            :class="{
              'lg:opacity-100 hover:border-2 hover:sm:bg-transparent hover:sm:border-white':
                projectId === project.id,
            }"
            class="py-1 px-10 rounded-full bg-white lg:opacity-0 transition-all duration-500 ease-in-out text-white bg-opacity-50 font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-transparent"
          >
            <a
              :href="project.link"
              class="flex items-center whitespace-nowrap"
              target="_blank"
              >Mais detalhes <ArrowLongRightIcon class="-ml-2 -mr-5 h-7 w-14"
            /></a>
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>
