<script lang="ts" setup>
import { ArrowLongRightIcon } from "@heroicons/vue/24/solid";

const emit = defineEmits<{
  (e: "selectViewSection", value: boolean): void;
}>();
</script>
<template>
  <div class="h-8 sm:h-24"></div>
  <div class="flex items-center relative">
    <h1
      class="basis-2/5 ml-6 sm:ml-24 text-right text-5xl sm:text-8xl font-black text-neutral-800 caret-transparent whitespace-nowrap mr-8"
    >
      front-end
    </h1>
    <img
      class="absolute right-0 md:right-1/2 translate-x-10 md:translate-x-64 lg:translate-x-40 xl:translate-x-32 -top-32 translate-y-2 sm:-translate-y-1 scale-50 sm:scale-100"
      src="@/assets/images/rubberduck.png"
      alt="a rubberduck image"
      width="250"
      height="250"
    />
    <hr
      class="basis-3/5 bg-neutral-800 h-0.5 w-full ml-auto mr-0 translate-y-31"
    />
  </div>
  <div class="flex items-center">
    <hr
      class="basis-2/6 bg-neutral-800 h-0.5 w-full ml-0 mr-auto translate-y-3"
    />
    <h1
      class="basis-4/6 text-5xl sm:text-8xl font-black text-neutral-800 caret-transparent ml-8"
    >
      developer
    </h1>
  </div>
  <div class="flex w-3/4 md:pl-24 xl:pl-14">
    <div class="mx-6 sm:mx-24 md:mx-auto">
      <p
        class="font-light text-xl sm:text-2xl md:text-4xl text-neutral-800 mt-8 caret-transparent whitespace-nowrap"
      >
        Olá! Sou Eudes Silva - desenvolvedor
      </p>
      <p
        class="font-light text-xl sm:text-2xl md:text-4xl text-neutral-800 mt-2 mb-10 caret-transparent whitespace-nowrap"
      >
        front-end profissional.<br />
        <button
          class="sm:mt-8 text-1xl sm:text-2xl font-semibold bg-main-circle bg-no-repeat bg-left h-24 pb-2 pl-10 sm:-translate-x-4"
          type="button"
          @mouseenter="$emit('selectViewSection', true)"
          @mouseleave="$emit('selectViewSection', false)"
        >
          <router-link
            class="flex items-center caret-transparent whitespace-nowrap"
            to="#projects"
            >Meus projetos<ArrowLongRightIcon class="h-10 w-14 mt-1"
          /></router-link>
        </button>
      </p>
    </div>
  </div>
</template>
