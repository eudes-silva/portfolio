<script lang="ts" setup>
import { ref } from "vue";

const professionalEmail = ref<string | null>(null);
function showEmail() {
  professionalEmail.value = "eudes-silva@tutanota.com";
}
</script>
<template>
  <div class="h-24"></div>
  <hr class="bg-neutral-800 h-[1px] border-none" />
  <div class="mx-auto px-6 sm:px-12 md:px-24 lg:px-48 container h-3/4 relative">
    <h1
      class="bg-white text-4xl sm:text-6xl absolute font-black text-neutral-800 caret-transparent -top-7 sm:-top-10 inline-block px-6 -ml-6 whitespace-nowrap"
    >
      Sobre mim
    </h1>
    <div class="md:flex flex-col lg:flex-row pt-2 sm:pt-12 h-full">
      <div
        class="basis-2/6 flex items-center justify-center lg:justify-normal scale-50 lg:scale-75 caret-transparent"
      >
        <img
          src="@/assets/images/my-photo-circle.png"
          alt="my photo"
          width="250"
          height="250"
        />
      </div>
      <div
        class="basis-4/6 flex flex-col justify-center sm:ml-8 md:ml-12 lg:ml-0"
      >
        <p class="text-2xl sm:text-4xl font-light caret-transparent">
          Meu nome é <span class="font-semibold">Eudes Silva</span>
        </p>
        <h2 class="text-lg sm:text-xl my-4 sm:my-8 caret-transparent">
          Acredito profundamente em transformações positivas no mundo utilizando
          a criatividade e a tecnologia. Boas experiências de usabilidade me
          interessam.
        </h2>
        <div class="w-9/12 flex">
          <ul>
            <li class="flex flex-col justify-between">
              <span class="text-sm sm:text-lg font-semibold">País:</span>
            </li>
            <li class="my-8 sm:my-10 whitespace-nowrap">
              <span class="text-sm sm:text-lg font-semibold">Educação:</span>
            </li>
            <li>
              <span class="text-sm sm:text-lg font-semibold">Email:</span>
            </li>
          </ul>
          <ul class="pl-8 sm:pl-32 flex flex-col justify-between">
            <li>
              <span class="text-sm sm:text-lg font-semibold">Brasil</span>
            </li>
            <li class="whitespace-nowrap">
              <span
                class="text-sm sm:text-lg -mb-2 relative font-semibold"
                :class="{ '-bottom-1': !professionalEmail }"
              >
                Engenharia da Computação
              </span>
            </li>
            <li>
              <Transition>
                <span
                  v-if="professionalEmail"
                  class="text-sm sm:text-lg font-semibold"
                >
                  {{ professionalEmail }}
                </span>
              </Transition>

              <button
                v-if="!professionalEmail"
                class="bg-neutral-800 text-white rounded py-2 px-4 text-xs sm:text-sm font-semibold"
                type="submit"
                @click="showEmail"
              >
                Ver endereço de email
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
