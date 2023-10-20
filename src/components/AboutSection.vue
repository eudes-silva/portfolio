<script lang="ts" setup>
import { ref } from "vue";

const professionalEmail = ref<string | null>(null);
function showEmail() {
  professionalEmail.value = "eudes-silva@tutanota.com";
}
</script>
<template>
  <div class="h-24"></div>
  <hr class="bg-neutral-800 h-0.5" />
  <div class="mx-auto px-6 sm:px-12 md:px-24 lg:px-48 container h-3/4 relative">
    <h1
      class="bg-white text-4xl sm:text-6xl absolute font-black text-neutral-800 caret-transparent -top-7 sm:-top-10 inline-block px-6 -ml-6 whitespace-nowrap"
    >
      Sobre mim
    </h1>
    <div class="md:flex flex-col lg:flex-row pt-8 sm:pt-12 h-full">
      <div
        class="basis-2/6 flex items-center justify-center lg:justify-normal scale-75 lg:scale-100"
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
        <p class="text-2xl sm:text-4xl font-light">
          Meu nome é <span class="font-semibold">Eudes Silva</span>
        </p>
        <h2 class="text-lg sm:text-xl my-4 sm:my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          quibusdam libero possimus nobis eaque illo quas dolore consequatur
          autem qui fuga doloribus inventore cumque ea quidem, dolorem numquam
          iusto corporis.
        </h2>
        <div class="w-9/12 flex">
          <ul>
            <li class="flex flex-col justify-between">
              <span class="text-base sm:text-xl"><strong>País:</strong></span>
            </li>
            <li class="my-4 sm:my-12 whitespace-nowrap">
              <span class="text-sm sm:text-xl"><strong>Educação:</strong></span>
            </li>
            <li>
              <span class="text-sm sm:text-xl"><strong>Email:</strong></span>
            </li>
          </ul>
          <ul class="pl-8 sm:pl-32 flex flex-col justify-between">
            <li>
              <span class="text-sm sm:text-xl"><strong>Brasil</strong></span>
            </li>
            <li class="whitespace-nowrap">
              <span
                class="text-sm sm:text-xl -mb-2 relative"
                :class="{ '-bottom-1': !professionalEmail }"
              >
                <strong>Engenharia da Computação</strong>
              </span>
            </li>
            <li>
              <Transition>
                <span v-if="professionalEmail" class="text-sm sm:text-xl">
                  <strong>{{ professionalEmail }}</strong>
                </span>
              </Transition>

              <button
                v-if="!professionalEmail"
                class="bg-neutral-800 text-white rounded py-2 px-4 text-sm"
                type="submit"
                @click="showEmail"
              >
                <strong>Ver endereço de email</strong>
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
