<script setup>
import navbar from "@/components/navbar.vue";
import slider from "@/components/slider.vue";
import Menu from "./Menu.vue";
import Chefs from "./Chefs.vue";
import About from "./AboutView.vue";
</script>

<template>
  <div
    class="bg-transparent absolute text-white w-full "
  >
    <navbar></navbar>
  </div>

  <div
    class="w-full flex justify-between items-center relative"
  >
  <slider></slider>
    <div
      class="w-2/5 text-left p-4 absolute top-42 ml-6 text-slate-100 font-bold"
    >
      <h2>EATERY CAFE & RESTORENT</h2>
      <p class="text-4xl my-8">
        Our mission is to provide an unforgettable experience
      </p>
      <button
        class="bg-transparent  hover:bg-red-700 hover:border-none w-52 px-6 py-2 mt-8 text-sm border transition-all duration-700 ease-in"
      >
        Discover Menu
      </button>
    </div>
  </div>
  
  
</template>
