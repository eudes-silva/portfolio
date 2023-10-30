<script lang="ts" setup>
import { ref } from "vue";
const skills = ref([
  {
    id: 1,
    name: "html",
    icon: "/icons/html.svg",
  },
  {
    id: 2,
    name: "css",
    icon: "/icons/css.svg",
  },
  {
    id: 3,
    name: "js",
    icon: "/icons/javascript.svg",
  },
  {
    id: 4,
    name: "vue",
    icon: "/icons/vue.svg",
  },
  {
    id: 5,
    name: "nuxt",
    icon: "/icons/nuxt.svg",
  },
  {
    id: 6,
    name: "vuetify",
    icon: "/icons/vuetify.svg",
  },
  {
    id: 7,
    name: "tailwind",
    icon: "/icons/tailwindcss.svg",
  },
  {
    id: 8,
    name: "vite",
    icon: "/icons/vitejs.svg",
  },
  {
    id: 9,
    name: "vitest",
    icon: "/icons/vitest.svg",
  },
]);
</script>
<template>
  <div class="h-24"></div>
  <div
    class="container mx-auto px-6 sm:px-12 md:px-24 lg:px-48 h-96 flex items-center"
  >
    <section class="bg-transparent w-100">
      <h1
        class="text-4xl sm:text-6xl font-black whitespace-nowrap select-none caret-transparent"
      >
        Habilidades.
        <hr
          class="bg-neutral-800 h-[1.5px] w-1/4 ml-auto -mr-36 -translate-y-6 border-none"
        />
      </h1>
      <p
        class="font-light mt-5 text-lg whitespace-nowrap select-none caret-transparent"
      >
        Olha mãe, eu posso voar.
      </p>
    </section>
  </div>
  <div class="text-center">
    <section
      class="w-16 h-16 inline-block mx-9"
      v-for="skill in skills"
      :key="skill.id"
    >
      <img
        :src="skill.icon"
        alt="icon"
        :srcset="skill.icon"
        class="w-full h-full"
      />
      <span
        class="inline-block mt-5 h-2 w-2 bg-neutral-800 rounded-full"
      ></span>
    </section>
    <hr class="bg-neutral-800 h-[1px] w-full -translate-y-3 border-none" />
  </div>
</template>
