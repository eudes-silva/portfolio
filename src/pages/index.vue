<script lang="ts" setup>
import Header from "@/components/Header.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import router from "@/router";
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useRoute } from "vue-router";
const route = useRoute();

const home = ref(null);
const about = ref(null);
const projects = ref(null);
const skills = ref(null);
const isViewSectionSelected = ref(false);

onMounted(() => {
  if (route.fullPath === "/") {
    router.push("/#home");
  }
});

function handleIntersectionObserver(ref: any, routeName: string) {
  useIntersectionObserver(ref, ([{ isIntersecting }]) => {
    if (isIntersecting && !isViewSectionSelected.value) {
      router.push(`/#${routeName}`);
    }
  });
}
handleIntersectionObserver(home, "home");
handleIntersectionObserver(about, "about");
handleIntersectionObserver(projects, "projects");
handleIntersectionObserver(skills, "skills");

function selectViewSection(value: boolean) {
  isViewSectionSelected.value = value;
}
</script>
<template>
  <Header @selectViewSection="selectViewSection" />
  <div
    class="h-screen bg-gray-100 bg-main-circle bg-contain bg-no-repeat bg-center pt-64 sm:pt-32"
    id="home"
    ref="home"
  >
    <HomeSection @selectViewSection="selectViewSection" />
  </div>
  <div
    class="h-screen"
    :class="route.fullPath === '/#about' ? 'pt-16 sm:pt-24' : 'pt-6'"
    id="about"
    ref="about"
  >
    <AboutSection />
  </div>
  <div class="min-h-screen bg-gray-100" id="projects" ref="projects">
    <ProjectsSection />
  </div>
  <div class="h-screen bg-orange-400" id="skills" ref="skills">
    <SkillsSection />
  </div>
</template>
