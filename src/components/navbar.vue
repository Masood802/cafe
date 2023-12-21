<script setup>
import { RouterLink, useRouter } from "vue-router";
import Phone from "./Phone.vue";
import { onMounted, ref } from "vue";
let router = useRouter();
let scrollPostioon = ref(null);
function updateScroll() {
  scrollPostioon.value = window.scrollY;
}
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
</script>

<template>
  <div class="w-full flex justify-center items-center fixed h-20 z-50" :class="{ change_bg: scrollPostioon > 550 }">
    <div class="w-[20%] ml-2">
      <h2 class="p-4 font-bold text-xl">
        Eatery <strong class="text-red-800">.</strong> Cafe
      </h2>
    </div>
    <div class="font-bold w-1/2 text-lg  flex items-center justify-center" >
      <router-link
        to="/"
        class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
        >HOME
      </router-link>
      <router-link
        to="/about"
        class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
        >ABOUT
      </router-link>
      <router-link
        to="/chef"
        class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
        >CHEF
      </router-link>
      <router-link
        to="/menu"
        class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
        >MENU
      </router-link>
      <router-link
        to="/contact"
        class="px-3 hover:text-red-700 transition-all duration-500 ease-linear"
        >CONTACT
      </router-link>
    </div>
    <div class="w-1/4 flex justify-center items-center">
      <span class="p-4 font-bold flex text-lg items-center justify-center"
        >Call Now <phone class="mx-2"></phone> 0311 2133333</span
      >
      <button class="w-1/3 h-8 bg-red-700 font-semibold text-sm">
        Reserve a Table
      </button>
    </div>
  </div>
</template>
