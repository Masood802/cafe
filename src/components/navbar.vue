<script setup>
import { RouterLink, useRouter } from "vue-router";
import Phone from "./Phone.vue";
let router = useRouter();
</script>

<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-[20%] m-2">
      <h2 class="p-4 font-bold text-xl">
        Eatery <strong class="text-red-800">.</strong> Cafe
      </h2>
    </div>
    <div class="font-bold w-[55%]">
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
    <div class="w-[30%] mt-2 flex justify-start items-center">
      <span class="p-4 font-bold flex"
        >Call Now <phone class="p-1"></phone>0311 2133333</span
      >
      <button class="px-5 py-1 bg-red-700 font-semibold">
        Reserve a Table
      </button>
    </div>
  </div>
</template>
