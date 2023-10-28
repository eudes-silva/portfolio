<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const props = withDefaults(
  defineProps<{
    navItems?: { id: number; hash: string; name: string }[];
    logoInitials?: string;
  }>(),
  {
    navItems: () => [
      { id: 1, hash: "#home", name: "Home" },
      { id: 2, hash: "#about", name: "Sobre mim" },
      { id: 3, hash: "#projects", name: "Projetos" },
      { id: 4, hash: "#skills", name: "Habilidades" },
    ],
    logoInitials: "es",
  }
);
const route = useRoute();
const currentPath = computed(() => route.hash);
</script>
<template>
  <div
    class="flex flex-row justify-between items-center bg-gray-100 h-24 px-4 sm:px-12 md:px-24 fixed w-full z-10"
  >
    <h1
      @mouseenter="$emit('selectViewSection', true)"
      @mouseleave="$emit('selectViewSection', false)"
      to="#home"
      class="flex-none text-5xl uppercase border font-black border-gray-400 pb-1 px-1 rotate-90 select-none"
    >
      <router-link class="caret-transparent" to="#home">{{
        logoInitials
      }}</router-link>
    </h1>
    <nav
      @mouseenter="$emit('selectViewSection', true)"
      @mouseleave="$emit('selectViewSection', false)"
      class="font-light text-right hidden sm:flex"
    >
      <ul class="flex justify-end select-none">
        <li
          class="relative whitespace-nowrap ml-12"
          v-for="navItem in props.navItems"
          :key="navItem.id"
        >
          <router-link class="caret-transparent" :to="navItem.hash">{{
            navItem.name
          }}</router-link>
          <span
            class="text-black block absolute top-4 translate-x-1/2 right-1/2 caret-transparent"
            v-if="navItem.hash === currentPath"
            >&#8226;</span
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
