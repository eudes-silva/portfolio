<script lang="ts" setup>
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    logoInitials?: string;
  }>(),
  {
    logoInitials: "es",
  }
);

const socialIcons = ref([
  {
    id: 1,
    name: "whatsapp",
    icon: "/icons/whatsapp.svg",
    link: "https://wa.me/+5511961868545",
  },
  {
    id: 2,
    name: "linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://br.linkedin.com/in/eudes-silva",
  },
]);
</script>
<template>
  <div
    class="flex flex-row justify-between items-center bg-gray-200 h-48 px-4 sm:px-12 md:px-24 w-full"
  >
    <router-link class="caret-transparent" to="#home">
      <h1
        @mouseenter="$emit('selectViewSection', true)"
        class="flex-none text-5xl uppercase border font-black border-gray-400 pb-1 px-1 rotate-90 select-none"
      >
        {{ props.logoInitials }}
      </h1>
    </router-link>
    <section class="flex">
      <i v-for="socialIcon in socialIcons" :key="socialIcon.id">
        <a :href="socialIcon.link" target="_blank">
          <img
            :src="socialIcon.icon"
            alt="icon"
            :srcset="socialIcon.icon"
            class="w-12 h-12 ml-8"
          />
        </a>
      </i>
    </section>
  </div>
  <div class="bg-gray-200 text-neutral-800 px-4 sm:px-12 md:px-24 py-2 -mt-8">
    <p>Feito com &#128420; {{ new Date().getFullYear() }}</p>
  </div>
</template>
